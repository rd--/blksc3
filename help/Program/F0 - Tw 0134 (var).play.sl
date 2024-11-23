/* Tw 0134 (F0) */
let n = 50;
let z = { :i |
	let o1 = LfSaw(i + 1 / [3, 4], 0);
	let o2 = LfSaw(i + 1 / 8, 0) + 1;
	let f0 = o1 > o2 * (n / 2) + n;
	let m = LfSaw(i + 1 / n, i / (n / 2));
	let o3 = Blip(f0, i + [2, 3]) * m;
	Ringz(o3, i + 1 * (n * 2 - 1), 0.1)
};
1.to(n).collect(z:/1).mean / 5
