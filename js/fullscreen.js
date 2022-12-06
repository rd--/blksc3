export function fullscreen() {
	const element = document.documentElement;
	const options = { navigationUI: "hide" };
	if (!document.fullscreenElement) {
		element.requestFullscreen(options);
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		}
	}
}
