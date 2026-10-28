/* Reso-pulse ; Jmcc #1 */
let lfoFreq = 6;
let lfo = lfNoise0(lfoFreq) * 1000 + 1200;
let left = rlpf(
    overlapTexture({ :tr |
        let f = tChoose(
		tr,
		[25, 30, 34, 37, 41, 42, 46, 49, 53, 54, 58, 61, 63, 66]
	).midiCps;
        lfPulse(
		f,
		0,
		0.2
	) + lfPulse(
		2 * f + tRand(-0.5, 0.5, tr),
		0,
		0.2
	)
    }, 4, 2, 4).sum * 0.02,
    lfo,
    mouseX(0.2, 0.02, 1, 0.2)
);
let delayTime = 2 / lfoFreq;
let right = delayC(left, delayTime, delayTime);
[left, right]
