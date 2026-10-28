/* Police state (Jmcc) #2 */
let node = {
  let f = sinOsc(
	  rand(0.02, 0.12),
	  rand(0, 2 * pi)
  ) * rand(0, 600) + 1000 + rand(-300, 300);
  pan2(
	  sinOsc(f, 0) * lfNoise2(100 + rand(-20, 20)) * 0.1,
	  rand(-1, 1),
	  1
  )
};
let e = lfNoise2(
	lfNoise2([0.4, 0.4]) * 90 + 620
) * (
	lfNoise2([0.3, 0.3]) * 0.15 + 0.18
);
combL(node:/0 !+ 4 + e, 0.3, 0.3, 3) * 0.2
