/* data space (jmcc) #2 ; graph rewrite */
overlapTexture({ :tr |
    let dt = tRand(0, 0.25, tr) + 0.1;
    let osc = { :p |
        let n = p.first;
        let m = p.second;
        let e = lfPulse(tRand(0, m, tr), 0, tRand(0, 1, tr)) * tRand(0, 8000, tr) + tRand(0, 2000, tr);
        lfPulse(tRand(0, n, tr), 0, tRand(0, 1, tr)) * e
    };
    let freq = osc([200, 40]) + osc([20, 4]) + osc([20, 4]);
    combL(pan2(lfPulse(freq, 0, 0.5), lfNoise0(tRand(0, 3, tr)) * 0.8, 0.04), dt, dt, 3)
}, 6, 1, 4).sum
