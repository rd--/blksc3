/* localIn */
let index = 5;
let fb = [10, 5];
let pan = 0;
let amp = 0.1;
let freq = mouseY(20, 4000, 1, 0.2);
let mratio = mouseX(1 / 8, 8, 1, 0.2);
let in = localIn(2, 0);
let mod = sinOsc(freq * mratio, 0) * freq * mratio * index;
let car = sinOsc([freq * mod * in.second, freq + mod + in.first], 0);
pan2(leakDc(car.sum, 0.995), pan, amp) <! localOut(car * fb)

# localIn

Stereo cross channel feedback modulation.

