/* Uplink (Jmcc) #2 ; texture=overlap,4,1,5,inf */
let osc = {
  lfPulse(
	  rand(0, 20),
	  0,
	  rand(0, 1)
  ) * lfPulse(
	  rand(0, 4),
	  0,
	  rand(0, 1)
  ) * rand(0, 8000) + rand(0, 2000)
};
pan2(
	lfPulse(osc:/0 !+ 2, 0, 0.5) * 0.04,
	rand(0, 0.8),
	1
)
