(* PV_RandComb.1 *)
var b = BufAlloc(1, 2048);
var x = MouseX(100, 12000, 0, 0.1);
var y = MouseY(0.01, 0.15, 0, 0.1);
var t = Impulse((LfNoise0([3, 3.25]) * 16) + 18, 0);
var e = Decay2(t, 0.01, TRand(0.005, y, t));
var o = Bpf(WhiteNoise() * e, TRand(10, x, t), TRand(0, 1, t));
var p = PvRandComb(Fft(b, o, 0.5, 0, 1, 0), TExpRand(0.15, 1, t), t);
(o * 0.05) + Ifft(p, 0, 0)

(* ---- notes.md ---- *)
# PvRandComb

This program make a simple clattering sound by bandpass filtering white noise and then processing it in the frequency domain to randomly delete frequency regions.
