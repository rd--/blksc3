/* strummable silk (jmcc) #11 */
var x = mouseX(0, 1, 0, 0.2);
var str = {
    arg ix;
    var n = 15;
    var tr = hpz1(x > (0.25 + (ix - 1 * 0.07))).abs;
    var env = decay(impulse(14, 0) * lag(trig(tr, 1), 0.2) * 0.01, 0.04);
    var pluck = pinkNoise() * env;
    var freq = ([-2, 0, 3, 5, 7, 10, 12, 15].nth(ix) + 60).midiCps;
    var metal = ringzBank(pluck, 1.to(n).collect({ arg j; j * freq }), [1], { rand(0.3, 1) }.dup(n));
    pan2(metal, ix - 1 * 0.2 - 0.5, 1)
};
var s = leakDc(lpf(1.to(8).collect(str).sum, 12000), 0.995);
6.timesRepeat({s = allpassC(s, 0.1, { rand(0, 0.05) }.dup, 4)});
s

# Notes

Mouse control.
