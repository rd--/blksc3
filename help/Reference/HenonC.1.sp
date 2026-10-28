/* henonC.1 */
let x = mouseX(1, 1.4, 0, 0.1);
let y = mouseY(0, 0.3, 0, 0.1);
let f0 = 40;
let f = henonC(f0, x, [y, y * 0.75], 0, 0) * 800 + 900;
sinOsc(f, 0) * 0.4

# henonC

As a frequency control.
