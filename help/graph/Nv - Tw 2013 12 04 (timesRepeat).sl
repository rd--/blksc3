(* https://twitter.com/headcube/status/408145586970324992 (nv) *)
var i, a, p, x, o;
i = 1;
s = 0;
9.timesRepeat({
    a = Saw(1 / i + 1 / 6);
    p = Pluck(a, a, 1, 1 / i / (3 - LFPulse(1 / i, 0, 0.5)) / 30, 9, 0.9 / i);
    x = 0.5 ** i * p;
    o = SinOsc(2, 0) + [4, 9];
    s = s + CombC(x, 1, o * 0.001, 0) - x;
    i = i + 1
});
s / 9 / 9
