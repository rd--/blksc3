/* Babbling Brook (Jmcc) #Sc3 */
let f = { :x |
	{
		Rhpf(
			OnePole(BrownNoise(), 0.99),
			Lpf(BrownNoise(), x[1]) * x[2] + x[3],
			0.03
		) * [4]
	} ! 2
};
[
	14 400 500 0.06;
	20 800 1000 0.10
].collect(f:/1).transposed.Sum
