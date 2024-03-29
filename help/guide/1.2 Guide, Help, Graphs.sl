{- Guide, Help, Graphs -}
EqPan2(PinkNoise(), SinOsc(1 / 7, 0)) * (SinOsc(1 / 5, 3 / 2 * pi) * 0.5 + 1) * -32.DbAmp

{- ---- notes.md ---- -}
# Guide, Help, Graphs

There are three collections of _programs_ that can be selected from menus below the workspace.
When a program is selected the current workspace program is deleted, as if _Clear_ had been run.

There is a _Guide_, of which this program is one section.
The guide consists of very short programs, each with an explanatory text that appears in the _Notes_ area to the right of the workspace.

There are _Help_ programs that illustrate individual blocks.
Some blocks have multiple illustrations and the help programs have numerical suffixes to distinguish them,
i.e. _SinOsc.1_ and _SinOsc.2_ &etc.

There is a collection of _Graph_ programs translated from _SuperCollider_ programs by various authors.
These are sometimes intricate and illustrate more complicated synthesis techniques and graph constructions.
Authors are indicated by their initials.
_JMcC_ is [James McCartney](https://www.audiosynth.com/), the author of SuperCollider.
_F0_ is [Fredrik Olofsson](https://fredrikolofsson.com/).
Comments indicate where the program was initially published.

This program modulates the amplitude and stereo postion of quiet pink noise using sine oscillators.
