var blk_json;
var blk_xml;
var blk_workspace;
var blk_ws;
var blk_config;

function blk_json_init(json_data) {
    console.log("blk_json_init");
    blk_json = json_data;
    Blockly.defineBlocksWithJsonArray(blk_json);
};

function blk_xml_init(xml_data) {
    console.log("blk_xml_init");
    blk_xml = xml_data;
    blk_config = {
        toolbox: blk_xml,
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
    blk_workspace = Blockly.inject('blocklyDiv', blk_config);
};

function blk_ws_init() {
    // hosc-json ws print --host=192.168.1.104
    blk_ws = new WebSocket("ws://192.168.1.104:9160"); // 100 - 104
}

function blk_get_js() {
    return Blockly.JavaScript.workspaceToCode(blk_workspace);
}

function blk_get_xml() {
    var xml = Blockly.Xml.workspaceToDom(blk_workspace);
    return Blockly.Xml.domToPrettyText(xml);
}

function blk_get_svg() {
    var svg = blk_workspace.getParentSvg(); // getCanvas() getParentSvg()
    return svg.outerHTML;
}

function blk_load_xml(xml_text, autoPlay) {
    var xml = Blockly.Xml.textToDom(xml_text);
    Blockly.Xml.domToWorkspace(xml, blk_workspace);
    blk_workspace.setScale(1);
    blk_workspace.scrollCenter();
    if(autoPlay) {
        blk_send_stc('play');
    }
}

function blk_send_stc(cmd) {
    if(blk_ws) {
        blk_ws.send('{ ' + blk_get_js() + ' }.' + cmd + ';\n');
    }
}

function blk_xml_input_init () {
    var xmlInput = document.getElementById("xmlInputFile");
    var xmlSelect = document.getElementById("xmlInputFileSelect");
    xmlSelect.addEventListener("click", e => xmlInput.click(), false);
}

function blk_read_xml(xmlFile) {
    var reader = new FileReader();
    reader.addEventListener("load", () => blk_load_xml(reader.result), false);
    reader.readAsText(xmlFile);
}

function blk_read_input_xml() {
    var file = document.getElementById("xmlInputFile").files[0];
    if (file) {
        blk_read_xml(file);
    }
}

function blk_fetch_xml(xmlUrl, autoPlay) {
    var request = new XMLHttpRequest();
    request.addEventListener("load", () => blk_load_xml(request.response, autoPlay));
    request.open("GET", xmlUrl)
    request.send();
}

function blk_sc3_reset() {
    if(blk_ws) {
        blk_ws.send('SC3.reset');
    }
}

function blk_graph_menu_select(graphDir, graphName) {
    var auto_play = false;
    console.log(graphName);
    blk_workspace.clear();
    if(auto_play) {
        blk_sc3_reset();
    }
    blk_fetch_xml('?t=blksc3&e=help/' + graphDir + '/' + graphName + '.xml', auto_play);
}

function blk_menu_init(graphDir, menuId) {
    var blk_graph = document.getElementById(menuId);
    blk_graph.addEventListener('change', (e) => blk_graph_menu_select(graphDir, e.target.value));
}

function blk_init() {
    blk_menu_init('graph', 'blkGraphMenu');
    blk_menu_init('block', 'blkHelpMenu');
    blk_xml_input_init();
    blk_ws_init();
}

function blk_load_and_process_json(fileName, processFunc) {
    fetch(fileName)
        .then(response => response.json())
        .then(data => processFunc(data));
}
