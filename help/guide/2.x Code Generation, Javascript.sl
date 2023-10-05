(* Code Generation, Javascript *)
var a = SinOsc(1,0).abs * 0.1;
SinOsc(440, 0) * a

(* ---- notes.md ---- *)
# Code Generation, Javascript

Blocks can print themselves using _.js_ notation.

The three block fragment assigned to the variable _a_ (×, |, ∿) prints as:

> _Mul(Abs(SinOsc(1, 0)), 0.1)_

[jssc3](https://rd.slavepianos.org/t/jssc3) is a
[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) library for interacting with the
[SuperCollider](http://audiosynth.com/) real-time synthesiser.

JavaScript is a dynamic language in the
[Scheme](https://www.scheme.com/tspl4/) family.
A _.js_ interpreter is included as a part of most web browsers.

[WebAssembly](https://webassembly.org/) is a low-level assembly-like language with a compact binary format.
Web assembly programs can be embedded as a process in an [Html](https://developer.mozilla.org/en-US/docs/Web/HTML) page.

_scsynth_ can be compiled to web assembly and run in an _.html_ page.
Open sound control packets can be sent from the _.js_ interpreter of the web browser to the synthesiser.
In this schema the _.js_ interpreter performs the functions _sclang_ would in ordinary use.

jssc3 contains functions to define sound processing programs as graphs of _unit generators_,
to compile these graphs into the format understood by scsynth,
and to send these compiled codes to the synthesiser.
