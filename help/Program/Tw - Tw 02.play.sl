/* Tw 02 (Tw) ; https://swiki.hfbk-hamburg.de/MusicTechnology/899 */
let nd = { :k |
	let x = { :p |
		let f = p.at(1);
		let m = p.at(2);
		let j = p.at(3);
		SinOsc(f + (m * 4 * j), m) * LfNoise1(j + 1 / f * 4) / 2
	};
	let y = x([0.1, 0, 8]);
	let i = 1;
	let u = 9.timesRepeat({
		y := x([i * k * [4, 8], y, i]);
		i := i + 1
	}); /* u = for translator... */
	y
};
(1 .. 8).collect(nd:/1).sum / 4
