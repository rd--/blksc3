/* Theremin (Jmcc) */
let mod = 7;
let detune = 0;
let x = MouseX(0, 0.9, 0, 0.2);
let y = MouseY(4000, 200, 1, 0.8) + detune;
let f = y + (y * SinOsc(mod, 0) * 0.02);
Pan2(SinOsc(f, 0), 0, x * 0.1)

# Notes

Mouse control.
