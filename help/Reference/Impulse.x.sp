/* impulse ; Voicer */
splay2(
	voicer(
		1,
		16,
		{ :e |
			impulse(
				e.x.*+(48, 12).midiCps,
				0
			) * e.w * e.z
		}
	)
)
