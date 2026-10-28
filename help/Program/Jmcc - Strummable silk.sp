/* strummable silk (jmcc) #11 */
let x = mouseX(0, 1, 0, 0.2);
let str = { :ix |
    let n = 15;
    let tr = hpz1(x > (0.25 + (ix - 1 * 0.07))).abs;
    let env = decay(impulse(14, 0) * lag(trig(tr, 1), 0.2) * 0.01, 0.04);
    let pluck = pinkNoise() * env;
    let freq = ([-2, 0, 3, 5, 7, 10, 12, 15].at(ix) + 60).midiCps;
    let metal = ringzBank(pluck, 1.to(n).collect({ :j | j * freq }), [1], { rand(0.3, 1) }.duplicate(n));
    pan2(metal, ix - 1 * 0.2 - 0.5, 1)
};
let s = leakDc(lpf(1.to(8).collect(str/1).sum, 12000), 0.995);
6.timesRepeat({s := allpassC(s, 0.1, { rand(0, 0.05) }.duplicate(2), 4)});
s

# Notes

Mouse control.
