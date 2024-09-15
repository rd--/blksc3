import * as sc from '../lib/jssc3/dist/jssc3.js';

// Setup workspace on loading a new program.  Reset to unit scale and center blocks.
function onLoad(blk) {
	blk.workspace.setScale(1);
	blk.workspace.scrollCenter();
}

// Load program from .xml definition, clears any existing blocks.
function loadXml(blk, xmlText) {
	const xml = blk.Blockly.utils.xml.textToDom(xmlText);
	blk.workspace.clear();
	blk.Blockly.Xml.domToWorkspace(xml, blk.workspace);
	onLoad(blk);
}

// Read selected .xml file.
export function readInputXml(inputId, blk) {
	const inputFile = sc.getFileInputFile(inputId, 0);
	inputFile.text().then((xmlText) => loadXml(blk, xmlText));
}

// Read and load .xml format program from URL.
export function fetchXml(blk, xmlUrl) {
	sc.fetchUtf8(sc.urlAppendTimeStamp(xmlUrl), { cache: 'no-cache' })
		.then((xmlText) => loadXml(blk, xmlText));
}

// If the Url has fileParamKey, load the named .xml file.
export function maybeLoadXmlFromUrlParam(blk, fileParamKey) {
	const fileName = sc.urlGetParam(fileParamKey);
	if (fileName) {
		fetchXml(blk, fileName);
	}
}
