(* Multiply and Add *)
[PinkNoise() * [0.05, 0.05], SinOsc(LfNoise2([0.5, 0.5]) * 110 + 110, 0) * 0.1].sum

(* ---- notes.md ---- *)
# Multiply and Add

All blocks with an _output connector_ have × (_multiplier_) and + (_adder_) inputs.
These inputs, initialised to one and zero respectively, allow adjusting the scale and bias of blocks without introducing an extra block.
These adjustments are made to the block after it is defined.
This means that, in constrast to the SuperCollider language forms,
the × and + inputs don't form part of the multiple channel expansion protocol for the block.
In SuperCollider the expression

> _PinkNoise([0.1, 0.1])_

describes a graph with two PinkNoise generators.
The left and right channels are decorrelated.
The equivalent block program has only one _PinkNoise_ generator.
This distinction is most noticeable for noise generators that have no direct inputs,
and that must therefore be written as

> _{PinkNoise()}.dup(2) * 0.1_

␊⍰₂ (_LFNoise2_), which has a _frequency_ (ν) input, can be duplicated by passing an array of equal values.

This program generates quiet correlated stereo pink noise mixed with two sine oscillators following distinct time varying frequencies.
