/* LfCub.1 */
let x = MouseX([30, 70], 600, 0, 0.2);
let y = MouseY(0.25, [3, 5], 0, 0.2);
SinOsc(
	LfCub(y, 0) * 200 + 400 % x,
	0
) * 0.1
