/* DegreeToKey */
var b = [0 2 4 5 7 9 11].LocalBuf;
var m = DegreeToKey(b, [MouseX(0, 15, 0, 0.2), MouseY(3, 10, 0, 0.2)], 12);
CombC(Blip(Lag(([48, 36] + m).MidiCps, 0.01), [2, 3]), 0.2, 0.2, 2) * [0.05, 0.1]

# DegreeToKey

_DegreeToKey_ converts a fractional scale degree into a scale tone.

⛁ (_bufnum_) is the scale, 𝄶 (_octave_) is the number of steps per octave

In this program the ☟𝑥 and ☟𝑦 (_MouseX_ and _MouseY_) index into the major scale over different ranges and in differrent octaves.
