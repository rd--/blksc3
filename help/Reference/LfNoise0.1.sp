/* lfNoise0.1 */
{
	let x = mouseX(rand(0.1, 5), rand(3, 20), 0, 0.2);
	let y = mouseY(10, 50, 0, 0.2);
	eqPan2(
		sinOsc(sinOsc(x, 0) * y + rand(200, 5000), 0),
		rand(-1, 1)
	) * lfNoise0(mouseX(rand(1, 6), rand(1, 6), 0, 0.2)).max(0) * 0.05
} !+ 12

# lfNoise0

Pretty, nice, but inessential,
courtesy [Coc](https://github.com/cianoc/supercollider_fragments)
