(* bitwise (jl) - a0f253ff89f6b244ea29a1e431dd9e5df5571a8b (jonatan liljedahl) *)
var t = PulseCount(Impulse(8000, 0), 0);
var b1 = (t * 15).BitAnd(t.ShiftRight(5));
var b2 = (t *  5).BitAnd(t.ShiftRight([3, 4]));
var b3 = (t *  2).BitAnd(t.ShiftRight(9));
var b4 = (t *  8).BitAnd(t.ShiftRight(11));
var s = (b1.BitOr(b2).BitOr(b3).BitOr(b4) - 3) % 256;
HPF(((s / 127) - 1) * 3, 20).tanh * 0.02
