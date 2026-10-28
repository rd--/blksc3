/* ringz */
var o = sinOsc(lfNoise0([0.5, 1.5]), 0);
var t = impulse(slope(o).Abs * [2, 3], 0);
var x = mouseX(960, 3620, 1, 0.2);
var y = mouseY(0.5, 2.0, 0, 0.2);
ringz(decay2(t, 0.1, 0.2), tRand(x, 3940, t), tRand(0.005, 0.275, t) * y)

# ringz

Mouse control.
