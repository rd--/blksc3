/* Stepper.2 */
let t = Impulse(MouseX(1, 40, 0, 0.2), 0.1);
let s = Stepper(t, 0, 0, 7, 1, 0);
let f = Select(s.kr, [72 63 67 72 55 62 63 60].midiCps);
Saw(f) * 0.1

# Stepper

Courtesy [Nc](https://composerprogrammer.com/teaching/supercollider/sctutorial/tutorial.html) 3.4
