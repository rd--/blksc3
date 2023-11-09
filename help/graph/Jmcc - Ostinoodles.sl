(* jmcc - ostinoodles *)
var z = { :tr |
    var root = 81 + TrRand(tr, -6, 6);
    var major = [0, 2, 4, 5, 7, 9, 11].asLocalBuf;
    var offset = TrRand(tr, -16, 16);
    var sequence = DegreeToKey(major, TrScramble(tr, [0, 1, 2, 3] + offset), 12) + root;
    var f = TrXLine(tr, TrExpRand(tr, 4.0, 24.0), TrExpRand(tr, 4.0, 24.0), 12);
    var trig = Impulse(f, 0);
    var freq = Demand(trig, 0, Dseq(inf, sequence.MidiCps));
    var sig = LfTri(freq.kr, 0) * Decay2(trig, 0.004, 0.3).kr * 0.1;
    EqPan2(sig, TrRand(tr, -1, 1))
}.OverlapTexture(6, 3, 6);
6.timesRepeat {
	z := AllpassN(z, 0.040, { Rand(0, 0.040) } ! 2, 16)
};
z

(* ---- notes.md ---- *)
_TrScramble_ requires _sc3-rdu_.
