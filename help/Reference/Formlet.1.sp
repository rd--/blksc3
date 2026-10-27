/* Formlet.1 */
let x = MouseX(0.012, 0.19, 1, 0.1) + (LfNoise2(0.2) * 0.1 + 0.05);
let f = Formlet(Blip(10, 12), LfNoise0([20 40]) * 43 + 700, 0.005, x.max(0));
let o = SinOsc(40, 0) * LfNoise0([5 10]);
LeakDc(f + o, 0.995).bilateralClip(0.75) * 0.5

# Formlet

Mouse control.
