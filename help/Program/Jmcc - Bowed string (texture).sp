/* bowed string (jmcc) */
{ :tr |
    let root = 5;
    let scale = [0, 2, 4, 5, 7, 9, 11] + root;
    let oct = [24, 36, 48, 60, 72, 84];
    let f0 = (tChoose(tr, scale) + tChoose(tr, oct)).midiCps;
    let freq = 1.to(12).collect { :i | f0 * i };
    let a0 = tRand(0.7, 0.9, tr);
    let amp = { a0 := a0 * a0 } ! 12;
    let x = { brownNoise() } ! 2 * 0.007 * (lfNoise1(tExpRand(0.125, 0.5, tr)) * 0.6 + 0.4).max(0);
    let k = ringzBank(x, freq, amp, { tRand(1, 3, tr) } ! 12);
    (k * 0.1).softClip
}.overlapTexture(5, 2, 12).mix
