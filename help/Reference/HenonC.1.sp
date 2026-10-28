/* henonC.1 */
var x = mouseX(1, 1.4, 0, 0.1);
var y = mouseY(0, 0.3, 0, 0.1);
var f0 = 40;
var f = henonC(f0, x, [y, y * 0.75], 0, 0) * 800 + 900;
sinOsc(f, 0) * 0.4

# henonC

As a frequency control.
