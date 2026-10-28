/* strummable metals ; use mouse to strum strings ; jmcc */
var x = mouseX(0, 1, 0, 0.2);
var strFunc = {
    arg i;
    var trigger = hpz1(x > (0.25 + (i * 0.07))).abs;
    var pluck = pinkNoise() * decay(trigger, 0.05) * 0.04;
    var n = 15;
    pan2(ringzBank(pluck, { 300 * i + linRand(0, 8000, 0) }.dup(n), [1], { rand(1, 4) }.dup(n)), i * 0.2 - 0.5, 1);
};
leakDc(lpf(1.to(8).collect(strFunc).sum, 12000), 0.995)

# Notes

Mouse control.
