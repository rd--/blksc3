{- narrow band filtered crackle noise (jmcc) #2 -}
OverlapTexture({
    arg tr;
    var rf1 = TRand(0, 2000, tr) + 80;
    var rf2 = rf1 + (TRand(-0.2, 0.2, tr) * rf1);
    var rf = TxLine(rf1, rf2, 9, tr);
    var c = Crackle(1.97 + TRand(0, 0.03, tr));
    Pan2(Resonz(c, rf, 0.2), TRand(-1, 1, tr), 0.15)
}, 2, 5, 4)
