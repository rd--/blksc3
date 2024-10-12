{- Keyboard Shortcuts (Keybindings, Access Keys) -}
{
	Rhpf(
		OnePole(BrownNoise(), 0.99),
		Lpf(BrownNoise(), 14) * 400 + 500,
		0.03
	) * 0.06
} ! 2

{- ---- notes.md ---- -}
# Keyboard Shortcuts

_Keyboard shortcuts_ (also called _keybindings_ or _access keys_) perform actions that would otherwise require a mouse.
The _prefix_ keys are
[system specific](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey).
On MacOS try _'Control+Option'_, else try _'Alt'_ or _'Alt+Shift'_.

The table below lists the assigned keys, in alphabetical order, and the actions they perform.

- , → _Play_ (≡ _comma key_)
- . → _Reset_ (≡ _full stop key_)
- - → _Replace_ (≡ _minus key_)
- = → _Fit_ (≡ _equal sign key_)
- _c_ → _Copy_
- _g_ → _Guide Menu_
- _h_ → _Help Menu_
- _i_ → _Draw_
- _k_ → _Clear_
- _l_ → _Load_
- _o_ → _Cleanup_
- _p_ → _Programs Menu_
- _s_ → _Layout Menu_
- _w_ → _Websocket_

Some keys aren't used because they don't work in some contexts,
␣ (_space_) for _Play_, _d_ for _Draw_.

This program passes noise signals through resonant filters,
where the frequency of the filter is modulated by filtered noise.
