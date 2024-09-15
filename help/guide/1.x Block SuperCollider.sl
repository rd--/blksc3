{- Block SuperCollider -}
OverlapTexture({ :tr |
    let pm = TLine(0, TRand(0, 12, tr), TRand(1, 12, tr), tr);
    EqPan2(PmOsc(TRand(0, 2000, tr), TRand(0, 800, tr), pm, 0), TRand(-1, 1, tr)) * 0.05
}, 1, 2, 7).Mix

{- ---- notes.md ---- -}
# Block SuperCollider

_Block SuperCollider_ (BlkSc3) is
a [block](https://developers.google.com/blockly) editor for the
[SuperCollider](https://www.audiosynth.com/) (Sc) synthesiser.

Block editors are a family of visual programming systems that use interlocking graphical blocks to represent the elements of a program.

For instance there are blocks to represent variable assignment and reference,
procedure definition and application,
and logical and mathematical operators.

_BlkSc3_ also has blocks for the standard components of a synthesiser:
oscillators, noise generators, filters, envelopes, panners, signal analysers and control signal generators.

To make sound _BlkSc3_ sends messages to the synthesiser, which is started by pressing the _Begin_ button.
The synthesiser status is shown in the adjacent box (the _status area_) as the number of sounding _unit generators_.

To listen to a program press the _Play_ button, to stop listening press _Reset_.
This program generates a simple texture by summing together overlapping instances of an enveloped phase modulation oscillator pair with randomly generated parameters.
