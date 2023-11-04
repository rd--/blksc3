// Get .svg format drawing of workspace.
function blkGetSvg(blk) {
	var svg = blk.workspace.getParentSvg(); // getCanvas() getParentSvg()
	return svg.outerHTML;
}
