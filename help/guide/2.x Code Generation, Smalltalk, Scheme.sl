{- Code Generation, Smalltalk, Scheme -}
let f = SinOsc([0.1, 0.3], 0).Abs * 150 + 75;
let a = SinOsc([0.5, 0.7], 0).Abs * 0.1;
SinOsc(f, 0).Tanh * a

{- ---- notes.md ---- -}
# Code Generation, Smalltalk, Scheme

Blocks can print themselves in _.stc_ form.
_.stc_ is a _C_-like notation for Smalltalk.

> _SinOsc(f, 0).Tanh * a_

It is translated to Smalltalk notation (_.st_) as:

> _((SinOsc apply: {f . 0}) tanh) * a_

The _apply:_ method is defined to _perform:withArguments:_ the _primaryFactoryMethod_ of a class.
For _SinOsc_ this method is _#freq:iphase:_, so the above has the meaning:

> _(SinOsc freq: f phase: 0) tanh * 0.1_

The _.stc_ notation can also be translated into Scheme (_.scm_) notation, as:

> _{- (Tanh (SinOsc f 0)) a)_

During translation a lookup table can be consulted to rewrite this as:

> _(Mul (Tanh (SinOsc f 0)) a)_

This program is of two slightly distorted sine oscillators, each frequency (_f_) and amplitude (_a_) modulated.
