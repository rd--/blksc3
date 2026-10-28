/* F0 - Pkt 26 ; http://www.fredrikolofsson.com/f0blog/?q=node/490 */
let n = 8;
let x = { :i |
	let t = i / n;
	let a = varSaw(0.02, t, 0.5) * 7.5;
	let b = varSaw(0.16, t, 2 / 3) * a.abs + 300;
	let c = varSaw(0.064, t, 0.5) * 25 + 50;
	let d = varSaw(0.012, t, 0.75) * c + 200;
	let e = varSaw(0.024, t, 0.25) * 0.475 + 0.5;
	let f = varSaw(100 + i, t, e);
	let g = varSaw(0.048, 0, 0.5) * 25 + 150;
	let h = varSaw(i + 1 * g, t, 1 / 3) * 150;
	let o = sinOsc(h, f.pi) * d + b;
	let z = leakDc(varSaw(o, t, 0.5), 0.995);
	pan2(z, varSaw(0.02, t, 0.5), 1 / n)
};
(1 .. n).collect(x/1).sum * 0.25
