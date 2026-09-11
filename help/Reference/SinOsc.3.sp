/* SinOsc.3.sl */
let speeds = (1 .. 11) / 20;
let f0 = (MouseX(0, 36, 0, 0.2).Round(7) + 24).MidiCps;
let f = { :partial |
    Pan2(
	    SinOsc(f0 * partial, 0),
	    Rand(-1, 1),
	    SinOsc(speeds.atRandom, 0).Max(0)
    )
};
let harmonics = 16;
(1 .. harmonics).collect(f:/1).sum / harmonics * 0.5

# SinOsc

Multiple sine tones, courtesy [Coc](https://github.com/cianoc/supercollider_fragments)

Mouse control.
