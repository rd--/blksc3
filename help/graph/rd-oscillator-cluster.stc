// oscillator cluster (rd)
{
    var np = 12;
    var tr = Dust(0.075);
    var prt = {
        arg p;
        var d = p.first;
        var a = p.second;
        {
            arg cf;
            var o = SinOsc(TLine(5 + TRand(0, 1, tr), 0.01, d, tr), 0);
            var e = TLine(20 + TRand(0, 10, tr), 0, d, tr);
            var f = [cf, TRand(cf, cf + 2, tr)] + (o * e);
            SinOsc(f, 0) * Decay2(tr, TRand(0.1, 0.2, tr), d) * a
        }
    };
    var fp = { TRand(220, 660, tr) }.dup(np);
    fp.collect(prt.value([TRand(4, 7, tr), TRand(0.01, 0.05, tr)])).sum
}.dup(5).sum

