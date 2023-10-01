(* analogue daze (jmcc) #3 *)
var pattern = #[55, 63, 60, 63, 57, 65, 62, 65];
var f = {
    arg param;
    var octave = param.nth(1);
    var clockRate = param.nth(2);
    var pwmrate = param.nth(3);
    var fltrate = param.nth(4);
    var tr = Impulse(clockRate, 0);
    var patternCps = (pattern + (12 * octave)).midiCps;
    var sq = Demand(tr, 0, Seq(inf, patternCps));
    var pwm = SinOsc(pwmrate, Rand(0, 2 * pi)) * 0.4 + 0.5;
    var cf = SinOsc(fltrate, Rand(0, 2 * pi)) * 1400 + 2000;
    RLPF(LFPulse(Lag(sq, 0.05), 0, pwm) * 0.1, cf, 1 / 15);
};
var a = { LFNoise0(LFNoise1(0.3) * 6000 + 8000) }.dup * 0.07;
var x = Decay(Impulse(2, 0), 0.15) * a;
var g = x + [f.value(#[1, 8, 0.31, 0.2]), f.value(#[0, 2, 0.13, 0.11])];
CombC(g, 0.375, 0.375, 5) + g.reverse * 0.4
