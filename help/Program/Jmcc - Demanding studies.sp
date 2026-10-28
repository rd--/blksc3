/* Demanding studies (Jmcc) */
let s1 = drand(Infinity, [72, 75, 79, 82]);
let s2 = drand(1, [82, 84, 86]);
let s3 = dseq(Infinity, [72, 75, 79, s2]);
let x = mouseX(5, 13, 0, 0.2);
let tr = impulse(x, 0);
let f = demand(tr, 0, [(s1 - 12), s3].midiCps);
let o1 = sinOsc(f + [0, 0.7], 0);
let o2 = saw(f + [0, 0.7]) * 0.3;
let o3 = (o1 + o2).distort;
o3 * 0.1

# Notes

Mouse control.
