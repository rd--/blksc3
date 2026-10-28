/* localIn */
var index = 5;
var fb = [10, 5];
var pan = 0;
var amp = 0.1;
var freq = mouseY(20, 4000, 1, 0.2);
var mratio = mouseX(1 / 8, 8, 1, 0.2);
var in = localIn(2, 0);
var mod = sinOsc(freq * mratio, 0) * freq * mratio * index;
var car = sinOsc([freq * mod * in.second, freq + mod + in.first], 0);
pan2(leakDc(car.sum, 0.995), pan, amp) <! localOut(car * fb)

# localIn

Stereo cross channel feedback modulation.

