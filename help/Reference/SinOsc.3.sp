/* sinOsc.3.sl */
let speeds = (1 .. 11) / 20;
let f0 = (mouseX(0, 36, 0, 0.2).round(7) + 24).midiCps;
let f = { :partial |
    pan2(
	    sinOsc(f0 * partial, 0),
	    rand(-1, 1),
	    sinOsc(speeds.atRandom, 0).max(0)
    )
};
let harmonics = 16;
(1 .. harmonics).collect(f/1).sum / harmonics * 0.5

# sinOsc

Multiple sine tones, courtesy [Coc](https://github.com/cianoc/supercollider_fragments)

Mouse control.
