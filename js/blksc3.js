'use strict';

var blk_json;
var blk_xml;
var blk_workspace;
var blk_config;
var blk_output_format;
var blk_track_history;

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
function blk_inject_with_xml_toolbox(onCompletion) {
    return function (xml_toolbox) {
        blk_config = {
            media: 'lib/blockly/media/',
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
        // console.log('blk_inject_with_xml_toolbox: injection completed');
        onCompletion();
    };
}

// Get workspace as .stc code.
function blk_get_stc_code() {
    return Blockly.JavaScript.workspaceToCode(blk_workspace);
}

// Get .xml serialization of workspace.  (The .xml format is no longer being worked on.)
function blk_get_xml() {
    var xml = Blockly.Xml.workspaceToDom(blk_workspace);
    return Blockly.Xml.domToPrettyText(xml);
}

// Setup workspace on loading a new program.  Reset to unit scale and center blocks.
function blk_on_load() {
    blk_workspace.setScale(1);
    blk_workspace.scrollCenter();
}

// Load program from .xml definition, clears any existing blocks.
function blk_load_xml(xmlText) {
    var xml = Blockly.Xml.textToDom(xmlText);
    blk_workspace.clear();
    Blockly.Xml.domToWorkspace(xml, blk_workspace);
    blk_on_load();
}

// Initialise .xml file selector.
function blk_xml_input_init () {
    connect_button_to_input('xmlInputFileSelect', 'xmlInputFile');
}

// Read selected .xml file.
function blk_read_input_xml() {
    read_text_file_from_file_input_and_then('xmlInputFile', 0, blk_load_xml);
}

// Write selected .xml file.
function blk_write_output_xml() {
    console.error('blk_write_output_xml: not implemented');
}

// Read and load .xml format program from URL.
function blk_fetch_xml(xmlUrl) {
    fetch_url_and_then(url_append_timestamp(xmlUrl), 'text', xmlText => blk_load_xml(xmlText));
}

// Clear workspace, construct URL from arguments, fetch and load graph.
function blk_load_help_graph(graphDir, graphName, fileType) {
    var graphUrl = 'help/' + graphDir + '/' + graphName + fileType;
    var graphStc = 'help/' + graphDir + '/' + graphName + '.stc';
    console.log(graphName);
    blk_fetch_xml(graphUrl, false);
    blk_load_notes_and_then(graphStc, setter_for_inner_html_of('blkNotes'));
    if(blk_track_history) {
        window_url_set_param('e', graphUrl);
    }
}

function blk_pre(onCompletion) {
    Blockly.HSV_SATURATION = 0.20;
    Blockly.HSV_VALUE = 0.95;
    Blockly.Msg['VARIABLES_SET'] = '%1 ≔ %2';
    Blockly.Msg['LISTS_CREATE_WITH_INPUT_WITH'] = '⟦⟧';
    load_json_and_then('json/blksc3.json', Blockly.defineBlocksWithJsonArray);
    load_json_and_then('json/blksc3-std.json', Blockly.defineBlocksWithJsonArray);
    load_json_and_then('json/blksc3-ugen.json', Blockly.defineBlocksWithJsonArray);
    load_utf8_and_then('xml/blksc3.xml', blk_inject_with_xml_toolbox(onCompletion));
}

// Initialisation function, to be called on document load.
function blk_init(outputFormat, initMouse, blockSize, withUiCtl, fileParamKey, defaultFileName, trackHistory) {
    var fileName = url_get_param(fileParamKey) || defaultFileName;
    blk_output_format = outputFormat;
    blk_track_history = trackHistory;
    blk_pre(function () {
        if(fileName) {
            blk_fetch_xml(fileName);
        }
    });
    blk_xml_input_init();
    blk_layout_menu_init();
    sc3_ui_init(true, true, true, false, '.xml', 'blksc3UserPrograms/xml', blk_load_help_graph, initMouse, blockSize);
    if(withUiCtl) {
        load_utf8_and_then('html/ui-ctl.html', setter_for_inner_html_of('uiCtlContainer'));
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

var editor_set_data = blk_load_xml;

function editor_get_js_notation_and_then(proc) {
    return proc(blk_get_stc_code());
}
