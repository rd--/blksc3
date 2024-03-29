{- strummable silk (jmcc) #11 -}
var x = MouseX(0, 1, 0, 0.2);
var str = {
    arg ix;
    var n = 15;
    var tr = Hpz1(x > (0.25 + (ix - 1 * 0.07))).abs;
    var env = Decay(Impulse(14, 0) * Lag(Trig(tr, 1), 0.2) * 0.01, 0.04);
    var pluck = PinkNoise() * env;
    var freq = ([-2, 0, 3, 5, 7, 10, 12, 15].nth(ix) + 60).midiCps;
    var metal = RingzBank(pluck, 1.to(n).collect({ arg j; j * freq }), [1], { Rand(0.3, 1) }.dup(n));
    Pan2(metal, ix - 1 * 0.2 - 0.5, 1)
};
var s = LeakDc(Lpf(1.to(8).collect(str).sum, 12000), 0.995);
6.timesRepeat({s = AllpassC(s, 0.1, { Rand(0, 0.05) }.dup, 4)});
s

{- ---- notes.md ---- -}
Mouse control.
