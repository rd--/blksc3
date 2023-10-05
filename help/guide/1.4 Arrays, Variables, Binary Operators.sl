(* Arrays, Variables, Binary Operators *)
var o = SinOsc(440, 0);
var a = [o, o];
a * 0.1

(* ---- notes.md ---- *)
# Arrays, Variables, Binary Operators

≔ is the _variable assignment_ block.
It is used to give a name to a part of a program.
≔ is located in the _Var_ category of the toolbox
which also contains the _Create variable_ instruction used to declare variables,
and the _variable reference_ block used to read the value of a variable.

The ≔ and variable reference blocks each have a _menu_ field that lists the declared variables,
and allows for variables to be _renamed_ and _deleted_.

⟦⟧ is the _array_ constructor block, located in the _Array_ category of the toolbox.
⟦⟧ has a _mutator_ (drawn as ⚙) that is used to change its shape by creating or deleting input connectors.

This program assigns a ∿ block to the variable _o_, and an ⟦⟧ block to the variable _a_.
_a_ consists of two references to the variable _o_, making a stereo signal from a mono source.

The output of the program is a × (_Binary Operator_) block, located in the _Math_ category of the toolbox.
The operator is selected from a menu.
In this program × is used to scale the amplitude of the array of oscillators.

This program generates a quiet sine tone at 440 _hz_ in both the left and right channels.
