;; lucier (cr) ; http://www.listarc.bham.ac.uk/lists/sc-users/msg47539.html
var bus = 20;
OverlapTexture({ :tr |
    var freq = TRand(56, 64, tr);
    var stringDelay = 1 / freq;
    var pk1Pos = 0.1;
    var srcPos = 0.3;
    var pk2Pos = 0.9;
    var maxDelay = 1;
    var mkDelay = { :p | var i = p.first; var r = p.second; Lpz1(DelayC(i, maxDelay, r * stringDelay)) };
    var mkAllpass = { :p | var i = p.first; var r = p.second; var dt = p.third; Lpz1(AllpassC(i, maxDelay, r * stringDelay, dt)) };
    var drv = InFb(1, bus);
    var pk1R = mkDelay.value([drv, srcPos - pk1Pos]);
    var pk1L = mkAllpass.value([pk1R * -1, pk1Pos * 2,  TRand(0.001, 0.11, tr)]);
    var pk2L = mkDelay.value([pk1L, pk2Pos - pk1Pos]) * 0.99;
    var stringL = mkDelay.value([pk2L, 1 - pk2Pos]);
    var pk2R = mkAllpass.value([stringL * -1, 1 - pk2Pos, 2 + TRand(0.001, 0.11, tr)]) * 0.99;
    var stringR = mkDelay.value([pk2R, pk2Pos - srcPos]);
    var source = {
        var s = SinOsc(220, 0) * 0.01;
        var a = Amplitude(drv, 0.01, 0.01) * 11;
        var p = Pulse(60 + a, 0.5) * 0.1;
        var f = Rlpf(s + p, 320, 0.05);
        var e = 1 - Amplitude(drv, 0.01, 0.01).Min(1);
        Normalizer(f, 0.7, 0.01) * e
    }.value;
    var lOut = ReplaceOut(bus, source * 0.2 + stringR);
    var outL = pk1L + pk1R;
    var outR = pk2L + pk2R;
    bus := bus + 1;
    [outL, outR].mrg(lOut).mrg(drv)
}, 1, 5, 3) * 0.25

;; ---- notes.md
The OverlapTexture variant cannot use LocalIn & LocalOut since there can only be one pair per graph.
