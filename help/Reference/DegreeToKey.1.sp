/* degreeToKey */
let b = [0 2 4 5 7 9 11].localBuf;
let m = degreeToKey(b, [mouseX(0, 15, 0, 0.2), mouseY(3, 10, 0, 0.2)], 12);
combC(blip(lag(([48, 36] + m).midiCps, 0.01), [2, 3]), 0.2, 0.2, 2) * [0.05, 0.1]

# degreeToKey

_degreeToKey_ converts a fractional scale degree into a scale tone.

⛁ (_bufnum_) is the scale, 𝄶 (_octave_) is the number of steps per octave

In this program the ☟𝑥 and ☟𝑦 (_mouseX_ and _mouseY_) index into the major scale over different ranges and in differrent octaves.
