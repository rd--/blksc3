import * as sc from '../lib/jssc3/dist/jssc3.js'
import * as sl from '../lib/spl/dist/sl.js'

import { init_codegen } from './gen.js'
import { init_codegen_ugen } from './gen-ugen.js'
import { graph_menu_init } from './graph-menu.js'
import { layout_menu_init } from './layout.js'
import { load_notes_and_then } from './notes.js'
import { display_scrollbars } from './scrollbars.js'
import * as xml from './xml.js'

// blk = { Blockly, json, xml, workspace, config, track_history, layouts };

// Configure and inject Blockly given Xml format toolbox definition.
function inject_with_xml_toolbox(blk, onCompletion) {
	return function (xml_toolbox) {
		blk.config = {
			media: 'lib/blockly-10.1.3/media/',
			sounds: false,
			toolbox: xml_toolbox,
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
		display_scrollbars(blk, false);
		// console.debug('inject_with_xml_toolbox: injection completed');
		onCompletion(blk);
	};
}

function get_code_sl(blk) {
	const slText = blk.Blockly.JavaScript.workspaceToCode(blk.workspace);
	// console.debug('get_code_sl', slText);
	return slText;
}

function get_code_js(blk) {
	const slText = get_code_sl(rec);
	console.debug(`get_code_js: slText: ${slText}`);
	const jsText = sl.rewriteString(slText);
	console.debug(`get_code_js: jsText: ${jsText}`);
	return jsText;
}

export function eval_code(blk) {
	return eval(get_code_js(blk));
}

export function play_code(blk) {
	return sc.scSynthEnsure(globalScSynth, function() {
		return sc.playUgenAt(globalScSynth, eval_code(rec), 1);
	});
}

export function print_code(blk) {
	return sc.prettyPrintSyndefOf(blk.eval_code(blk));
}

function pre(blk, onCompletion) {
	blk.Blockly.utils.colour.setHsvSaturation(0.20);
	blk.Blockly.utils.colour.setHsvValue(0.95);
	blk.Blockly.Msg['VARIABLES_SET'] = '%1 ≔ %2';
	blk.Blockly.Msg['LISTS_CREATE_WITH_INPUT_WITH'] = '⟦⟧';
	sc.fetch_json_then('json/blksc3.json', blk.Blockly.defineBlocksWithJsonArray);
	sc.fetch_json_then('json/blksc3-std.json', blk.Blockly.defineBlocksWithJsonArray);
	sc.fetch_json_then('json/blksc3-ugen.json', blk.Blockly.defineBlocksWithJsonArray);
	sc.fetch_utf8_then('xml/blksc3.xml', inject_with_xml_toolbox(blk, onCompletion));
}

function load_help_graph(blk, graphPath) {
	xml.fetch_xml(blk, `${graphPath}.xml`, false);
	load_notes_and_then(`${graphPath}.sl`, sc.setter_for_inner_html_of('blkNotes'));
	if(blk.track_history) {
		sc.window_url_set_param('e', graphUrl);
	}
}

// Initialisation function, to be called on document load.
export function init(Blockly, withUiCtl, trackHistory) {
	const blk = {};
	blk.Blockly = Blockly;
	init_codegen(blk);
	init_codegen_ugen(blk);
	blk.track_history = trackHistory;
	pre(blk, (blk) => xml.maybe_load_xml_from_url_param(blk, 'e'));
	sc.connect_button_to_input('xmlInputFileSelect', 'xmlInputFile'); // Initialise .xml file selector
	graph_menu_init('programMenu', 'graph', (path) => load_help_graph(blk, path));
	sc.fetch_json_then('json/program-menu.json', json => sc.select_add_keys_as_options('programMenu', json.programMenu));
	graph_menu_init('helpMenu', 'ugen', (path) => load_help_graph(blk, path));
	sc.fetch_json_then('json/help-menu.json', json => sc.select_add_keys_as_options('helpMenu', json.helpMenu));
	graph_menu_init('guideMenu', 'guide', (path) => load_help_graph(blk, path))
	sc.fetch_json_then('json/guide-menu.json', json => sc.select_add_keys_as_options('guideMenu', json.guideMenu));
	graph_menu_init('smallProgramsMenu', 'graph', (path) => load_help_graph(blk, path));
	sc.fetch_json_then('json/small-programs-menu.json', json => sc.select_add_keys_as_options('smallProgramsMenu', json.smallProgramsMenu));
	sc.userPrograms.storage_key = 'blksc3UserPrograms/xml';
	sc.user_program_menu_init('userMenu', (xmlText) => xml.load_xml(blk, xmlText));
	sc.select_on_change('actionsMenu', function(menuElement, entryName) {
		sc.user_action_do(entryName, 'userMenu', 'userProgramArchiveFile');
		menuElement.selectedIndex = 0;
	});
	layout_menu_init(blk);
	if(withUiCtl) {
		sc.fetch_utf8_then('html/ui-ctl.html', sc.setter_for_inner_html_of('uiCtlContainer'));
	}
	return blk;
}

// Get .xml serialization of workspace.  (The .xml format is no longer being worked on.)
export function workspaceXml(blk) {
	var xml = blk.Blockly.Xml.workspaceToDom(blk.workspace);
	return blk.Blockly.Xml.domToPrettyText(xml);
}
