/* Sweepy noise (Jmcc) #6 */
let lfoDepth = mouseY(200, 8000, 1, 0.1);
let lfoRate = mouseX(4, 60, 1, 0.1);
let freq = lfSaw(lfoRate, 0) * lfoDepth + (lfoDepth * 1.2);
let filtered = rlpf({ whiteNoise() } ! 2 * 0.03, freq, 0.1);
combC(filtered, 0.3, 0.3, 2) + filtered

# Annotation

Mouse control.
