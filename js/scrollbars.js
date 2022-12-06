// c.f. https://github.com/google/blockly/issues/3921 and https://groups.google.com/g/blockly/c/GC5TsBUVVbE/
export function display_scrollbars(blk, showScrollbars) {
    var displayValue = showScrollbars ? '' : 'none';
    blk.workspace.scrollbar.vScroll.svgHandle.style.display = displayValue;
    blk.workspace.scrollbar.hScroll.svgHandle.style.display = displayValue;
}

function toggle_scrollbars(blk) {
    var currentState = blk.workspace.scrollbar.vScroll.svgGroup_.style.display;
    display_scrollbars(currentState === 'none');
}
