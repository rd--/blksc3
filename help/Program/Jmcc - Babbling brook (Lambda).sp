/* Babbling Brook (Jmcc) #Sc3 */
let f = { :x |
	{
		rhpf(
			onePole(brownNoise(), 0.99),
			lpf(brownNoise(), x[1]) * x[2] + x[3],
			0.03
		) * 0.1
	} ! 2
};
[
	14 400 500 0.06;
	20 800 1000 0.10
].collect(f/1).transpose.sum
