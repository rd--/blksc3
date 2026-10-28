/* Generative landscape (Jr) ; http://www.listarc.bham.ac.uk/lists/sc-users/msg68991.html */
let x = mouseX(-10, 10, 0, 0.1);
let y = mouseY(0, 5, 0, 0.1);
let i = (lfSaw(0.062, 0) * 10) + (y * [0 .. 8]);
let d = i.fractionalPart;
let a = modularDistance(d, 0.5, 1).negate + 0.8;
let z1 = i.signedGcd(x) + d;
let z2 = i.signedLcm(x) + d;
let freq = [z1, z2].transpose.abs + 1 * 120;
let c = ampComp(freq, 261.625, 1 / 3) * a;
(sinOsc(freq, 0) * c).mix * 0.01
