{- External Control, Mouse -}
let x = MouseX(20, 22000, 0, [0.005, 0.025]);
let y = MouseY(20, 22000, 0, [0.005, 0.075]);
({
  let a = SinOsc(x + LfNoise0([5, 9]), 0);
  let b = SinOsc(y, 0);
  a * b
} ! 3).sum * 0.15

{- ---- notes.md ---- -}
# External Control, Mouse

SuperCollider includes three unit generators to read the mouse state as a control signal, _MouseX_, _MouseY_ and _MouseButton_.

These unit generators do not work in the web assembly variant of the SuperCollider synthesiser.
Instead the mouse controls are implemented in terms of _Pointer_ pseudo unit-generators.

The Pointer input area is restricted to the _blksc3_ page, not the screen as a whole, and the update rate is slower than in the ordinary case.
In addition the pointer does not update unless the _blksc3_ page has focus.

The Pointer update rate is a function of the audio block size set when the synthesiser is started.

<!--
The default value is _2048_ and there is a _Block Size_ entry  in the ☰ menu to set this value.
-->

Smaller block sizes result in better latency for external controls, including the mouse.
However the synthesiser is more susceptible to interruption from other tasks, including _blksc3_'s own editing operations.

In this program three slightly detuned ring modulation oscillator pairs have frequency inputs connected to the mouse location.
