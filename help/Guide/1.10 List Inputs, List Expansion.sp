/* List Inputs, List Expansion */
let m = [0 2 3 5 7 9] + 48;
let k = m.size + 1;
let x = mouseX(0, k, 0, 0.2);
let y = mouseY(0, k, 0, 0.2);
sinOsc(selectT([x, y], m).midiCps, 0) * 0.1

# List Inputs, List Expansion

When a signal block receives a list as an input there are two distinct behaviors.

In one case the block answers a list of signals.
_sinOsc([440, 441], 0)_ has the same meaning as _[sinOsc(440, 0), sinOsc(441, 0)]_.
This behaviour is called _list expansion_, and is the ordinary rule for SuperCollider unit generators.

In the other case the block expects a list as an input and processes it directly.
☜ (_Select_) uses ☞ (_which_) to index into ⟦⟧ (_list_).
The list input allows _Select_ to switch between any number of signals.
This behaviour is called _list processing_, and is the exception for SuperCollider unit generators.
In SuperCollider this rule is specific to particular inputs, _Select_ is still subject to list expansion at _which_.

In this program there are two sine oscillators,
in both cases frequencies are selected from the list _m_,
in one case indexed by ☟𝑥 in the other by ☟𝑦.
