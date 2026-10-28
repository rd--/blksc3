/* 4.X - Control Fields */
sinOsc(
	[
		namedControl('α', 440),
		namedControl('β', 443)
	],
	0
) * namedControl('γ', 0.1)

# Notes

𝒞 is a _control field_.
When the text of 𝒞 is edited,
the edited value is sent to the synthesiser.

𝒞 is both a part of the definition of the program and,
while the program is running,
an interactive controller for the synthesiser.

𝒞 does not have a direct textual analogue in Sᴘʟ.
