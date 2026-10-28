/* cc ; continuous controller */
pan2(blip(lag(cc(1), 0.1) * 110 + 110, lag(cc(2), 0.2) * 9 + 1) * lag(cc(3), 0.3) * 0.1, lag(cc(4), 0.4) * 2 - 1, 1)

# cc

_cc_ reads input from external continuous controllers.

Continuous controllers are implicitly in the range _(0, 1)_,
in the same sense that audio signals are implicity in the range _(-1, 1)_.

_cc_ is used to read input signals from dials, rotary encoders, faders, and similar input devices.

Since there are very many different kinds of control interfaces _cc_ simply identifies each control using an integer.

_cc(1)_ is the first control, _cc(2)_ the second, and so on.

In this program
_cc(1)_ controls pitch,
_cc(2)_ controls the number of harmonics,
_cc(3)_ controls amplitude and
_cc(4)_ controls stereo location.

_blkSc_ has a _cc_ section that provides simple _Ui_ sliders to send the appropriate control messages to the synthesiser.
