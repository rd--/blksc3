var blk_json;
var blk_xml;
var blk_workspace;
var blk_websocket;
var blk_config;

// Configure and inject Blockly given XML format toolbox definition.
function blk_inject_with_xml_toolbox(xml_toolbox) {
    blk_config = {
        toolbox: xml_toolbox,
        rtl: false,
        move: {scrollbars: {horizontal: false, vertical: false},
               drag: true,
               wheel: false},
        zoom: {controls: true,
               wheel: true,
               startScale: 1.0,
               maxScale: 3,
               minScale: 0.3,
               scaleSpeed: 1.2,
               pinch: true},
        trashcan: false}
    blk_workspace = Blockly.inject('blocklyContainer', blk_config);
};

// Initialise WebSocket.  To send .stc to sclang as /eval message run 'blksc3 stc-to-osc'
function blk_websocket_init(host, port) {
    if(blk_websocket) {
        blk_websocket.close();
    }
    try {
        blk_websocket = new WebSocket('ws://' + host + ':' + Number(port).toString());
    } catch(err) {
        console.error('blk_websocket_init: ' + err);
    }
}

// Prompt for WebSocket address (host and port) and initialise WebSocket.
function blk_websocket_dialog() {
    var reply = window.prompt('Set WebSocket address as Host:Port', 'localhost:9160');
    if(reply) {
        var [host, port] = reply.split(':');
        blk_websocket_init(host, Number(port));
    }
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

// Get .json serialization of workspace.
function blk_get_json() {
    var obj = Blockly.serialization.workspaces.save(blk_workspace);
    return JSON.stringify(obj, null, '  ');
}

// Get .svg format drawing of workspace.
function blk_get_svg() {
    var svg = blk_workspace.getParentSvg(); // getCanvas() getParentSvg()
    return svg.outerHTML;
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

// Load program from .json definition.
function blk_load_json(json_text, autoPlay) {
    var obj = JSON.parse(json_text);
    Blockly.serialization.workspaces.load(obj, blk_workspace);
    blk_on_load(autoPlay);
}

// If websocket is connected, send text.
function blk_websocket_send(string) {
    if(blk_websocket && blk_websocket.readyState == 1) {
        blk_websocket.send(string);
    } else {
        console.log('blk_websocket_send: websocket nil or not ready?');
    }
}

// Send .stc code of workspace to websocket.
function blk_send_stc(cmd) {
    blk_websocket_send('{ ' + blk_get_stc_code() + ' }.' + cmd + ';\n');
}

// Initialise .xml file selector.
function blk_xml_input_init () {
    var xmlInput = document.getElementById('xmlInputFile');
    var xmlSelect = document.getElementById('xmlInputFileSelect');
    xmlSelect.addEventListener('click', e => xmlInput.click(), false);
}

// Initialise .json file selector.
function blk_json_input_init () {
    var jsonInput = document.getElementById('jsonInputFile');
    var jsonSelect = document.getElementById('jsonInputFileSelect');
    jsonSelect.addEventListener('click', e => jsonInput.click(), false);
}

// Read and load named .xml file.
function blk_read_xml(xmlFile) {
    var reader = new FileReader();
    reader.addEventListener('load', () => blk_load_xml(reader.result), false);
    reader.readAsText(xmlFile);
}

// Read and load named .json file.
function blk_read_json(jsonFile) {
    var reader = new FileReader();
    reader.addEventListener('load', () => blk_load_json(reader.result), false);
    reader.readAsText(jsonFile);
}

// Read selected .xml file.
function blk_read_input_xml() {
    var file = document.getElementById('xmlInputFile').files[0];
    if (file) {
        blk_read_xml(file);
    }
}

// Read selected .json file.
function blk_read_input_json() {
    var file = document.getElementById('jsonInputFile').files[0];
    if (file) {
        blk_read_json(file);
    }
}

// Write selected .xml file.
function blk_write_output_xml() {
}

// Append timestamp to URL to defeat cache
function blk_append_timestamp(url) {
    var ext = ((/\?/).test(url) ? '&' : '?') + (new Date()).getTime();
    return url + ext;
}

// Read and load .xml format program from URL.
function blk_fetch_xml(xmlUrl, autoPlay) {
    var request = new XMLHttpRequest();
    request.addEventListener('load', () => blk_load_xml(request.response, autoPlay));
    request.open('GET', blk_append_timestamp(xmlUrl))
    request.send();
}

// Read and load .json format program from URL.
function blk_fetch_json(jsonUrl, autoPlay) {
    var request = new JSONHttpRequest();
    request.addEventListener('load', () => blk_load_json(request.response, autoPlay));
    request.open('GET', blk_append_timestamp(jsonUrl))
    request.send();
}

// Send SC3.reset to websocket.
function blk_sc3_reset() {
    blk_websocket_send('SC3.reset');
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
    blk_load_and_process_notes(graphStc, blk_set_inner_html_of('blkNotes'));
}

// Intialise menuId to run blk_load_help_graph.
function blk_menu_init(menuId, graphDir, fileType) {
    var blk_graph = document.getElementById(menuId);
    blk_graph.addEventListener('change', (e) => blk_load_help_graph(graphDir, e.target.value, fileType));
}

// Initialisation function, to be called on document load.
function blk_init() {
    blk_menu_init('blkGraphMenu', 'graph', '.xml');
    blk_menu_init('blkHelpMenu', 'block', '.xml');
    blk_menu_init('blkGuideMenu', 'guide', '.xml');
    blk_xml_input_init();
    blk_load_and_process_utf8('html/graph-menu.html', blk_set_inner_html_of('blkGraphMenu'));
    blk_load_and_process_utf8('html/help-menu.html', blk_set_inner_html_of('blkHelpMenu'));
    blk_load_and_process_utf8('html/guide-menu.html', blk_set_inner_html_of('blkGuideMenu'));
    blk_layout_menu_init();
    blk_websocket_init('localhost', 9160);
}

// Fetch fileName and apply processFunc to the object read (stored as JSON).
function blk_load_and_process_json(fileName, processFunc) {
    fetch(fileName, { cache: 'no-cache' })
        .then(response => response.json())
        .then(obj => processFunc(obj));
}

// Throw error if response status is not .ok
function blk_handle_fetch_error(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

// Log error and return default value
function blk_log_error_and_return(from, reason, defaultValue) {
    console.debug(from, ': ', reason);
    return defaultValue;
}

// Fetch fileName and apply processFunc to the text read (stored as UTF-8).
function blk_load_and_process_utf8(fileName, processFunc) {
    fetch(fileName, { cache: 'no-cache' })
        .then(response => blk_handle_fetch_error(response))
        .then(response => response.text())
        .then(text => processFunc(text))
        .catch(reason => processFunc(blk_log_error_and_return('utf8', reason, '')));
}

// Convert .md text to .html
function blk_markdown_to_html(mdText) {
    var mdReader = new commonmark.Parser();
    var htmlWriter = new commonmark.HtmlRenderer();
    console.debug('blk_markdown_to_html', mdText);
    return htmlWriter.render(mdReader.parse(mdText));
}

// Load .md from fileName, convert to .html and pass to processFunc.
function blk_load_and_process_md(fileName, processFunc) {
    blk_load_and_process_utf8(fileName, mdText => processFunc(blk_markdown_to_html(mdText)));
}

// .stc files can have a .md notes segment.
function blk_md_notes_from_stc(stcText) {
    var lines = string_lines(stcText);
    var from_marker = array_drop_while(lines, str => !string_is_prefix_of('//---- notes.md', str));
    return array_unlines(array_tail(from_marker));
}

// Load .stc from fileName, extract .md notes, convert to .html and pass to processFunc.
function blk_load_and_process_notes(fileName, processFunc) {
    blk_load_and_process_utf8(fileName, stcText => processFunc(blk_markdown_to_html(blk_md_notes_from_stc(stcText))));
}

// Send SC3.ccSet to websocket.
function blk_cc_send(ccIndex) {
    var ccElem = document.getElementById('cc' + ccIndex);
    console.debug('cc: ', ccIndex, ccElem.value);
    blk_websocket_send('SC3.ccSet(' + ccIndex + ', ' + ccElem.value + ');\n');
}

// Send SC3.swSet to websocket.
function blk_sw_maintained_send(swIndex) {
    var swElem = document.getElementById('swC' + swIndex);
    var swValue = swElem.checked ? 1 : 0;
    console.log('sw/checkbox: ', swIndex, swValue);
    blk_websocket_send('SC3.swSet(' + swIndex + ', ' + swValue + ');\n');
}

// Send SC3.swSet to websocket.
function blk_sw_momentary_send(swIndex, swValue) {
    var swElem = document.getElementById('swB' + swIndex);
    console.log('sw/button: ', swIndex, swValue);
    blk_websocket_send('SC3.swSet(' + swIndex + ', ' + swValue + ');\n');
}

// Function to return a function to set the innerHTML of elemId
function blk_set_inner_html_of(elemId) {
    var selectElem = document.getElementById(elemId);
    return function(innerHtml) {
        selectElem.innerHTML = innerHtml;
    }
}

// Dictionary of layouts configurations indexed by display dimensions.
// 1366x768 (x270) =16/9 ; 1440x900 (macbook/3) = 8/5 ; 1680x1050 (macbook/4) = 8/5 ; 1920x1080 (x1) = 16/9
var blk_layouts = JSON.parse(`
 {
 "1366×768":{"workspaceHeight": "585px", "workspaceWidth":"975px", "ctlLeft":"1000px", "ctlWidth":"350px", "notesFontSize":"11pt"},
 "1440×900":{"workspaceHeight": "720px", "workspaceWidth":"1080px", "ctlLeft":"1100px", "ctlWidth":"325px", "notesFontSize":"12pt"},
 "1680×1050":{"workspaceHeight": "850px", "workspaceWidth":"1275px", "ctlLeft":"1300px", "ctlWidth":"375px", "notesFontSize":"12pt"},
 "1920×1080":{"workspaceHeight": "900px", "workspaceWidth":"1500px", "ctlLeft":"1525px", "ctlWidth":"375px", "notesFontSize":"12pt"}
 }
`);

// Set properties given layout configuration name.
function blk_set_layout(configName) {
    var w = document.getElementById('blocklyContainer');
    var c = document.getElementById('blkCtl');
    var n = document.getElementById('blkNotes');
    var o = blk_layouts[configName];
    w.style.height = o.workspaceHeight;
    w.style.width = o.workspaceWidth;
    c.style.left = o.ctlLeft;
    c.style.width = o.ctlWidth;
    n.style['font-size'] = o.notesFontSize;
    n.style.height = o.workspaceHeight;
    Blockly.svgResize(blk_workspace);
}

// Set event listener for layout menu.
function blk_layout_menu_init() {
    var select = document.getElementById('blkLayoutMenu');
    select.addEventListener('change', (e) => blk_set_layout(e.target.value));
}
