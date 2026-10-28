/* Theremin (Jmcc) */
let mod = 7;
let detune = 0;
let x = mouseX(0, 0.9, 0, 0.2);
let y = mouseY(4000, 200, 1, 0.8) + detune;
let f = y + (y * sinOsc(mod, 0) * 0.02);
pan2(sinOsc(f, 0), 0, x * 0.1)

# Notes

Mouse control.
