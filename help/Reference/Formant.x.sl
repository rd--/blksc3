/* Formant ; Voicer */
Splay2(
	Voicer(
		1,
		16,
		{ :e |
			Formant(
				e.p.UnitCps,
				e.y.UnitCps,
				880
			) * e.w * e.z
		}
	)
)
