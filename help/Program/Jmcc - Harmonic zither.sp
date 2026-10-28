/* harmonic zither (jmcc) #11 ; mouse control */
let pitch = [50, 53.86, 57.02, 59.69, 62, 64.04, 65.86, 67.51, 69.02, 71.69, 72.88, 74];
let triggerSpacing = 0.5 / (pitch.size - 1);
let panSpacing = 1.5 / (pitch.size - 1);
let stringFunc = { :i |
    pan2(combL(pinkNoise() * decay(hpz1(mouseX(0, 1, 0, 0.2) > (0.25 + i * triggerSpacing)).abs, 0.05),
               pitch.at(i).midiCps.reciprocal,
               pitch.at(i).midiCps.reciprocal, 8),
               i - 1 * panSpacing - 0.75, 1)
};
leakDc(lpf(1.to(pitch.size).collect(stringFunc/1).sum, 12000), 0.995)

# Notes

Mouse control.
