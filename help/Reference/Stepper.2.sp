/* stepper.2 */
let t = impulse(mouseX(1, 40, 0, 0.2), 0.1);
let s = stepper(t, 0, 0, 7, 1, 0);
let f = selectT(s.kr, [72 63 67 72 55 62 63 60].midiCps);
saw(f) * 0.1

# stepper

Courtesy [Nc](https://composerprogrammer.com/teaching/supercollider/sctutorial/tutorial.html) 3.4
