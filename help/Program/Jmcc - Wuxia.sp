/* Wuxia (Jmcc) ; http://www.iamas.ac.jp/~aka/dspss2004/materials/ ; Graph rewrite */
let tr = Impulse(1 / 7, 0);
let amp = 0.1;
let eg = LinSeg(tr, [0, 0.03, 1, 4, 1, 2, 0]);
let noise = WhiteNoise() * 0.1 * eg;
let dt = TxLine(
	TExpRand(10, 12000, tr),
	TExpRand(10, 12000, tr),
	4,
	tr
).Recip;
6.timesRepeat {
    noise := LeakDc(
	    CombC(noise, 0.1, dt, dt * 6) + dt,
	    0.995
    )
};
noise := {
    let pos = TRand(-1, 1, tr);
    Pan2(
        CombC(noise, 0.2, TRand(0.1, 0.2, tr), 3) + noise,
        TLine(pos, pos + TRand(-2, 2, tr), 4, tr),
        1
    )
} !+ 5;
noise * eg * amp
