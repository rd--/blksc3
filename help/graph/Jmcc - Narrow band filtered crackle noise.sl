{- Narrow band filtered crackle noise (Jmcc) #2 -}
let rf1 = Rand(0, 2000) + 80;
let rf2 = Rand(-0.2, 0.2) * rf1 + rf1;
let rf = XLine(rf1, rf2, 9);
let c = Crackle(1.97 + Rand(0, 0.03));
Pan2(
	Resonz(c, rf, 0.2),
	Rand(-1, 1),
	0.15
)
