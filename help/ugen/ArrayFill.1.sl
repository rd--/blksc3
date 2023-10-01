(* ArrayFill ; list of COUNT elements ; each place has the result of evaluating PROC *)
Splay2({ SinOsc(Rand(36, 72).MidiCps, 0) * Rand(0.05, 0.1) } ! 12)

(* ---- notes.md ---- *)
The ! (_ArrayFill_) block creates an array of _n_ places by evaluating a no-argument procedure _n_ times.

In this program 12 quiet sine oscillators (∿), each with a randomly selected (⚁) frequency (ν) and amplitude (×), are equally spaced across the stereo spectrum (◠).

Each time the program is run a different frequency set it generated.
