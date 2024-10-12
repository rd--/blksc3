import * as sc from '../lib/jssc3/dist/jssc3.js';
import * as sl from '../lib/spl/dist/sl.js';

import { initCodeGen } from './gen.js';
import { initCodeGenUgen } from './gen-ugen.js';
import { graphMenuInit } from './graph-menu.js';
import { layoutMenuInit } from './layout.js';
import { loadNotes } from './notes.js';
import { displayScrollbars } from './scrollbars.js';
import * as json from './json.js';

export class Blk {
	constructor(Blockly, trackHistory) {
		this.Blockly = Blockly;
		this.trackHistory = trackHistory; // boolean
		this.config = null;
		this.workspace = null;
		this.layouts = null;
		this.naming = 'Symbolic';
		this.whichToolbox = 'Complete';
	}
}

// Configure and inject Blockly given toolbox definition.
function injectWithToolbox(blk, onCompletion) {
	return function (toolbox) {
		blk.config = {
			media: 'lib/blockly-11.1.1/media/',
			renderer: 'thrasos', // geras thrasos zelos
			sounds: false,
			toolbox: toolbox,
			rtl: false,
			move: {
				scrollbars: {
					horizontal: true,
					vertical: true
				},
				drag: true,
				wheel: false,
			},
			zoom: {
				controls: true,
				wheel: true,
				startScale: 1.0,
				maxScale: 3,
				minScale: 0.3,
				scaleSpeed: 1.2,
				pinch: true,
			},
			trashcan: false,
		};
		blk.workspace = blk.Blockly.inject('blocklyContainer', blk.config);
		displayScrollbars(blk, false);
		// console.debug('injectWithToolbox: injection completed');
		onCompletion(blk);
	};
}

function getCodeSl(blk) {
	const slText = blk.Blockly.JavaScript.workspaceToCode(blk.workspace);
	// console.debug('getCodeSl', slText);
	return slText;
}

function getCodeJs(blk) {
	const slText = getCodeSl(blk);
	console.debug(`getCodeJs: slText: ${slText}`);
	const jsText = sl.rewriteString(slText);
	console.debug(`getCodeJs: jsText: ${jsText}`);
	return jsText;
}

export function evalCode(blk) {
	return eval(getCodeJs(blk));
}

function addWorkspaceEnv(input) {
	const gate = sc.NamedControl('workspaceGate', 1);
	const attackTime = sc.NamedControl('workspaceAttackTime', 0.01);
	const releaseTime = sc.NamedControl('workspaceReleaseTime', 0.1);
	const envelope = sc.Asr(gate, attackTime, releaseTime, 'sin');
	return sc.Mul(input, envelope);
}

export function playCode(blk) {
	globalScSynth.playUgenAt(addWorkspaceEnv(evalCode(blk)), 0, -1, 1, []);
}

export function replaceCode(blk) {
	globalScSynth.sendOsc(
		sc.n_set(-1, [['workspaceReleaseTime', 3], ['workspaceGate', 0]]),
	);
	globalScSynth.playUgenAt(addWorkspaceEnv(evalCode(blk)), 0, -1, 1, [[
		'workspaceAttackTime',
		3,
	], ['workspaceReleaseTime', 3]]);
}

export function printCode(blk) {
	return sc.prettyPrintSyndefOf(evalCode(blk));
}

function set_block_messages(blk) {
//	blk.Blockly.Msg['VARIABLES_SET'] = '%1 ≔ %2';
//	blk.Blockly.Msg['LISTS_CREATE_WITH_INPUT_WITH'] = '⟦⟧';
}

function set_colours(blk) {
	blk.Blockly.utils.colour.setHsvSaturation(0.20);
	blk.Blockly.utils.colour.setHsvValue(0.95);
	blk.Blockly.Msg['SC_LIST_HUE'] = '260';
	blk.Blockly.Msg['SC_ENV_HUE'] = '300';
	blk.Blockly.Msg['SC_PAN_HUE'] = '300';
	blk.Blockly.Msg['SC_GENERATOR_HUE'] = '210';
	blk.Blockly.Msg['SC_IO_HUE'] = '60';
	blk.Blockly.Msg['SC_RAND_HUE'] = '60';
	blk.Blockly.Msg['SC_LAMBDA_HUE'] = '180';
	blk.Blockly.Msg['SC_ITER_HUE'] = '180';
	blk.Blockly.Msg['SC_EVENT_HUE'] = '180';
	blk.Blockly.Msg['SC_MATH_HUE'] = '230';
	blk.Blockly.Msg['SC_META_HUE'] = '300';
	blk.Blockly.Msg['SC_PROCESSOR_HUE'] = '150';
	blk.Blockly.Msg['SC_TRIGGER_HUE'] = '30';
	blk.Blockly.Msg['SC_VAR_HUE'] = '330';
}

export function load_block_messages(blk, filename) {
	sc.fetchJson(filename, { cache: 'no-cache' })
		.then(function(messages) {
			for (const key in messages) {
				const value = messages[key];
				// console.debug(`load_block_messages: ${key} = ${value}`);
				blk.Blockly.Msg[key] = messages[key];
			}
		})
}

