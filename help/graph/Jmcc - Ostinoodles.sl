{- jmcc - ostinoodles -}
let z = { :tr |
    let root = 81 + TRand(-6, 6, tr);
    let major = [0, 2, 4, 5, 7, 9, 11].asLocalBuf;
    let offset = TRand(-16, 16, tr);
    let sequence = DegreeToKey(major, TScramble(tr, [0, 1, 2, 3] + offset), 12) + root;
    let f = TxLine(TExpRand(4, 24, tr), TExpRand(4, 24, tr), 12, tr);
    let trig = Impulse(f, 0);
    let freq = Demand(trig, 0, Dseq(inf, sequence.MidiCps));
    let sig = LfTri(freq.kr, 0) * Decay2(trig, 0.004, 0.3).kr * 0.1;
    EqPan2(sig, TRand(-1, 1, tr))
}.OverlapTexture(6, 3, 6).Mix;
6.timesRepeat {
	z := AllpassN(z, 0.040, { Rand(0, 0.040) } ! 2, 16)
};
z

{- ---- notes.md ---- -}
_TrScramble_ requires _sc3-rdu_.
