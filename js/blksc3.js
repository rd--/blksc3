'use strict';

var blk_json;
var blk_xml;
var blk_workspace;
var blk_config;
var blk_output_format;
var blk_layouts;

// c.f. https://github.com/google/blockly/issues/3921 and https://groups.google.com/g/blockly/c/GC5TsBUVVbE/
function blk_display_scrollbars(showScrollbars) {
    var displayValue = showScrollbars ? '' : 'none';
    blk_workspace.scrollbar.vScroll.svgGroup_.style.display = displayValue;
    blk_workspace.scrollbar.hScroll.svgGroup_.style.display = displayValue;
}

function blk_toggle_scrollbars() {
    var currentState = blk_workspace.scrollbar.vScroll.svgGroup_.style.display;
    blk_display_scrollbars(currentState === 'none');
}

// Configure and inject Blockly given XML format toolbox definition.
function blk_inject_with_xml_toolbox(xml_toolbox) {
    blk_config = {
        media: 'media/blockly/',
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
    blk_workspace = Blockly.inject('blocklyContainer', blk_config);
    blk_display_scrollbars(false);
};

// Get workspace as .stc code.
function blk_get_stc_code() {
    return Blockly.JavaScript.workspaceToCode(blk_workspace);
}

// Get .xml serialization of workspace.  (The .xml format is no longer being worked on.)
function blk_get_xml() {
    var xml = Blockly.Xml.workspaceToDom(blk_workspace);
    return Blockly.Xml.domToPrettyText(xml);
}

// Setup workspace on loading a new program.  Reset to unit scale, center blocks and optionally play graph.
function blk_on_load(autoPlay) {
    blk_workspace.setScale(1);
    blk_workspace.scrollCenter();
    if(autoPlay) {
        blk_send_stc('play');
    }
}

// Load program from .xml definition.
function blk_load_xml(xml_text, autoPlay) {
    var xml = Blockly.Xml.textToDom(xml_text);
    Blockly.Xml.domToWorkspace(xml, blk_workspace);
    blk_on_load(autoPlay);
}

// Initialise .xml file selector.
function blk_xml_input_init () {
    connect_button_to_input('xmlInputFileSelect', 'xmlInputFile');
}

// Read selected .xml file.
function blk_read_input_xml() {
    var xmlFile = document.getElementById('xmlInputFile').files[0];
    if (xmlFile) {
        read_text_file_and_then(xmlFile, text => blk_load_xml(text));
    }
}

// Write selected .xml file.
function blk_write_output_xml() {
    console.error('blk_write_output_xml: not implemented');
}

// Read and load .xml format program from URL.
function blk_fetch_xml(xmlUrl, autoPlay) {
    fetch_url_and_then(url_append_timestamp(xmlUrl), 'text', xmlText => blk_load_xml(xmlText, autoPlay));
}

// Clear workspace, construct URL from arguments, fetch and load graph.
function blk_load_help_graph(graphDir, graphName, fileType) {
    var auto_play = false;
    var graphUrl = 'help/' + graphDir + '/' + graphName + fileType;
    var graphStc = 'help/' + graphDir + '/' + graphName + '.stc';
    console.log(graphName);
    blk_workspace.clear();
    if(auto_play) {
        blk_sc3_reset();
    }
    blk_fetch_xml(graphUrl, auto_play);
    blk_load_notes_and_then(graphStc, set_inner_html_of('blkNotes'));
}

function blk_pre() {
    Blockly.HSV_SATURATION = 0.20;
    Blockly.HSV_VALUE = 0.95;
    Blockly.Msg['VARIABLES_SET'] = '%1 ≔ %2';
    Blockly.Msg['LISTS_CREATE_WITH_INPUT_WITH'] = '⟦⟧';
    load_json_and_then('json/blksc3.json', Blockly.defineBlocksWithJsonArray);
    load_json_and_then('json/blksc3-std.json', Blockly.defineBlocksWithJsonArray);
    load_json_and_then('json/blksc3-ugen.json', Blockly.defineBlocksWithJsonArray);
    load_utf8_and_then('xml/blksc3.xml', blk_inject_with_xml_toolbox);
}

// Initialisation function, to be called on document load.
function blk_init(outputFormat, initMouse) {
    blk_output_format = outputFormat;
    blk_xml_input_init();
    blk_layout_menu_init();
    sc3_ui_init(true, true, true, '.xml', 'blksc3UserPrograms/xml', blk_load_help_graph, initMouse);
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
    load_utf8_and_then(fileName, mdText => processFunc(blk_markdown_to_html(mdText)));
}

// .stc files can have a .md notes segment.
function blk_md_notes_from_stc(stcText) {
    var lines = stcText.split('\n');
    var from_marker = arrayDropWhile(lines, str => !stringIsPrefixOf('//---- notes.md', str));
    return arrayUnlines(arrayTail(from_marker));
}

// Load .stc from fileName, extract .md notes, convert to .html and pass to processFunc.
function blk_load_notes_and_then(fileName, processFunc) {
    load_utf8_and_then(fileName, stcText => processFunc(blk_markdown_to_html(blk_md_notes_from_stc(stcText))));
}

var editor_get_data = blk_get_xml;

var editor_get_js_notation = blk_get_stc_code;

function editor_set_data(programData) {
    var xml = Blockly.Xml.textToDom(programData);
    var autoPlay = false;
    blk_workspace.clear();
    Blockly.Xml.domToWorkspace(xml, blk_workspace);
    blk_on_load(autoPlay);
}
