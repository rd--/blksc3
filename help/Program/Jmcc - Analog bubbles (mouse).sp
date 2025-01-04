/* analog bubbles with mouse control (jmcc) #3 */
let o1 = LfSaw(MouseX(2, 40, 1, 0.2), 0) * -3 + 80;
let o2 = LfSaw(MouseY(0.1, 10, 1, 0.2), 0) * 24 + o1;
let o3 = SinOsc(o2.MidiCps, 0) * 0.04;
Pan2(CombC(o3, 0.2, 0.2, 2), 0, 1)

# Notes

Mouse control.

