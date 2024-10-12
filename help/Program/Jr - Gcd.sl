{- Generative landscape (Jr) ; http://www.listarc.bham.ac.uk/lists/sc-users/msg68991.html -}
let x = MouseX(-10, 10, 0, 0.1);
let y = MouseY(0, 5, 0, 0.1);
let i = (LfSaw(0.062, 0) * 10) + (y * [0 .. 8]);
let d = i.Frac;
let a = ModDif(d, 0.5, 1).Neg + 0.8;
let z1 = i.Gcd(x) + d;
let z2 = i.Lcm(x) + d;
let freq = [z1, z2].transposed.Abs + 1 * 120;
let c = AmpComp(freq, 261.625, 1 / 3) * a;
(SinOsc(freq, 0) * c).Mix * 0.01
