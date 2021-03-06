'use strict';

var blk_layouts;

// Set properties given layout configuration name.
function blk_set_layout(configName) {
    if(configName) {
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
}

// Set event listener for layout menu.
function blk_layout_menu_init() {
    var select = document.getElementById('blkLayoutMenu');
    select.addEventListener('change', e => blk_set_layout(e.target.value));
    load_json_and_then('json/blksc3-layouts.json', obj => blk_layouts = obj);
}

/*
%×% = proportional
1366×768 (x270) =16/9
1440×900 (macbook/3) = 8/5
1680×1050 (macbook/4) = 8/5
1920×1080 (x1) = 16/9
*/
