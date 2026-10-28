/* cfstring1 (jmcc) ; graph rewrite ; http://www.iamas.ac.jp/~aka/dspss2004/materials/ */
let nc = 2;
{ :tr |
    let dgr = degreeToKey([0, 2, 4, 5, 7, 9, 11].localBuf, tRand(0, 12, tr), 12);
    let freq = (60 + dgr).midiCps;
    let pan = tRand(-0.25, 0.25, tr);
    let amp = tRand(0.1, 0.2, tr);
    let fc = linExp(lfNoise1(tRand(0.25, 0.4, tr)), -1, 1, 500, 2000);
    let osc = { lfSaw(freq * [tRand(0.99, 1.01, tr), tRand(0.99, 1.01, tr)], 0) * amp } !+ 8;
    let eg = decay2(tr, 0.5, 1);
    let out = eg * rlpf(osc.distort * 0.2, fc, 0.1);
    panAz(nc, out, [pan, pan + 0.3], 1, 2, 0.5).sum
}.overlapTexture(2, 0, 10).mix
