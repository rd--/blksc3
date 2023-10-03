The language generator is for _.sl/.stc_.

Unit generators are written _SinOsc(440, 0)_.

Unary operators are written _p.sqrt_, not _sqrt(p)_.

Binary operators are written either _p + q_ or _p.max(q)_, not _plus(p, q)_.

Functions are written _{ :x | x * x }_.

Initially the implemetation is using the Blockly.JavaScript generator.

Operations that have variants for Websocket and Wasm forms should have equal names.
