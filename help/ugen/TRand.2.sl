(* TRand.2 *)
var tr = Impulse([0.25, 0.75], 0);
SinOsc(Lag(TRand(110, 440, tr), 0.05), 0) * Lag(TRand(0.01, 0.1, tr), 0.05)
