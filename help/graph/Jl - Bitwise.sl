{- bitwise (jl) - a0f253ff89f6b244ea29a1e431dd9e5df5571a8b (jonatan liljedahl) -}
let t = PulseCount(Impulse(8000, 0), 0);
let b1 = (t * 15).BitAnd(t.ShiftRight(5));
let b2 = (t * 5).BitAnd(t.ShiftRight([3, 4]));
let b3 = (t * 2).BitAnd(t.ShiftRight(9));
let b4 = (t * 8).BitAnd(t.ShiftRight(11));
let s = (b1.BitOr(b2).BitOr(b3).BitOr(b4) - 3) % 256;
Hpf(((s / 127) - 1) * 3, 20).Tanh * 0.02
