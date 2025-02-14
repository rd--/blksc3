/* F0 - Pkt 26 ; http://www.fredrikolofsson.com/f0blog/?q=node/490 */
let n = 8;
let x = { :i |
	let t = i / n;
	let a = VarSaw(0.02, t, 0.5) * 7.5;
	let b = VarSaw(0.16, t, 2 / 3) * a.Abs + 300;
	let c = VarSaw(0.064, t, 0.5) * 25 + 50;
	let d = VarSaw(0.012, t, 0.75) * c + 200;
	let e = VarSaw(0.024, t, 0.25) * 0.475 + 0.5;
	let f = VarSaw(100 + i, t, e);
	let g = VarSaw(0.048, 0, 0.5) * 25 + 150;
	let h = VarSaw(i + 1 * g, t, 1 / 3) * 150;
	let o = SinOsc(h, f.pi) * d + b;
	let z = LeakDc(VarSaw(o, t, 0.5), 0.995);
	Pan2(z, VarSaw(0.02, t, 0.5), 1 / n)
};
(1 .. n).collect(x:/1).Sum * 0.25
