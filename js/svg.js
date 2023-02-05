// Get .svg format drawing of workspace.
function blk_get_svg(blk) {
	var svg = blk.workspace.getParentSvg(); // getCanvas() getParentSvg()
	return svg.outerHTML;
}
