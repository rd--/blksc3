import * as sc from '../lib/jssc3/dist/jssc3.js';

// Set properties given layout configuration name.
export function setLayout(blk, configName) {
	// console.debug(`setLayout: ${configName}`);
	if (configName) {
		const w = document.getElementById('blocklyContainer');
		const c = document.getElementById('blkCtl');
		const n = document.getElementById('blkNotes');
		const o = blk.layouts[configName];
		w.style.height = o.workspaceHeight;
		w.style.width = o.workspaceWidth;
		c.style.left = o.ctlLeft;
		c.style.width = o.ctlWidth;
		n.style['font-size'] = o.notesFontSize;
		n.style.height = o.workspaceHeight;
		Blockly.svgResize(blk.workspace);
	}
}

// Set event listener for layout menu.
export function layoutMenuInit(blk) {
	const select = document.getElementById('blkLayoutMenu');
	select.addEventListener('change', (e) => setLayout(blk, e.target.value));
	sc.fetchJson('json/Layouts.json', { cache: 'no-cache' })
		.then((obj) => blk.layouts = obj);
}

/*
%×% = proportional
1366×768 (x270) =16/9
1440×900 (macbook/3) = 8/5
1680×1050 (macbook/4) = 8/5
1920×1080 (x1) = 16/9
*/
