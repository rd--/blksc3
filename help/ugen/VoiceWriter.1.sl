;; VoiceWriter ; write w and p fields of first 8 voices
VoiceWriter(8, { :e |
    var w = Trig(Impulse(Rand(0.15, 0.85), Rand(0, 1)), 0.25);
    var p = Latch(LinLin(SinOsc(Rand(0.25, 1.5), 0), -1, 1, 0.15, 0.95), tr);
    e.fromAssocArray(['w' -> w, 'p' -> p])
});

;; ---- notes.md
_VoiceWriter_ is the inverse of _Voicer_.
It allows event data to be written using synthesis graphs.
For each voice a function is called with an _Event_ object as argument.
The function provide values for the named fields of the event.

This program writes only the _w_ (_gate_) and _p_ (_pitch_) fields of the first 8 voices.
Unset fields retain their default values.

This program does not generate any sound.
To hear the pattern we must run this program at the same time as another program that reads the control data.
There are many such programs in the Help system, the _CombC.1_ program for instance.