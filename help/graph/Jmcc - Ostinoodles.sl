(* jmcc - ostinoodles *)
var z = { :tr |
    var root = 81 + TRand(-6, 6, tr);
    var major = [0, 2, 4, 5, 7, 9, 11].asLocalBuf;
    var offset = TRand(-16, 16, tr);
    var sequence = DegreeToKey(major, TScramble(tr, [0, 1, 2, 3] + offset), 12) + root;
    var f = TxLine(TExpRand(4.0, 24.0, tr), TExpRand(4.0, 24.0, tr), 12, tr);
    var trig = Impulse(f, 0);
    var freq = Demand(trig, 0, Dseq(inf, sequence.MidiCps));
    var sig = LfTri(freq.kr, 0) * Decay2(trig, 0.004, 0.3).kr * 0.1;
    EqPan2(sig, TRand(-1, 1, tr))
}.OverlapTexture(6, 3, 6);
6.timesRepeat {
	z := AllpassN(z, 0.040, { Rand(0, 0.040) } ! 2, 16)
};
z

(* ---- notes.md ---- *)
_TScramble_ requires _sc3-rdu_.
