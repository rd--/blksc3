{- LocalIn -}
var index = 5;
var fb = [10, 5];
var pan = 0;
var amp = 0.1;
var freq = MouseY(20, 4000, 1, 0.2);
var mratio = MouseX(1 / 8, 8, 1, 0.2);
var in = LocalIn(2, 0);
var mod = SinOsc(freq * mratio, 0) * freq * mratio * index;
var car = SinOsc([freq * mod * in.second, freq + mod + in.first], 0);
Pan2(LeakDc(car.sum, 0.995), pan, amp) <! LocalOut(car * fb)

{- ---- notes.md ---- -}
# LocalIn

Stereo cross channel feedback modulation.

