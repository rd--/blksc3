import * as sc from '../lib/jssc3/dist/jssc3.js';

// Setup workspace on loading a new program.
// Resets to unit scale and centers blocks.
function onLoad(blk) {
	blk.workspace.setScale(1);
	blk.workspace.scrollCenter();
}

// Load program from .json definition.
// Clears any existing blocks.
function loadJson(blk, jsonText) {
	blk.workspace.clear();
	blk.Blockly.serialization.workspaces.load(
		JSON.parse(jsonText),
		blk.workspace,
	);
	onLoad(blk);
}

// Read selected .json file.
export function readInputJson(inputId, blk) {
	const inputFile = sc.getFileInputFile(inputId, 0);
	inputFile.text().then((jsonText) => loadJson(blk, jsonText));
}

// Read and load .json format program from Url.
export function fetchJson(blk, jsonUrl) {
	sc.fetchUtf8(sc.urlAppendTimeStamp(jsonUrl), { cache: 'no-cache' })
		.then((jsonText) => loadJson(blk, jsonText));
}
