{- strummable metals ; use mouse to strum strings ; jmcc -}
var x = MouseX(0, 1, 0, 0.2);
var strFunc = {
    arg i;
    var trigger = Hpz1(x > (0.25 + (i * 0.07))).abs;
    var pluck = PinkNoise() * Decay(trigger, 0.05) * 0.04;
    var n = 15;
    Pan2(RingzBank(pluck, { 300 * i + LinRand(0, 8000, 0) }.dup(n), [1], { Rand(1, 4) }.dup(n)), i * 0.2 - 0.5, 1);
};
LeakDc(Lpf(1.to(8).collect(strFunc).sum, 12000), 0.995)

{- ---- notes.md ---- -}
Mouse control.
