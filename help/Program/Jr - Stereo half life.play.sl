/* Stereo half-life (Jrhb) */
let tHalf = 3.92;
let nAtoms = 100000;
let n = (nAtoms - PulseCount(LocalIn(2, 0), 0)).Max(0);
let activity = Dust(n * 2.log / tHalf);
activity <! LocalOut(activity) * 0.1

/* ---- notes.md ---- */
3.92 is the half life of Radon-219, discovered 1904 by Giesel and Debierne.

100,000 atoms is ca. 3.6e-14 mg.
