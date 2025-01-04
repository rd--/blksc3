/* Spectral harp ; https://w2.mat.ucsb.edu/l.putnam/sc3one/index.html #6 ; (Edit) */
let p = SinOsc(1760, 0) * 0.01;
p + CombC(p, 0.1, LfNoise1(0.5) * 0.1 + 0.1, [-10, 10])

# Notes

The _decaytime_  input at `CombC` is the time for the echoes to decay by 60 decibels.

The SuperCollider help file explains:

> If this time is negative then the feedback coefficient will be negative, thus emphasizing only odd harmonics at an octave lower.

In this variant `CombC` has alternate polarities in the left and right channels.
