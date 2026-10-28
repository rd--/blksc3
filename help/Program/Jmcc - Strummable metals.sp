/* strummable metals ; use mouse to strum strings ; jmcc */
let x = mouseX(0, 1, 0, 0.2);
let strFunc = { :i |
    let trigger = hpz1(x > (0.25 + (i * 0.07))).abs;
    let pluck = pinkNoise() * decay(trigger, 0.05) * 0.04;
    let n = 15;
    pan2(ringzBank(pluck, { 300 * i + linRand(0, 8000, 0) }.duplicate(n), [1], { rand(1, 4) }.duplicate(n)), i * 0.2 - 0.5, 1)
};
leakDc(lpf(1.to(8).collect(strFunc/1).sum, 12000), 0.995)

# Notes

Mouse control.
