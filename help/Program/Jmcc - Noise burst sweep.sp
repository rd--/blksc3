/* Noise burst sweep (Jmcc) #6 ; Mouse control */
let n = { whiteNoise() } ! 2;
let lfoRate = mouseX(10, 60, 1, 0.2);
let amp = lfSaw(lfoRate, -1).max(0);
let cfreq = mouseY(400, 8000, 1, 0.2);
let freq = sinOsc(0.2, 0) * cfreq + (1.05 * cfreq);
resonz(n * amp, freq, 0.1)

# Annotation

Mouse control.

