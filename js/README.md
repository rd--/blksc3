The language generator is for Spl.

Unit generators are written _SinOsc(440, 0)_.

Unary operators are written _p.abs_, not _abs(p)_.

Binary operators are written either _p + q_ or _p.max(q)_, not _plusSign(p, q)_.

Functions are written _{ :x | x * x }_.

Initially the implementation is using the Blockly.JavaScript generator.

Operations that have variants for Websocket and Wasm forms should have equal names.
