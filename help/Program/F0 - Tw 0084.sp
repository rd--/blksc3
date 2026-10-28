/* tw 0084 (f0) - http://sccode.org/1-4Qy */
let f = saw((0 .. 5) * 2 + 5 * 19) * 99 + 199;
let g = saw((0 .. 6) * 2 + 1 * 29) * 199 + 299;
let w = saw(
	(0 .. 4) * 2 + 3 * (saw(3) * 2 + 3)
) * 299 + 399;
formant(f, g, w).splay / 3 / 3
