{- Control Fields -}
SinOsc([
	NamedControl('Name.1', 440),
	NamedControl('Name.2', 443)
], 0) * NamedControl('Name.3', 0.1)

{- ---- notes.md ---- -}
# Control Fields

A _Control Field_ (𝒞) is a _Named Control_ with an implicit name assigned by the system.

When a control field is edited, the new value is sent to the synthesiser.
