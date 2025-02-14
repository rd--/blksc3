/* Deepsea (Jr) */
let amp = 0.1;
let variation = 0.9;
let tr = Dust(0.25);
let pan = TRand(-1, 1, tr);
let n = TRand(7, 46, tr);
let dt1 = 25.0 + TRand(-1.7, 1.7, tr);
let dt2 = dt1 + LfNoise2(2) * variation * 0.001;
let freq = 901 + TRand(0, 65, tr);
let t = Impulse(dt2.Reciprocal, 0) * 100;
let count = PulseCount(t, tr);
let mul = count < n;
let u1 = Bpf(mul * t, freq, 0.1);
let u2 = Bpf(u1, freq * (count % LinLin(LfNoise1(1), -1, 1, 2, 20) + 1), 0.2);
let o = Pan2(u2, pan, amp * 10);
let f1 = Bpf(o * 5, 700, 0.1);
let f2 = CombL(Lpf(f1 * LfNoise1(0.1).Max(0), 800), 0.5, 0.5, 1) + f1.reverse;
let f3 = f2;
5.timesRepeat {
	f3 := AllpassC(f3, 0.18, { Rand(0, 0.06) } ! 2 + 0.06, 8)
};
Lpf(f2 + f3, 400) + (LfNoise1(0.2) * f2)
