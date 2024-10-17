/* bidirectional strummable guitar (jmcc) #11 */
var pitch1 = [52, 57, 62, 67, 71, 76];
var pitch2 = pitch1 + 7;
var mousex = MouseX(0, 1, 0, 0.2);
var strFunc = { :i |
   var trigger = Hpz1(mousex > (0.25 + (i * 0.1)));
   var pluck1 = PinkNoise() * Decay(trigger.Max(0), 0.05);
   var period1 = pitch1.at(i).MidiCps.Recip;
   var string1 = CombL(pluck1, period1, period1, 4);
   var pluck2 = BrownNoise() * Decay(trigger.Neg.Max(0), 0.05);
   var period2 = pitch2.at(i).MidiCps.Recip;
   var string2 = CombL(pluck2, period2, period2, -4);
   Pan2(string1 + string2, i * 0.2 - 0.5,  1)
};
var out = 1.to(pitch1.size).collect(strFunc).sum;
LeakDc(Lpf(out, 12000), 0.995)

/* ---- notes.md ---- */
Mouse control.
