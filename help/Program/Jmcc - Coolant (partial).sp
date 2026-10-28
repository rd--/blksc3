/* coolant (jmcc) */
let o = onePole(brownNoise() * 0.002, 0.95);
{ ringz(o, rand(40, 2040), 1) * 0.2 } !^ 10

# Notes

Partial, individual resonator (`ringz`) blocks.

This form (inividual resonators and not a fixed resonator bank) can be made into a _graph_ texture.
