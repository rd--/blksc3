(* reso-pulse ; jmcc #1 *)
var lfoFreq = 6;
var lfo = LfNoise0(lfoFreq) * 1000 + 1200;
var left = Rlpf(
    OverlapTexture({ :tr |
        var f = TChoose(tr, [25, 30, 34, 37, 41, 42, 46, 49, 53, 54, 58, 61, 63, 66]).MidiCps;
        LfPulse(f, 0, 0.2) + LfPulse(2 * f + TRand(-0.5, 0.5, tr), 0, 0.2)
    }, 4, 2, 4) * 0.02,
    lfo,
    MouseX(0.2, 0.02, 1, 0.2)
);
var delayTime = 2 / lfoFreq;
var right = DelayC(left, delayTime, delayTime);
[left, right]
