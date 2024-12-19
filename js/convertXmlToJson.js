/*

Script to convert workspace files from Xml to Json

deno run --allow-read --allow-write --allow-env convertXmlToJson.js

*/

import * as Blockly from 'npm:blockly@11.2.0';

async function readJson(fileName) {
	const text = await Deno.readTextFile(fileName);
	return JSON.parse(text);
}

async function defineBlocks(fileName) {
	const json = await readJson(fileName);
	Blockly.defineBlocksWithJsonArray(json);
}

async function loadXml(workspace, fileName) {
	const xmlText = await Deno.readTextFile(fileName);
	const xmlDom = Blockly.utils.xml.textToDom(xmlText);
	Blockly.Xml.domToWorkspace(xmlDom, workspace);
}

async function loadBlockMessages(fileName) {
	const messages = await readJson(fileName);
	for (const key in messages) {
		const value = messages[key];
		Blockly.Msg[key] = value;
	}
}

const dir = '/home/rohan/sw/blksc3/';
const workspace = new Blockly.Workspace();
await defineBlocks(dir + 'json/BlockDefinitions.json');
await defineBlocks(dir + 'json/UgenBlockDefinitions.json');
await loadBlockMessages(dir + 'json/SymbolicMessages.json');
await loadBlockMessages(dir + 'json/ColourScheme.json');

const subdir = dir + 'help/tmp/';

for await (const entry of Deno.readDir(subdir)) {
	const fileName = entry.name;
	if (fileName.endsWith('.xml')) {
		const xmlPath = subdir + fileName;
		const jsonPath = xmlPath + '.json';
		console.log('Processing: ', fileName);
		workspace.clear();
		await loadXml(workspace, xmlPath);
		const json = Blockly.serialization.workspaces.save(workspace);
		await Deno.writeTextFile(jsonPath, JSON.stringify(json, null, ' '));
	}
}
