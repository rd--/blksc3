/* 4.X - Toolbox */
let t = dust([0.7 1.3]);
lfTri(
	tiRand(33, 99, t).midiCps,
	0
) * decay2(t, 1 / 33, 2.3) * 0.1

# Notes

The _Toolbox_ contains instances of the blocks the system knows about, organised into categories.

Blocks are fetched by dragging them out of the toolbox and into the workspace.
