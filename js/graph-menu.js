import * as sc from '../lib/jssc3/dist/jssc3.js';

export function graphMenuInit(menuId, graphDir, loadProc) {
	sc.menuOnChangeWithOptionValue(menuId, function (optionValue) {
		const graphPath = `help/${graphDir}/${optionValue}`;
		// console.debug(graphPath);
		loadProc(graphPath);
	});
}
