{- wuxia5 (jmcc) ; http://www.iamas.ac.jp/~aka/dspss2004/materials/ ; graph rewrite -}
var tr = Impulse(1 / 7, 0);
var amp = 0.1;
var eg = LinSeg(tr, [0, 0.03, 1, 4, 1, 2, 0]);
var noise = WhiteNoise() * 0.1 * eg;
var dt = TxLine(TExpRand(10, 12000, tr), TExpRand(10, 12000, tr), 4, tr).reciprocal;
6.timesRepeat({
    noise = LeakDC(CombC(noise, 0.1, dt, dt * 6) + dt, 0.995);
});
noise = {
    var pos = TRand(-1, 1, tr);
    Pan2(
        CombC(noise, 0.2, TRand(0.1, 0.2, tr), 3) + noise,
        TLine(pos, pos + TRand(-2, 2, tr), 4, tr),
        1
    );
}.dup(5).sum;
noise * eg * amp
