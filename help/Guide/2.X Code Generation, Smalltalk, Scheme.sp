/* Code Generation, Smalltalk, Scheme */
let f = sinOsc([0.1, 0.3], 0).abs * 150 + 75;
let a = sinOsc([0.5, 0.7], 0).abs * 0.1;
sinOsc(f, 0).tanh * a

# Code Generation, Smalltalk, Scheme

Blocks can print themselves in _.stc_ form.
_.stc_ is a _C_-like notation for Smalltalk.

> _sinOsc(f, 0).tanh * a_

It is translated to Smalltalk notation (_.st_) as:

> _((sinOsc apply: {f . 0}) tanh) * a_

The _apply:_ method is defined to _perform:withArguments:_ the _primaryFactoryMethod_ of a class.
For _sinOsc_ this method is _#freq:iphase:_, so the above has the meaning:

> _(sinOsc freq: f phase: 0) tanh * 0.1_

The _.stc_ notation can also be translated into Scheme (_.scm_) notation, as:

> _/* (Tanh (sinOsc f 0)) a)_

During translation a lookup table can be consulted to rewrite this as:

> _(Mul (Tanh (sinOsc f 0)) a)_

This program is of two slightly distorted sine oscillators, each frequency (_f_) and amplitude (_a_) modulated.
