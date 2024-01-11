import * as sc from '../lib/jssc3/dist/jssc3.js'
import * as sl from '../lib/spl/dist/sl.js'

import { initCodeGen } from './gen.js'
import { initCodeGenUgen } from './gen-ugen.js'
import { graphMenuInit } from './graph-menu.js'
import { layoutMenuInit } from './layout.js'
import { loadNotes } from './notes.js'
import { displayScrollbars } from './scrollbars.js'
import * as xml from './xml.js'

export class Blk {
	constructor(Blockly, trackHistory) {
		this.Blockly = Blockly;
		this.trackHistory = trackHistory; // boolean
		this.config = null;
		this.workspace = null;
		this.layouts = null;
	}
}

// Configure and inject Blockly given Xml format toolbox definition.
function injectWithXmlToolbox(blk, onCompletion) {
	return function (xmlToolbox) {
		blk.config = {
			media: 'lib/blockly-10.2.2/media/',
			sounds: false,
			toolbox: xmlToolbox,
			rtl: false,
			move: {
				scrollbars: {horizontal: true, vertical: true},
				drag: true,
				wheel: false
			},
			zoom: {
				controls: true,
				wheel: true,
				startScale: 1.0,
				maxScale: 3,
				minScale: 0.3,
				scaleSpeed: 1.2,
				pinch: true
			},
			trashcan: false
		}
		blk.workspace = blk.Blockly.inject('blocklyContainer', blk.config);
		displayScrollbars(blk, false);
		// console.debug('injectWithXmlToolbox: injection completed');
		onCompletion(blk);
	};
}

function getCodeSl(blk) {
	const slText = blk.Blockly.JavaScript.workspaceToCode(blk.workspace);
	// console.debug('getCodeSl', slText);
	return slText;
}

function getCodeJs(blk) {
	const slText = getCodeSl(rec);
	console.debug(`getCodeJs: slText: ${slText}`);
	const jsText = sl.rewriteString(slText);
	console.debug(`getCodeJs: jsText: ${jsText}`);
	return jsText;
}

export function evalCode(blk) {
	return eval(getCodeJs(blk));
}

function addWorkspaceEnv(input) {
	const gate = sc.NamedControl("workspaceGate", 1);
	const attackTime = sc.NamedControl("workspaceAttackTime", 0.01);
	const releaseTime = sc.NamedControl("workspaceReleaseTime", 0.1);
	const envelope = sc.Asr(gate, attackTime, releaseTime, 'sin');
	return sc.Mul(input, envelope);
}

export function playCode(blk) {
	globalScSynth.playUgenAt(addWorkspaceEnv(evalCode(rec)), 0, -1, 1, []);
}

export function replaceCode(blk) {
	globalScSynth.sendOsc(sc.n_set(-1, [["workspaceReleaseTime", 3], ["workspaceGate", 0]]));
	globalScSynth.playUgenAt(addWorkspaceEnv(evalCode(rec)), 0, -1, 1, [["workspaceAttackTime", 3], ["workspaceReleaseTime", 3]]);
}

export function printCode(blk) {
	return sc.prettyPrintSyndefOf(evalCode(blk));
}

function pre(blk, onCompletion) {
	blk.Blockly.utils.colour.setHsvSaturation(0.20);
	blk.Blockly.utils.colour.setHsvValue(0.95);
	blk.Blockly.Msg['VARIABLESSET'] = '%1 ≔ %2';
	blk.Blockly.Msg['LISTSCREATEWITHINPUTWITH'] = '⟦⟧';
	sc.fetchJson('json/blksc3.json', { cache: 'no-cache' })
		.then(blk.Blockly.defineBlocksWithJsonArray);
	sc.fetchJson('json/blksc3-std.json', { cache: 'no-cache' })
		.then(blk.Blockly.defineBlocksWithJsonArray); // not -compact
	sc.fetchJson('json/blksc3-ugen.json', { cache: 'no-cache' })
		.then(blk.Blockly.defineBlocksWithJsonArray);
	sc.fetchUtf8('xml/blksc3.xml', { cache: 'no-cache' })
		.then(injectWithXmlToolbox(blk, onCompletion));
}

function loadHelpGraph(blk, graphPath) {
	xml.fetchXml(blk, `${graphPath}.xml`, false);
	loadNotes(`${graphPath}.sl`)
		.then(sc.setterForInnerHtmlOf('blkNotes'));
	if(blk.trackHistory) {
		sc.windowUrlSetParam('e', graphUrl);
	}
}

// Initialisation function, to be called on document load.
export function init(Blockly, withUiCtl, trackHistory) {
	const blk = new Blk(Blockly, trackHistory);
	initCodeGen(blk);
	initCodeGenUgen(blk);
	pre(blk, function(blk) {
		blk.workspace.addChangeListener(onWorkspaceChange(blk));
		xml.maybeLoadXmlFromUrlParam(blk, 'e');
	});
	sc.connectButtonToInput('xmlInputFileSelect', 'xmlInputFile'); // Initialise .xml file selector
	graphMenuInit('programMenu', 'graph', path => loadHelpGraph(blk, path));
	sc.fetchJson('json/program-menu.json', { cache: 'no-cache' })
		.then(json => sc.selectAddKeysAsOptions('programMenu', json.programMenu));
	graphMenuInit('helpMenu', 'ugen', path => loadHelpGraph(blk, path));
	sc.fetchJson('json/help-menu.json', { cache: 'no-cache' })
		.then(json => sc.selectAddKeysAsOptions('helpMenu', json.helpMenu));
	graphMenuInit('guideMenu', 'guide', path => loadHelpGraph(blk, path))
	sc.fetchJson('json/guide-menu.json', { cache: 'no-cache' })
		.then(json => sc.selectAddKeysAsOptions('guideMenu', json.guideMenu));
	graphMenuInit('smallProgramsMenu', 'graph', path => loadHelpGraph(blk, path));
	sc.fetchJson('json/small-programs-menu.json', { cache: 'no-cache' })
		.then(json => sc.selectAddKeysAsOptions('smallProgramsMenu', json.smallProgramsMenu));
	sc.userPrograms.storageKey = 'blksc3UserPrograms/xml';
	sc.userProgramMenuInit('userMenu', xmlText => xml.loadXml(blk, xmlText));
	sc.selectOnChange('actionsMenu', function(menuElement, entryName) {
		sc.userActionDo(entryName, 'userMenu', 'userProgramArchiveFile');
		menuElement.selectedIndex = 0;
	});
	layoutMenuInit(blk);
	if(withUiCtl) {
		sc.fetchUtf8('html/ui-ctl.html', { cache: 'no-cache' })
			.then(sc.setterForInnerHtmlOf('uiCtlContainer'));
	}
	return blk;
}

function onWorkspaceChange(blk) {
	return function(event) {
		if(event.type == Blockly.Events.BLOCKCHANGE && event.element == 'field') {
			const aBlock = blk.workspace.getBlockById(event.blockId);
			if(aBlock) {
				if(aBlock.type == 'sc3ControlField') {
					globalScSynth.sendOsc(sc.n_set1(-1, aBlock.id, aBlock.getFieldValue('VALUE')));
				}
			}
		}
	}
}

// Get .xml serialization of workspace.  (The .xml format is no longer being worked on.)
export function workspaceXml(blk) {
	const xml = blk.Blockly.Xml.workspaceToDom(blk.workspace);
	return blk.Blockly.Xml.domToPrettyText(xml);
}
