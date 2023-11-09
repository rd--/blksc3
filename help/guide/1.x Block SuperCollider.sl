(* Block SuperCollider *)
OverlapTexture({ :tr |
    var pm = TrLine(tr, 0, TrRand(tr, 0, 12), TrRand(tr, 1, 12));
    EqPan2(PmOsc(TrRand(tr, 0, 2000), TrRand(tr, 0, 800), pm, 0), TrRand(tr, -1, 1)) * 0.05
}, 1, 2, 7)

(* ---- notes.md ---- *)
# Block SuperCollider

_Block SuperCollider_ (blksc3) is
a [block](https://developers.google.com/blockly) editor for the
[SuperCollider](https://www.audiosynth.com/) (Sc) synthesiser.

Block editors are a family of visual programming systems that use interlocking graphical blocks to represent the elements of a program.

For instance there are blocks to represent variable assignment and reference,
procedure definition and application,
and logical and mathematical operators.

_blksc3_ also has blocks for the standard components of a synthesiser:
oscillators, noise generators, filters, envelopes, panners, signal analysers and control signal generators &etc.

To make sound _blksc3_ sends messages to the Sc synthesiser, which is started by pressing the _Begin_ button.
The synthesiser status is shown in the adjacent box (the _status area_), which is initially an elipsis.
Once the synthesiser is running the status area will show the number of sounding _unit generators_.

To listen to a program press the _Play_ button, to stop listening press _Reset_.
This program generates a simple texture by summing together overlapping instances of an enveloped phase modulation oscillator pair with randomly generated parameters.
