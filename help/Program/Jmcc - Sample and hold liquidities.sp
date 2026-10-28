/* sample and hold liquidities (jmcc) #4 */
var r = mouseX(1, 200, 1, 0.1);
var t = r.reciprocal;
var c = impulse(r, 0) * 0.4;
var cf = mouseY(100, 8000, 1, 0.1);
var f = latch(whiteNoise() * cf * 0.5 + cf, c);
var p = latch(whiteNoise(), c);
var i = pan2(sinOsc(f, 0), p, decay2(c, 0.1 * t, 0.9 * t));
combC(i, 0.3, 0.3, 2)

# Notes

Mouse control.
