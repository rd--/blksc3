/* tw 0084 (f0) - http://sccode.org/1-4Qy */
let f = Saw((0 .. 5) * 2 + 5 * 19) * 99 + 199;
let g = Saw((0 .. 6) * 2 + 1 * 29) * 199 + 299;
let w = Saw(
	(0 .. 4) * 2 + 3 * (Saw(3) * 2 + 3)
) * 299 + 399;
Formant(f, g, w).Splay / 3 / 3
