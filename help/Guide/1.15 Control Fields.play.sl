/* Control Fields */
SinOsc([
	NamedControl('Name.1', 440),
	NamedControl('Name.2', 443)
], 0) * NamedControl('Name.3', 0.1)

# Control Fields

𝒞 (_ControlField_) is a _named control_ for which a unique name is assigned by the system.
When the text field of 𝒞 is edited, the new value is sent to the synthesiser.

𝒞 is both a part of the definition of the program and,
while the program is running,
an interactive controller for the synthesiser.
