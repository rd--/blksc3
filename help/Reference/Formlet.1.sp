/* formlet.1 */
let x = mouseX(0.012, 0.19, 1, 0.1) + (lfNoise2(0.2) * 0.1 + 0.05);
let f = formlet(blip(10, 12), lfNoise0([20 40]) * 43 + 700, 0.005, x.max(0));
let o = sinOsc(40, 0) * lfNoise0([5 10]);
leakDc(f + o, 0.995).bilateralClip(0.75) * 0.5

# formlet

Mouse control.
