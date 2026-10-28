/* F0 - Pkt 28 ; http://www.fredrikolofsson.com/f0blog/?q=node/490; */
let n = 28;
let x = { :i |
	let a = lfSaw(i + 1 * 5, 0) * 0.5.pi;
	let b = sinOsc(i + 1 * 0.001, 0) * 0.5;
	let c = lfSaw(0.2 + b, i / n) * 0.4;
	let d = sinOsc(0.03, i + 1) * 0.5 + 1;
	let e = sinOsc(200 + i, 0) * d;
	let f = sinOsc(0.04, i + 2) * 0.5 + 1;
	let g = sinOsc(400 + i,0) * f;
	let h = sinOsc(0.05, i + 3) * 0.5 + 1;
	let j = sinOsc(800 + i, 0) * h;
	let k = linExp(i, 0, n - 1, 70, 1500);
	let z = sinOsc(k, a) * c.max(0) * e * g * j;
	let l = linLin(i, 0, n - 1, -0.925, 0.925);
	pan2(z, l, 1 / n)
};
let y = limiter(leakDc(1.to(n).collect(x/1).sum, 0.995), 1, 0.01);
gVerb(y, 3, 5, 0.2, 0.8, 20, 0.1, 0.7, 0.5, 300).transpose.sum * 0.25
