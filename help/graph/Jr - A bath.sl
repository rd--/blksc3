(* a bath (jr) *)
var above = MouseY(0, 2, 0, 0.2).roundTo(1);
var aside = MouseX(1, 1.6, 0, 0.2);
var sources = [{ WhiteNoise() }.dup * 0.3, { PinkNoise() }.dup, LfdNoise3(10000) * 0.1];
var u1 = SelectX(LinLin(LfdNoise1(4), -1, 1, 0, sources.size), sources) * 0.1;
var u2 = u1 + DelayC(u1, 0.1, [0.001, 0.0012]) * 0.1;
var u3 = { Rlpf(u2, { Rand(100.0, 340) * aside }.dup(4), 0.2).sum }.dup;
var u4 = CombC(u3.reverse, 0.05, 0.05, 0.3) * 0.3 * LfNoise2(0.2).max(0) + u3;
SelectX(above.Lag(0.4), [u2, u4]) * 2

(* ---- notes.md ---- *)
Mouse control.
