/* formant ; Voicer */
splay2(
	Voicer(
		1,
		16,
		{ :e |
			formant(
				e.p.UnitCps,
				e.y.UnitCps,
				880
			) * e.w * e.z
		}
	)
)