function load_block_definitions(blk, filename) {
	sc.fetchJson(filename, { cache: 'no-cache' })
		.then(blk.Blockly.defineBlocksWithJsonArray);
}

function load_json_toolbox(blk, fileName, onCompletion) {
	sc.fetchJson(fileName, { cache: 'no-cache' })
		.then(injectWithToolbox(blk, onCompletion));
}

function loadHelpGraph(blk, graphPath) {
	json.fetchJson(blk, `${graphPath}.json`, false);
	loadNotes(`${graphPath}.sl`)
		.then(sc.setterForInnerHtmlOf('blkNotes'));
	if (blk.trackHistory) {
		sc.windowUrlSetParam('e', graphPath);
	}
}

// If the Url has fileParamKey, load the named .json/.sl files.
function maybeLoadHelpFileFromUrlParam(blk, fileParamKey) {
	const fileName = sc.urlGetParam(fileParamKey);
	if (fileName) {
		loadHelpGraph(blk, fileName);
	}
}

export function next_naming_scheme(blk) {
	blk.naming = (blk.naming == 'Symbolic' ? 'Text' : 'Symbolic');
	load_block_messages(blk, `json/${blk.naming}Messages.json`);
}

export function next_toolbox(blk) {
	blk.whichToolbox = (blk.whichToolbox == 'Complete' ? 'Small' : 'Complete');
	sc.fetchJson(`json/${blk.whichToolbox}Toolbox.json`, { cache: 'no-cache' })
		.then(tree => blk.workspace.updateToolbox(tree))
}

// Initialisation function, to be called on document load.
export function init(Blockly, withUiCtl, trackHistory) {
	const blk = new Blk(Blockly, trackHistory);
	initCodeGen(blk);
	initCodeGenUgen(blk);
	blk.Blockly.ContextMenuItems.registerCommentOptions();
	set_block_messages(blk);
	set_colours(blk);
	load_block_messages(blk, `json/${blk.naming}Messages.json`);
	load_block_definitions(blk, 'json/BlockDefinitions.json');
	load_block_definitions(blk, 'json/UgenBlockDefinitions.json');
	load_json_toolbox(blk, 'json/CompleteToolbox.json', function (blk) {
		blk.workspace.addChangeListener(onWorkspaceChange(blk));
		maybeLoadHelpFileFromUrlParam(blk, 'e');
	});
	sc.connectButtonToInput('jsonInputFileSelect', 'jsonInputFile'); // Initialise .json file selector
	graphMenuInit('programMenu', 'graph', (path) => loadHelpGraph(blk, path));
	sc.fetchJson('json/ProgramMenu.json', { cache: 'no-cache' })
		.then((json) => sc.selectAddKeysAsOptions('programMenu', json.programMenu));
	graphMenuInit('helpMenu', 'ugen', (path) => loadHelpGraph(blk, path));
	sc.fetchJson('json/HelpMenu.json', { cache: 'no-cache' })
		.then((json) => sc.selectAddKeysAsOptions('helpMenu', json.helpMenu));
	graphMenuInit('guideMenu', 'guide', (path) => loadHelpGraph(blk, path));
	sc.fetchJson('json/GuideMenu.json', { cache: 'no-cache' })
		.then((json) => sc.selectAddKeysAsOptions('guideMenu', json.guideMenu));
	graphMenuInit(
		'smallProgramsMenu',
		'graph',
		(path) => loadHelpGraph(blk, path),
	);
	sc.fetchJson('json/SmallProgramsMenu.json', { cache: 'no-cache' })
		.then((json) =>
			sc.selectAddKeysAsOptions('smallProgramsMenu', json.smallProgramsMenu)
		);
	sc.userPrograms.storageKey = 'blksc3UserPrograms/json';
	sc.userProgramMenuInit(
		'userMenu',
		(jsonText) => json.loadJson(blk, jsonText),
	);
	sc.selectOnChange('actionsMenu', function (menuElement, entryName) {
		sc.userActionDo(entryName, 'userMenu', 'userProgramArchiveFile');
		menuElement.selectedIndex = 0;
	});
	layoutMenuInit(blk);
	if (withUiCtl) {
		sc.fetchUtf8('html/ui-ctl.html', { cache: 'no-cache' })
			.then(sc.setterForInnerHtmlOf('uiCtlContainer'));
	}
	return blk;
}

function onWorkspaceChange(blk) {
	// console.debug('onWorkspaceChange');
	return function (event) {
		// console.debug('onWorkspaceChange', event.type, event.element);
		if (event.type == Blockly.Events.BLOCK_CHANGE && event.element == 'field') {
			const aBlock = blk.workspace.getBlockById(event.blockId);
			if (aBlock) {
				// console.debug('onWorkspaceChange', aBlock.type);
				if (aBlock.type == 'sc3_ControlField') {
					// console.debug('onWorkspaceChange', aBlock.getFieldValue('VALUE'));
					globalScSynth.sendOsc(
						sc.n_set1(-1, aBlock.id, aBlock.getFieldValue('VALUE')),
					);
				}
			}
		}
	};
}

// Get .json serialization of workspace.
export function workspaceJson(blk) {
	const jsonData = Blockly.serialization.workspaces.save(blk.workspace);
	const jsonText = JSON.stringify(jsonData, null, ' ');
	return jsonText;
}
