/* Narrow band filtered crackle noise (Jmcc) #2 */
let rf1 = rand(0, 2000) + 80;
let rf2 = rand(-0.2, 0.2) * rf1 + rf1;
let rf = xLine(rf1, rf2, 9);
let c = crackle(1.97 + rand(0, 0.03));
pan2(
	resonz(c, rf, 0.2),
	rand(-1, 1),
	0.15
)
