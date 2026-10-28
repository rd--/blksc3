/* Wuxia (Jmcc) ; http://www.iamas.ac.jp/~aka/dspss2004/materials/ ; Graph rewrite */
let tr = impulse(1 / 7, 0);
let amp = 0.1;
let eg = linSeg(tr, [0, 0.03, 1, 4, 1, 2, 0]);
let noise = whiteNoise() * 0.1 * eg;
let dt = txLine(
	tExpRand(10, 12000, tr),
	tExpRand(10, 12000, tr),
	4,
	tr
).reciprocal;
6.timesRepeat {
    noise := leakDc(
	    combC(noise, 0.1, dt, dt * 6) + dt,
	    0.995
    )
};
noise := {
    let pos = tRand(-1, 1, tr);
    pan2(
        combC(noise, 0.2, tRand(0.1, 0.2, tr), 3) + noise,
        tLine(pos, pos + tRand(-2, 2, tr), 4, tr),
        1
    )
} !+ 5;
noise * eg * amp
