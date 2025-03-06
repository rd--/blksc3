/* Sweepy noise (Jmcc) #6 */
let lfoDepth = MouseY(200, 8000, 1, 0.1);
let lfoRate = MouseX(4, 60, 1, 0.1);
let freq = LfSaw(lfoRate, 0) * lfoDepth + (lfoDepth * 1.2);
let filtered = Rlpf({ WhiteNoise() } ! 2 * 0.03, freq, 0.1);
CombC(filtered, 0.3, 0.3, 2) + filtered

# Annotation

Mouse control.
