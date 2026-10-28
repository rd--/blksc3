/* sample and hold liquidities (jmcc) #4 */
let r = mouseX(1, 200, 1, 0.1);
let t = r.reciprocal;
let c = impulse(r, 0) * 0.4;
let cf = mouseY(100, 8000, 1, 0.1);
let f = latch(whiteNoise() * cf * 0.5 + cf, c);
let p = latch(whiteNoise(), c);
let i = pan2(sinOsc(f, 0), p, decay2(c, 0.1 * t, 0.9 * t));
combC(i, 0.3, 0.3, 2)

# Notes

Mouse control.
