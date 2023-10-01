(* spectral harp ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #6 *)
var f0 = #[9000, 7000, 6000, 5000, 4000];
var f1 = #[3, 2, 1, 0.75, 0.5];
1.to(f0.size).collect({
    arg index;
    var p = SinOsc(f0.nth(index), 0) * #[0.01, 0.01];
    var d = index - 1 * 3;
    DelayN(p + CombC(p, 0.1, LFNoise1(f1.nth(index)) * 0.1 + 0.1, -10), d, d)
}).sum

(* ---- *)
Summed instances of same structure with entries delayed in accord with decreasing _SinOsc_ frequency.
