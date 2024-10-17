/* sweepy noise (jmcc) #6 */
var lfoDepth = MouseY(200, 8000, 1, 0.1);
var lfoRate = MouseX(4, 60, 1, 0.1);
var freq = LFSaw(lfoRate, 0) * lfoDepth + (lfoDepth * 1.2);
var filtered = RLPF({ WhiteNoise() }.dup * 0.03, freq, 0.1);
CombC(filtered, 0.3, 0.3, 2) + filtered

/* ---- notes.md ---- */
Mouse control.
