// sturmian sequencer i (jr)
var rules = [[0, 1], [0]];
var rewrite = {
    arg n;
    var r = [0];
    var u = n.timesRepeat({ r = r.collect({ arg e; rules.nth(e + 1) }).concatenation }); // u = for translator
    r
};
var strFunc = {
    arg i;
    var str = rewrite.value(i + 6);
    var dt = 2 ** i.negated * 10;
    var trig = TDmdFor(dt, 0, Seq(1, str));
    var freq = ExpRand(200, i + 1 / 7 * 10100);
    Ringz(trig, freq * [1, 1.2, 1.5], ExpRand(2 ** i.negated * 0.1, 1.101)).sum.Distort
};
0.to(6).collect(strFunc).splay * 0.3
