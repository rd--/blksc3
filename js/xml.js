import * as sc from '../lib/jssc3/dist/jssc3.js'

// Setup workspace on loading a new program.  Reset to unit scale and center blocks.
function on_load(blk) {
	blk.workspace.setScale(1);
	blk.workspace.scrollCenter();
}

// Load program from .xml definition, clears any existing blocks.
function load_xml(blk, xmlText) {
	var xml = blk.Blockly.utils.xml.textToDom(xmlText);
	blk.workspace.clear();
	blk.Blockly.Xml.domToWorkspace(xml, blk.workspace);
	on_load(blk);
}

// Read selected .xml file.
export function read_input_xml(inputId, blk) {
	const inputFile = sc.get_file_input_file(inputId, 0);
	inputFile.text().then(xmlText => load_xml(blk, xmlText));
}

// Read and load .xml format program from URL.
export function fetch_xml(blk, xmlUrl) {
	sc.fetch_utf8(sc.url_append_timestamp(xmlUrl), { cache: 'no-cache' })
		.then(xmlText => load_xml(blk, xmlText));
}

// If the Url has fileParamKey, load the named .xml file.
export function maybe_load_xml_from_url_param(blk, fileParamKey) {
	const fileName = sc.url_get_param(fileParamKey)
	if(fileName) {
		fetch_xml(blk, fileName);
	}
}
