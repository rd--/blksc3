{- Code Generation, SuperCollider -}
var a = SinOsc(1,0).abs * 0.1;
SinOsc(440, 0) * a

{- ---- notes.md ---- -}
# Code Generation, SuperCollider

Blocks can print themselves using _.sl/.stc_ notation.
This notation is a close relative of the SuperCollider language notation (_.sc_).

The three block fragment assigned to the variable _a_ (×, |, ∿) prints as:

> _SinOsc(1, 0).abs * 0.1_

In SuperCollider this has the meaning:

> _SinOsc.new(1, 0).abs * 0.1_

In SuperCollider the _new_ method at _SinOsc_ is not defined.
[stsc3](http://rd.slavepianos.org/?t=stsc3) defines _new_ for _SinOsc_ and other _unit generators_.
These definitions call the _ar_ method if it exists, else the _kr_ method, else the _ir_ method.
Therefore _a_ has the meaning:

> _SinOsc.ar(1, 0).abs * 0.1_
