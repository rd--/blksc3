/* References */
let f = LinExp(LfNoise2([1, 3]), -1, 1, [10, 15], [400, 700]);
let s = Blip(f, 1000) * 0.1;
let x = MouseX(0.01, 0.2, 1, 0.2);
let y = MouseY([700, 1300], [2000, 100], 1, 0.2);
Formlet(s, y, 0.005, x)

/* ---- notes.md ---- */
# References

Alan Kay.
_Squeak etoys, children & learning._
Technical report, VPRI, 2005.
[PDF](http://www.vpri.org/pdf/rn2005001_learning.pdf)

John Maloney, Mitchel Resnick, Natalie Rusk, Brian Silverman, and Evelyn Eastmond.
"The scratch programming language and environment."
_ACM Trans. Comput. Educ._, 10(4):1--15, November 2010.
[DOI](https://doi.org/10.1145/1868358.1868363)

James McCartney.
"Supercollider: a new real time synthesis language".
In _Proc. ICMC_, 1996.
[PDF](https://quod.lib.umich.edu/cgi/p/pod/dod-idx/supercollider-a-new-real-time-synthesis-language.pdf?c=icmc;idno=bbp2372.1996.078;format=pdf)

James McCartney.
"Rethinking the computer music language: Supercollider".
_Computer Music Journal_, 26(4):61--68, 2002.
[DOI](https://doi.org/10.1162/014892602320991383)

Randy Pausch, Tommy Burnette, A.C. Capeheart et. al.
"Alice: Rapid prototyping system for virtual reality".
_IEEE Computer Graphics and Applications_, 15:8--11, May 1995.
[HTML](https://www.cs.cmu.edu/~stage3/publications/95/journals/IEEEcomputer/CGandA/paper.html)

Alexander Repenning.
_Agentsheets: A Tool for Building Domain-Oriented Dynamic, Visual Environments._
PhD thesis, University of Colorado at Boulder, USA, 1993.
[PDF](https://home.cs.colorado.edu/~ralex/papers/PDF/Repenning-PhD.pdf)

Mitchel Resnick, John Maloney, Natalie Rusk, Evelyn Eastmond, Karen Brennan et. al.
"Scratch: programming for all."
_Commun. ACM_, 52(11):60--67, November 2009.
[DOI](https://doi.org/10.1145/1592761.1592779) 🔓

John Steinmetz.
"Computers and Squeak as Environments for Learning".
2000.
In M. Guzdial (ed.), _Squeak : Open Personal Computing for Multimedia_.
[PDF](http://coweb.cc.gatech.edu:8888/squeakbook/uploads/steinmetz.pdf)

This program makes voice like sounds controlled by mouse location.
