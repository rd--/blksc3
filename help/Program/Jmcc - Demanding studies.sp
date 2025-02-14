/* Demanding studies (Jmcc) */
let s1 = Drand(Infinity, [72, 75, 79, 82]);
let s2 = Drand(1, [82, 84, 86]);
let s3 = Dseq(Infinity, [72, 75, 79, s2]);
let x = MouseX(5, 13, 0, 0.2);
let tr = Impulse(x, 0);
let f = Demand(tr, 0, [(s1 - 12), s3].MidiCps);
let o1 = SinOsc(f + [0, 0.7], 0);
let o2 = Saw(f + [0, 0.7]) * 0.3;
let o3 = (o1 + o2).Distort;
o3 * 0.1

# Notes

Mouse control.
