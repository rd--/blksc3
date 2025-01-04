/* PulseCount.1 */
SinOsc(PulseCount(Impulse(10, 0), Impulse(0.4, 0)) * 200, 0) * 0.05

# PulseCount

⤴# (_PulseCount_) counts the number of transitions received at the ⤴ (_trigger_) input.

The counter is reset whenever a trigger is received at the ↻ (_reset_) input.

Here the counter is incremented ten times per second, and reset every two and a half seconds.
