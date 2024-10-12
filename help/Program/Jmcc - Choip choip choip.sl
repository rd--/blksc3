{- jmcc ; choip choip choip -}
var dur = 12;
var z = OverlapTexture({
    arg tr;
    var i = Impulse(TxLine(TExpRand(1, 30, tr), TExpRand(1, 30, tr), dur, tr), 0);
    var f = TxLine(TExpRand(600.0, 8000.0, tr), TExpRand(600.0, 8000.0, tr), dur, tr);
    var o = SinOsc(Decay2(i, 0.05, 0.5) * -0.9 * f + f, 0);
    var l = TxLine(TExpRand(0.01, 0.5, tr), TExpRand(0.01, 0.5, tr), dur, tr);
    var s = Decay2(i * l, 0.01, 0.2) * o;
    Pan2(s, TLine(TRand(-1, 1, tr), TRand(-1, 1, tr), dur, tr), 1)
}, dur - 2, 1, 8);
4.timesRepeat({ z = AllpassC(z, 0.1, { Rand(0, 0.05) }.dup, 4) });
z
