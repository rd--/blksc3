/* formant ; Voicer */
splay2(
	voicer(
		1,
		16,
		{ :e |
			formant(
				e.p.unitCps,
				e.y.unitCps,
				880
			) * e.w * e.z
		}
	)
)
