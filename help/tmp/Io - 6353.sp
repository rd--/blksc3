/* http://scsynth.org/t/6353 ; io ; http://ingoogni.nl/ */
let shuheiKawachi = { :x :y :a :b |
	[
		(x.Cos * y.Cos),
		(((a.Sqrt * x - y) / b).Cos * ((x + (a.Sqrt * y)) / b).Cos),
		(((a.Sqrt * x + y) / b).Cos * ((x - (a.Sqrt * y * y)) / b).Cos)
	].sum
};
let segments = 50;
let xMajor = 0;
let yMajor = 10;
let rMajor = 30.1;
let rMinor = 0.1;
let circlefreq = 0.0001;
let xMinor = xMajor + (rMajor * sinOsc(circlefreq, 0));
let yMinor = yMajor + (rMajor * sinOsc(circlefreq, pi / 2));
let freqList = ({ 50.expRand(1500) } ! segments).sorted;
let oscList = (1 .. segments).collect { :index |
	let x = xMinor + (rMinor * (index * 2 * pi / segments).Sin);
	let y = yMinor + (rMinor * (index * 2 * pi / segments).Cos);
	let grey = shuheiKawachi(x, y, 2 * pi, 0.5);
	let amp = lag(Wrap(grey, 0, 1), 0.01) / segments;
	sinOsc(freqList[index], 0) * amp
};
oscList.splay * 5
