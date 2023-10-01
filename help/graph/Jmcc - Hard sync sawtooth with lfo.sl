(* hard sync sawtooth with lfo (jmcc) #6 ; graph-rewrite *)
var txt = OverlapTexture({ :tr |
    var f = (30 + TRand(0, 50, tr)).MidiCps;
    SyncSaw([f, f + 0.2], SinOsc(0.2, { TRand(0, 2 * pi, tr) }.dup(2)) * 2 * f + (3 * f)) * 0.05
}, 4, 4, 4);
CombC(txt, 0.3, 0.3, 4) + txt.reverse
