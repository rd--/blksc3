/* zizle (jmcc) #SC3d1.5 ; graph rewrite */
{ :tr |
    let a = { :f |
	    (sinOsc(f * [tRand(0.7, 1.3, tr), 1], { tRand(0, 2.pi, tr) } ! 2) * 0.1).sum
    };
    let o = sinOsc(tRand(24, 108, tr).midiCps, tRand(0, 2.pi, tr));
    let s = o * a(tExpRand(0.3, 8, tr)).max(0) * a(tExpRand(6, 24, tr)).abs;
    pan2(s, tRand(-1, 1, tr), 1)
}.overlapTexture(4, 4, 12).mix
