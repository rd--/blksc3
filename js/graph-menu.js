import * as sc from '../lib/jssc3/dist/jssc3.js'

export function graph_menu_init(menuId, graphDir, loadProc) {
	sc.menu_on_change_with_option_value(menuId, function(optionValue) {
		const graphPath = `help/${graphDir}/${optionValue}`;
		console.log(graphPath);
		loadProc(graphPath);
	});
}
