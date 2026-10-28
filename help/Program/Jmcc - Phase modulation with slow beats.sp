/* phase modulation with slow beats ; jmcc #6 ; graph rewrite */
let n = 4;
let x = mouseX(100, 6000, 1, 0.2);
let y = mouseY(0, 2, 0, 0.2);
overlapTexture(
	{ :tr |
		let a = 0;
		let f1 = tRand(0, x, tr);
		let u = 3.timesRepeat {
			let f2 = tRand(0, x, tr);
			a := sinOsc([f2, f2 + tRand(-1, 1, tr)], 0) * y + a
		};
		sinOsc([f1, f1 + tRand(-1, 1, tr)], a) * 0.1
	},
	4, 4, n
).sum * 0.25

# Notes

Mouse control.

`mouseX` controls random frequency of new events.

`mouseY` controls modulation index.
