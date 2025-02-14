/* zizle (jmcc) #SC3d1.5 ; graph rewrite */
{ :tr |
    let a = { :f |
	    (SinOsc(f * [TRand(0.7, 1.3, tr), 1], { TRand(0, 2.pi, tr) } ! 2) * 0.1).Sum
    };
    let o = SinOsc(TRand(24, 108, tr).MidiCps, TRand(0, 2.pi, tr));
    let s = o * a(TExpRand(0.3, 8, tr)).Max(0) * a(TExpRand(6, 24, tr)).Abs;
    Pan2(s, TRand(-1, 1, tr), 1)
}.OverlapTexture(4, 4, 12).Mix
