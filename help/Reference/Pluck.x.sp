/* pluck.1 ; event control */
Voicer(1, 16, { :e |
    let dm = 1 / 220;
    let dl = (e.x.negated * 0.9 + 1) * dm;
    let sig = pluck(whiteNoise() * e.z, e.w, dm, dl, 10, e.y / 3);
    eqPan2(sig, e.i * 2 - 1)
}).sum
