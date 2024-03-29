// c.f. https://github.com/google/blockly/issues/3921 and https://groups.google.com/g/blockly/c/GC5TsBUVVbE/
export function displayScrollbars(blk, showScrollbars) {
	const displayValue = showScrollbars ? '' : 'none';
	blk.workspace.scrollbar.vScroll.svgHandle.style.display = displayValue;
	blk.workspace.scrollbar.hScroll.svgHandle.style.display = displayValue;
}

function toggleScrollbars(blk) {
	const currentState = blk.workspace.scrollbar.vScroll.svgGroup_.style.display;
	displayScrollbars(currentState === 'none');
}
