There are two language generators, for .stc and for .js.

Unit generators are written equally in both as _SinOsc(440, 0)_.

Unary operators are written as _p.sqrt_ in .stc and as _sqrt(p)_ in .js.

Binary operators are written either as _p + q_ or _p.max(q)_ in .stc, and as _add(p, q)_ in .js

Functions are written as _{ arg x; x * x }_ in .stc and as _function(x) { return mul(x, x); }_ in .js.

Initially both languages are generated using the Blockly.JavaScript generator.

Names are equal except in the case of binary operators.
Where .stc has infix operator names such as _+_ .js has functions names such as _add_.

Operations that have variants for Websocket and Wasm forms should have equal names.
Play, Reset.
