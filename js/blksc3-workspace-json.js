'use strict';

/*
        <input type="file" id="jsonInputFile" accept=".json" onchange="blk_read_input_json()" style="display:none">
        <button id="jsonInputFileSelect" title="Select local .json file and load into workspace">Load Json</button>
        <button title="Copy workspace Json to clipboard" onclick="navigator.clipboard.writeText(blk_get_json())">Copy Json</button>
*/

// Get .json serialization of workspace.
function blk_get_json() {
    var obj = Blockly.serialization.workspaces.save(blk_workspace);
    return JSON.stringify(obj, null, '  ');
}

// Load program from .json definition.
function blk_load_json(json_text) {
    var obj = JSON.parse(json_text);
    Blockly.serialization.workspaces.load(obj, blk_workspace);
    blk_on_load();
}

// Initialise .json file selector.
function blk_json_input_init () {
    connect_button_to_input('jsonInputFileSelect', 'jsonInputFile');
}

// Read and load named .json file.
function blk_read_json(jsonFile) {
    read_text_file_and_then(jsonFile, text => blk_load_json(text));
}

// Read selected .json file.
function blk_read_input_json() {
    var file = document.getElementById('jsonInputFile').files[0];
    if (file) {
        blk_read_json(file);
    }
}

// Read and load .json format program from URL.
function blk_fetch_json(jsonUrl) {
    fetch_url_and_then(url_append_timestamp(xmlUrl), 'json', jsonData => blk_load_json(jsonData));
}
