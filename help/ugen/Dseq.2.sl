(* Dseq *)
var m = { :f |
    var tr = Impulse(f, 0);
    var sq = Dseq(inf, [60, 63, 67, 69]);
    Demand(tr, 0, sq).MidiCps
};
Splay2(SinOsc([2, 3, 5].collect(m), 0)) * 0.1

(* ---- notes.md ---- *)
# Dseq
