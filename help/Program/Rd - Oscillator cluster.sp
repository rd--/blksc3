/* oscillator cluster (rd) */
{
	let np = 12;
	let tr = dust(0.075);
	let prt = { :p |
		let d = p.first;
		let a = p.second;
		{ :cf |
			let o = sinOsc(tLine(5 + tRand(0, 1, tr), 0.01, d, tr), 0);
			let e = tLine(20 + tRand(0, 10, tr), 0, d, tr);
			let f = [cf, tRand(cf, cf + 2, tr)] + (o * e);
			sinOsc(f, 0) * decay2(tr, tRand(0.1, 0.2, tr), d) * a
		}
	};
	let fp = { tRand(220, 660, tr) }! np;
	fp.collect(prt([tRand(4, 7, tr), tRand(0.01, 0.05, tr)])).sum
} !+ 5
