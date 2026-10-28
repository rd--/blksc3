/* bitwise (jl) - a0f253ff89f6b244ea29a1e431dd9e5df5571a8b (jonatan liljedahl) */
let t = pulseCount(impulse(8000, 0), 0);
let b1 = (t * 15).bitAnd(t.bitShiftRight(5));
let b2 = (t * 5).bitAnd(t.bitShiftRight([3, 4]));
let b3 = (t * 2).bitAnd(t.bitShiftRight(9));
let b4 = (t * 8).bitAnd(t.bitShiftRight(11));
let s = (b1.bitOr(b2).bitOr(b3).bitOr(b4) - 3) % 256;
hpf(((s / 127) - 1) * 3, 20).tanh * 0.02
