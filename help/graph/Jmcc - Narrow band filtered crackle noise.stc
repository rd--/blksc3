// narrow band filtered crackle noise (jmcc) #2
var rf1 = Rand(0, 2000) + 80;
var rf2 = rf1 + (Rand(-0.2, 0.2) * rf1);
var rf = XLn(rf1, rf2, 9);
var c = Crackle(1.97 + Rand(0, 0.03));
Pan2(Resonz(c, rf, 0.2), Rand(-1, 1), 0.15)
