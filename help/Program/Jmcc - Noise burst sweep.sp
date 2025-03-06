/* Noise burst sweep (Jmcc) #6 ; Mouse control */
let n = { WhiteNoise() } ! 2;
let lfoRate = MouseX(10, 60, 1, 0.2);
let amp = LfSaw(lfoRate, -1).Max(0);
let cfreq = MouseY(400, 8000, 1, 0.2);
let freq = SinOsc(0.2, 0) * cfreq + (1.05 * cfreq);
Resonz(n * amp, freq, 0.1)

# Annotation

Mouse control.

