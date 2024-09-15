{- External Synthesiser -}
Formlet(
	Blip(SinOsc(5, 0) * 20 + 300, 1000) * 0.1,
	LinExp(LfNoise2([0.5, 2.5]), -1, 1, [700, 1300], [2000, 100]),
	0.005,
	LinExp(LfNoise2([3, 9]), -1, 1, 0.01, 0.2)
)

{- ---- notes.md ---- -}
# External Synthesiser

Ordinarily an internal copy of the SuperCollider synthesiser is used.
The _𝓔_ button selects the _external synthesiser_.
This selection must be made before a connection is established using _Begin_.

_BlkSc3_ cannot start an external synthesiser, the synthesiser must be started separately.

At present the Sc synthesiser does not directly implement the
[WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) protocol
and a bridge must be used,
c.f. the _ws-bridge_ program at [jssc3](https://rohandrape.net/?t=jssc3).

This program uses low frequency noise to modulate the frequency and
decay-time inputs of a formant filter.
