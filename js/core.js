import * as sc from '../lib/jssc3/dist/jssc3.js'

import { init_codegen } from './gen.js'
import { init_codegen_ugen } from './gen-ugen.js'
import { graph_menu_init } from './graph.js'
import { layout_menu_init } from './layout.js'
import { load_notes_and_then } from './notes.js'
import { display_scrollbars } from './scrollbars.js'
import * as xml from './xml.js'

export const blk = {
	Blockly: null,
	json: null,
	xml: null,
	workspace: null,
	config: null,
	output_format: null,
	track_history: null, // boolean
	layouts: null
};

// Configure and inject Blockly given Xml format toolbox definition.
function inject_with_xml_toolbox(onCompletion) {
    return function (xml_toolbox) {
        blk.config = {
            media: 'lib/blockly-9.1.0/media/',
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
        // console.log('inject_with_xml_toolbox: injection completed');
        onCompletion();
    };
}

// Get workspace as .js code.
function get_js_code(blk) {
    const text = blk.Blockly.JavaScript.workspaceToCode(blk.workspace);
	console.log('get_js_code', text);
	return text;
}

// Clear workspace, construct URL from arguments, fetch and load graph.
function load_help_graph(graphDir, graphName, fileType) {
    var graphUrl = 'help/' + graphDir + '/' + graphName + fileType;
    var graphStc = 'help/' + graphDir + '/' + graphName + '.stc';
    console.log(graphName);
    xml.fetch_xml(blk, graphUrl, false);
    load_notes_and_then(graphStc, sc.setter_for_inner_html_of('blkNotes'));
    if(blk.track_history) {
        sc.window_url_set_param('e', graphUrl);
    }
}

function pre(onCompletion) {
    blk.Blockly.HSV_SATURATION = 0.20;
    blk.Blockly.HSV_VALUE = 0.95;
    blk.Blockly.Msg['VARIABLES_SET'] = '%1 ≔ %2';
    blk.Blockly.Msg['LISTS_CREATE_WITH_INPUT_WITH'] = '⟦⟧';
    sc.load_json_and_then('json/blksc3.json', blk.Blockly.defineBlocksWithJsonArray);
    sc.load_json_and_then('json/blksc3-std.json', blk.Blockly.defineBlocksWithJsonArray);
    sc.load_json_and_then('json/blksc3-ugen.json', blk.Blockly.defineBlocksWithJsonArray);
    sc.load_utf8_and_then('xml/blksc3.xml', inject_with_xml_toolbox(onCompletion));
}

// Initialisation function, to be called on document load.
export function init(Blockly, outputFormat, withUiCtl, trackHistory) {
	blk.Blockly = Blockly;
	init_codegen(blk);
	init_codegen_ugen(blk);
    blk.output_format = outputFormat;
    blk.track_history = trackHistory;
    pre(() => xml.maybe_load_xml_from_url_param(blk, 'e'));
    sc.connect_button_to_input('xmlInputFileSelect', 'xmlInputFile'); // Initialise .xml file selector
	graph_menu_init('programMenu', 'graph', '.xml', load_help_graph);
	sc.load_json_and_then('json/program-menu.json', json => sc.select_add_keys_as_options('programMenu', json.programMenu));
	graph_menu_init('helpMenu', 'ugen', '.xml', load_help_graph);
	sc.load_json_and_then('json/help-menu.json', json => sc.select_add_keys_as_options('helpMenu', json.helpMenu));
	graph_menu_init('guideMenu', 'guide', '.xml', load_help_graph)
	sc.load_json_and_then('json/guide-menu.json', json => sc.select_add_keys_as_options('guideMenu', json.guideMenu));
	sc.userPrograms.storage_key = 'blksc3UserPrograms/xml';
	sc.user_program_menu_init('userMenu', (xmlText) => xml.load_xml(blk, xmlText));
	sc.select_on_change('actionsMenu', function(menuElement, entryName) {
		sc.user_action_do(entryName, 'userMenu', 'userProgramArchiveFile');
		menuElement.selectedIndex = 0;
	});
	layout_menu_init(blk);
    if(withUiCtl) {
        sc.load_utf8_and_then('html/ui-ctl.html', sc.setter_for_inner_html_of('uiCtlContainer'));
    }
}

export function workspacePrint() {
	sc.prettyPrintSyndefOf(eval(get_js_code(blk)));
}

export function workspaceEval() {
	eval(get_js_code(blk));
}

export function workspacePlay() {
	sc.scsynthEnsure(globalScsynth, () => sc.playUgen(globalScsynth, eval(get_js_code(blk)), 1));
}

// Get .xml serialization of workspace.  (The .xml format is no longer being worked on.)
export function workspaceXml() {
    var xml = blk.Blockly.Xml.workspaceToDom(blk.workspace);
    return blk.Blockly.Xml.domToPrettyText(xml);
}
