/* pulseCount.1 */
sinOsc(pulseCount(impulse(10, 0), impulse(0.4, 0)) * 200, 0) * 0.05

# pulseCount

⤴# (_pulseCount_) counts the number of transitions received at the ⤴ (_trigger_) input.

The counter is reset whenever a trigger is received at the ↻ (_reset_) input.

Here the counter is incremented ten times per second, and reset every two and a half seconds.
