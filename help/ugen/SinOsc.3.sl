(* SinOsc.3.sl *)
var speeds = (1 .. 11) / 20;
var f0 = (MouseX(0, 36, 0, 0.2).RoundTo(7) + 24).MidiCps;
var f = { :partial |
    Pan2(SinOsc(f0 * partial, 0), Rand(-1, 1), SinOsc(speeds.atRandom, 0).Max(0))
};
var harmonics = 16;
(1 .. harmonics).collect(f).sum / harmonics * 0.5

(* ---- notes.md ---- *)
# SinOsc

Multiple sine tones, courtesy <https://github.com/cianoc/supercollider_fragments>

Mouse control.
