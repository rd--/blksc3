(* Block Names, Parameters, Messages *)
SinOsc(SinOsc(1 / [7, 9], 0) * [55, 57] + 110, 0) * SinOsc(1 / [5, 7], 0) * 0.1

(* ---- notes.md ---- *)
# Block Names, Parameters, Messages

_Blocks_ and _parameters_ all have _names_,
which are used as identifiers when programs are stored in _.xml_ files,
and when they are sent to the synthesiser as _.sl/.stc_ expressions.

Blocks also define a _message_, which is used to construct the text displayed in the block drawing.

This message is distinct from both the block name and from the parameter names.

∿ is the symbol used in messages to indicate the block name _SinOsc_,
and ν is the symbol used to indicate the parameter name _freq_.

To see the names of blocks and their parameters hover the mouse over a block and a small help message will appear:

> _SinOsc(freq, phase): Interpolating sine wavetable oscillator._

This program generates two quiet sine oscillators,
each with distinct frequency amplitude modulators,
also sine oscillators.
