/* sinOsc.2.sl */
let modIndex = mouseY(0, 1000, 0, 0.2);
let modFreq = linExp(mouseX(0, 1, 0, 0.2), 0, 1, 5, 5000);
sinOsc(440 + (modIndex * sinOsc(modFreq, 0)), 0) * 0.1

# sinOsc

Frequency modulation.

Mouse control.
