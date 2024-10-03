{- Impulse ; Voicer -}
Splay2(
	Voicer(
		1,
		16,
		{ :e |
			Impulse(
				MulAdd(e.x, 48, 12).MidiCps,
				0
			) * e.w * e.z
		}
	)
)
