/* pentatonic pipes (jmcc) ; mousex on right half of screen causes pulsation */
let n = 5;
let mode = [0, 3, 5, 7, 10].localBuf;
let root = rand(12, 48);
let z = { :tr |
    pan2(
        (
		resonz(
			pinkNoise() * 20,
			(degreeToKey(mode, tRand(0, 20, tr), 12) + root).midiCps,
			0.002
		) * 4
	).distort,
        tRand(-1, 1, tr),
        0.2
    )
}.overlapTexture(10, 0.1, n).mix;
z := z * select2(mouseX(0, 1, 0, 0.2) > 0.5, sinOsc(5, 0).max(0), 1);
combC(z, 0.3, 0.3, 8) + z.reverse

# Notes

Mouse control.
