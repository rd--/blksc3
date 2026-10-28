/* lfCub.1 */
let x = mouseX([30, 70], 600, 0, 0.2);
let y = mouseY(0.25, [3, 5], 0, 0.2);
sinOsc(
	lfCub(y, 0) * 200 + 400 % x,
	0
) * 0.1
