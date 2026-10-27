/* Generative landscape (Jr) ; http://www.listarc.bham.ac.uk/lists/sc-users/msg68991.html */
let x = MouseX(-10, 10, 0, 0.1);
let y = MouseY(0, 5, 0, 0.1);
let i = (LfSaw(0.062, 0) * 10) + (y * [0 .. 8]);
let d = i.fractionalPart;
let a = modularDistance(d, 0.5, 1).negate + 0.8;
let z1 = i.signedGcd(x) + d;
let z2 = i.signedLcm(x) + d;
let freq = [z1, z2].transpose.abs + 1 * 120;
let c = AmpComp(freq, 261.625, 1 / 3) * a;
(SinOsc(freq, 0) * c).Mix * 0.01
