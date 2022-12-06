export function graph_menu_init(menuId, graphDir, loadProc) {
	const menu = document.getElementById(menuId);
	if(menu) {
		menu.addEventListener('change', function(anEvent) {
			const target = anEvent.target;
			if(target && target.value) {
				const graphPath = `help/${graphDir}/${target.value}`;
				console.log(graphPath);
				loadProc(graphPath);
			}
		});
	} else {
		console.warn(`graph_menu_init: no element: ${menuId}`);
	}
}
