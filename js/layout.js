import * as sc from '../lib/jssc3/dist/jssc3.js'

// Set properties given layout configuration name.
export function set_layout(blk, configName) {
	console.log(`set_layout: ${configName}`);
    if(configName) {
        var w = document.getElementById('blocklyContainer');
        var c = document.getElementById('blkCtl');
        var n = document.getElementById('blkNotes');
        var o = blk.layouts[configName];
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
export function layout_menu_init(blk) {
    var select = document.getElementById('blkLayoutMenu');
    select.addEventListener('change', e => set_layout(blk, e.target.value));
    sc.load_json_and_then('json/blksc3-layouts.json', obj => blk.layouts = obj);
}

/*
%×% = proportional
1366×768 (x270) =16/9
1440×900 (macbook/3) = 8/5
1680×1050 (macbook/4) = 8/5
1920×1080 (x1) = 16/9
*/