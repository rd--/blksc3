/* PV_RandComb.1 */
let b = bufAlloc(1, 2048);
let x = mouseX(100, 12000, 0, 0.1);
let y = mouseY(0.01, 0.15, 0, 0.1);
let t = impulse((lfNoise0([3, 3.25]) * 16) + 18, 0);
let e = decay2(t, 0.01, tRand(0.005, y, t));
let o = bpf(whiteNoise() * e, tRand(10, x, t), tRand(0, 1, t));
let p = pvRandComb(fft(b, o, 0.5, 0, 1, 0), tExpRand(0.15, 1, t), t);
(o * 0.05) + ifft(p, 0, 0)

# pvRandComb

This program make a simple clattering sound by bandpass filtering white noise and then processing it in the frequency domain to randomly delete frequency regions.
