;; Pitch
var input = AudioIn([1, 2]).sum;
var freq = Pitch(input, 440, 60, 4000, 100, 16, 7, 0.02, 0.5, 1, 0).nth(1);
var s = VarSaw(freq * [0.5, 1, 2], 0, LfNoise1(0.3) * 0.1 + 0.1) * 0.1;
6.timesRepeat({
    s := AllpassC(s, 0.040, { Rand(0, 0.04) }.dup(2), 2)
});
s

;; ---- notes.md
# Pitch

Autocorrelation pitch follower

> _Pitch(in, initFreq, minFreq, maxFreq, execFreq, maxBinsPerOctave, median, ampThreshold, peakThreshold, downSample)_

Returns two signals, _freq_ and _hasFreq_.

This is a better pitch follower than _ZeroCrossing_, but more costly of CPU. For most purposes the default settings can be used and only in needs to be supplied. Pitch returns two values (via an Array of OutputProxys, see the OutputProxy help file), a freq which is the pitch estimate and hasFreq, which tells whether a pitch was found. Some vowels are still problematic, for instance a wide open mouth sound somewhere between a low pitched short 'a' sound as in 'sat', and long 'i' sound as in 'fire', contains enough overtone energy to confuse the algorithm.

This program tracks audio input, **use heaphones**.
