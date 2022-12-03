import * as sc from '../lib/jssc3/dist/jssc3.js'

import { blksc3_init_codegen } from './blksc3-gen.js'
import { blksc3_init_codegen_ugen } from './blksc3-gen-ugen.js'
import { blk_layout_menu_init } from './blksc3-layout.js'

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

// c.f. https://github.com/google/blockly/issues/3921 and https://groups.google.com/g/blockly/c/GC5TsBUVVbE/
function blk_display_scrollbars(showScrollbars) {
    var displayValue = showScrollbars ? '' : 'none';
    blk.workspace.scrollbar.vScroll.svgHandle.style.display = displayValue;
    blk.workspace.scrollbar.hScroll.svgHandle.style.display = displayValue;
}

function blk_toggle_scrollbars() {
    var currentState = blk.workspace.scrollbar.vScroll.svgGroup_.style.display;
    blk_display_scrollbars(currentState === 'none');
}

// Configure and inject Blockly given XML format toolbox definition.
function blk_inject_with_xml_toolbox(onCompletion) {
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
        blk_display_scrollbars(false);
        // console.log('blk_inject_with_xml_toolbox: injection completed');
        onCompletion();
    };
}

// Get workspace as .stc code.
export function blk_get_stc_code() {
    const text = blk.Blockly.JavaScript.workspaceToCode(blk.workspace);
	console.log('blk_get_stc_code', text);
	return text;
}

// Get .xml serialization of workspace.  (The .xml format is no longer being worked on.)
export function blk_get_xml() {
    var xml = blk.Blockly.Xml.workspaceToDom(blk.workspace);
    return blk.Blockly.Xml.domToPrettyText(xml);
}

// Setup workspace on loading a new program.  Reset to unit scale and center blocks.
function blk_on_load() {
    blk.workspace.setScale(1);
    blk.workspace.scrollCenter();
}

// Load program from .xml definition, clears any existing blocks.
function blk_load_xml(xmlText) {
    var xml = blk.Blockly.Xml.textToDom(xmlText);
    blk.workspace.clear();
    blk.Blockly.Xml.domToWorkspace(xml, blk.workspace);
    blk_on_load();
}

// Initialise .xml file selector.
function blk_xml_input_init () {
    sc.connect_button_to_input('xmlInputFileSelect', 'xmlInputFile');
}

// Read selected .xml file.
export function blk_read_input_xml() {
    sc.read_text_file_from_file_input_and_then('xmlInputFile', 0, blk_load_xml);
}

// Write selected .xml file.
function blk_write_output_xml() {
    console.error('blk_write_output_xml: not implemented');
}

// Read and load .xml format program from URL.
function blk_fetch_xml(xmlUrl) {
    sc.fetch_url_and_then(sc.url_append_timestamp(xmlUrl), 'text', xmlText => blk_load_xml(xmlText));
}

// Clear workspace, construct URL from arguments, fetch and load graph.
function blk_load_help_graph(graphDir, graphName, fileType) {
    var graphUrl = 'help/' + graphDir + '/' + graphName + fileType;
    var graphStc = 'help/' + graphDir + '/' + graphName + '.stc';
    console.log(graphName);
    blk_fetch_xml(graphUrl, false);
    blk_load_notes_and_then(graphStc, sc.setter_for_inner_html_of('blkNotes'));
    if(blk.track_history) {
        sc.window_url_set_param('e', graphUrl);
    }
}

function blk_pre(onCompletion) {
    blk.Blockly.HSV_SATURATION = 0.20;
    blk.Blockly.HSV_VALUE = 0.95;
    blk.Blockly.Msg['VARIABLES_SET'] = '%1 ≔ %2';
    blk.Blockly.Msg['LISTS_CREATE_WITH_INPUT_WITH'] = '⟦⟧';
    sc.load_json_and_then('json/blksc3.json', blk.Blockly.defineBlocksWithJsonArray);
    sc.load_json_and_then('json/blksc3-std.json', blk.Blockly.defineBlocksWithJsonArray);
    sc.load_json_and_then('json/blksc3-ugen.json', blk.Blockly.defineBlocksWithJsonArray);
    sc.load_utf8_and_then('xml/blksc3.xml', blk_inject_with_xml_toolbox(onCompletion));
}

// Initialisation function, to be called on document load.
export function blk_init(Blockly, outputFormat, initWasm, hardwareBufferSize, blockSize, withUiCtl, fileParamKey, defaultFileName, trackHistory) {
    var fileName = sc.url_get_param(fileParamKey) || defaultFileName;
	blk.Blockly = Blockly;
	blksc3_init_codegen(blk);
	blksc3_init_codegen_ugen(blk);
    blk.output_format = outputFormat;
    blk.track_history = trackHistory;
    blk_pre(function () {
        if(fileName) {
            blk_fetch_xml(fileName);
        }
    });
    blk_xml_input_init();
/*
    blk_layout_menu_init(blk);
    ui_init(globalScsynth, {
		subDir: '',
		hasProgramMenu: true,
		hasHelpMenu: true,
		hasGuideMenu: true,
		hasEssayMenu: false,
		fileExt: '.xml',
		storageKey: 'blksc3UserPrograms/xml',
		loadProc: blk_load_help_graph,
		initWasm: initWasm,
		hardwareBufferSize: hardwareBufferSize,
		blockSize: blockSize
	});
*/
    if(withUiCtl) {
        sc.load_utf8_and_then('html/ui-ctl.html', sc.setter_for_inner_html_of('uiCtlContainer'));
    }
}

// Convert .md text to .html
function blk_markdown_to_html(mdText) {
    var mdReader = new commonmark.Parser();
    var htmlWriter = new commonmark.HtmlRenderer();
    console.debug('blk_markdown_to_html', mdText);
    return htmlWriter.render(mdReader.parse(mdText));
}

// Load .md from fileName, convert to .html and pass to processFunc.
function blk_load_md_and_then(fileName, processFunc) {
    sc.load_utf8_and_then(fileName, mdText => processFunc(blk_markdown_to_html(mdText)));
}

// .stc files can have a .md notes segment.
function blk_md_notes_from_stc(stcText) {
    var lines = stcText.split('\n');
    var from_marker = sc.arrayDropWhile(lines, str => !sc.stringIsPrefixOf('//---- notes.md', str));
    return sc.arrayUnlines(sc.arrayTail(from_marker));
}

// Load .stc from fileName, extract .md notes, convert to .html and pass to processFunc.
function blk_load_notes_and_then(fileName, processFunc) {
    sc.load_utf8_and_then(fileName, stcText => processFunc(blk_markdown_to_html(blk_md_notes_from_stc(stcText))));
}

function blk_fullscreen() {
	const element = document.documentElement;
	const options = { navigationUI: "hide" };
	if (!document.fullscreenElement) {
		element.requestFullscreen(options);
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		}
	}
}
