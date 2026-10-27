/* Impulse ; Voicer */
Splay2(
	Voicer(
		1,
		16,
		{ :e |
			Impulse(
				e.x.*+(48, 12).midiCps,
				0
			) * e.w * e.z
		}
	)
)
