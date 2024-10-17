/* bowed string (jmcc) */
{ :tr |
    let root = 5;
    let scale = [0, 2, 4, 5, 7, 9, 11] + root;
    let oct = [24, 36, 48, 60, 72, 84];
    let f0 = (TChoose(tr, scale) + TChoose(tr, oct)).MidiCps;
    let freq = 1.to(12).collect { :i | f0 * i };
    let a0 = TRand(0.7, 0.9, tr);
    let amp = { a0 := a0 * a0 } ! 12;
    let x = { BrownNoise() } ! 2 * 0.007 * (LfNoise1(TExpRand(0.125, 0.5, tr)) * 0.6 + 0.4).Max(0);
    let k = RingzBank(x, freq, amp, { TRand(1, 3, tr) } ! 12);
    (k * 0.1).SoftClip
}.OverlapTexture(5, 2, 12).Mix
