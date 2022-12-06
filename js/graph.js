import * as sc from '../lib/jssc3/dist/jssc3.js'

// The fileType argument exists because the .xml code is frozen and at some point this will likely need to allow .json
export function graph_load_and_then(graphDir, graphName, fileType, recvProc) {
	const graphFileName = `help/${graphDir}/${graphName}${resolve_file_type(fileType)}`;
	const graphUrl = sc.url_append_timestamp(graphFileName);
	sc.consoleLogMessageFrom('load_graph', graphName);
	sc.fetch_url_and_then(graphUrl, 'text', recvProc);
}

export function graph_menu_init(menuId, graphDir, fileType, loadProc) {
	const menu = document.getElementById(menuId);
	if(menu) {
		menu.addEventListener('change', function(anEvent) {
			const target = anEvent.target;
			if(target && target.value) {
				loadProc(graphDir, target.value, fileType);
			}
		});
	} else {
		sc.consoleWarn(`graph_menu_init: no element: ${menuId}`);
	}
}
