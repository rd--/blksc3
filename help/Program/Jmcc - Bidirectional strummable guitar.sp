/* bidirectional strummable guitar (jmcc) #11 */
let pitch1 = [52, 57, 62, 67, 71, 76];
let pitch2 = pitch1 + 7;
let mousex = MouseX(0, 1, 0, 0.2);
let strFunc = { :i |
   let trigger = Hpz1(mousex > (0.25 + (i * 0.1)));
   let pluck1 = PinkNoise() * Decay(trigger.Max(0), 0.05);
   let period1 = pitch1.at(i).MidiCps.Reciprocal;
   let string1 = CombL(pluck1, period1, period1, 4);
   let pluck2 = BrownNoise() * Decay(trigger.Negated.Max(0), 0.05);
   let period2 = pitch2.at(i).MidiCps.Reciprocal;
   let string2 = CombL(pluck2, period2, period2, -4);
   Pan2(string1 + string2, i * 0.2 - 0.5,  1)
};
let out = 1.to(pitch1.size).collect(strFunc:/1).sum;
LeakDc(Lpf(out, 12000), 0.995)

# Notes

Mouse control.
