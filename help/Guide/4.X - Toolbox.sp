/* 4.X - Toolbox */
let t = Dust([0.7 1.3]);
LfTri(
	TiRand(33, 99, t).MidiCps,
	0
) * Decay2(t, 1 / 33, 2.3) * 0.1

# Annotation

The _Toolbox_ contains instances of the blocks the system knows about, organised into categories.
Blocks are fetched by dragging them out of the toolbox and into the workspace.
