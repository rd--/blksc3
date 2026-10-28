/* Babbling Brook (Jmcc) #Sc3 */
let p = {
	rhpf(
		onePole(brownNoise(), 0.99),
		lpf(brownNoise(), 14) * 400 + 500,
		0.03
	) * 0.06
} ! 2;
let q = {
	rhpf(
		onePole(brownNoise(), 0.99),
		lpf(brownNoise(), 20) * 800 + 1000,
		0.01
	) * 0.10
} ! 2;
p + q
