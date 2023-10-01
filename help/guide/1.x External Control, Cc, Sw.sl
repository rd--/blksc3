(* External Control, Cc, Sw *)
var f = Lag(Cc(1), 0.2) * 110 + 110;
var a = Lag(Cc(2), 0.2) * 0.1;
SinOsc(f, 0) * a

(* ---- notes.md ---- *)
## External Control, Cc, Sw

Many music synthesisers, including _SuperCollider_, have two distinct operating rates, audio rate and control rate,
often set to 48,000 _hz_ and 1,000 _hz_.

There are two ways the _SuperCollider_ synthesiser receives control signals from external sources.
One is directly from a special purpose unit generator, such as ☟𝑥 (_MouseX_).
The other is indirectly by reading from a control bus.

Control buses are integer indexed slots that mediate between the audio signal processor and the external world.
Control buses are set by sending a _/c_set_ message to the synthesiser, and read using a unit generator.

Values at control buses have no fixed meaning.
A control system consists simply of an agreement about the meaning of signals at particular control buses.
Two such systems are:

1. _Cc(n)_ reads from continuous controller _n_ with the implicit range _(0, 1)_.
2. _Sw(n)_ reads from switch _n_ that is either _closed_ (0) or _open_ (1).

Any controller can be used with these systems by configuring it to send appropriate _/c_set_ messages to the synthesiser.
