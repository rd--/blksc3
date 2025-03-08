/* 4.X - Begin */
{
	Hpf(
		GrayNoise() * 0.1,
		LfNoise2(3) * 6666 + 9999
	)
} ! 2

# Annotation

Ordinarily block programs are sent to an in-process copy of the SuperCollider synthesiser.
The synthesiser can be started by pressing the _Begin_ button.
When the synthesiser is running the _Status Area_ shows the number of sounding _unit generators_,
for this program eleven.
