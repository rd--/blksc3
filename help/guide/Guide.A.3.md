_Set To_ is the _Variable Assignment_ block.

It is located in the _Var_ category of the ToolBox, which also contains the _Create Variable_ instruction used to declare variables, and the _Read From_ block used to read the value of a variable.

The _Set To_ and _Read From_ blocks each have a _Menu_ field that lists the declared variables.

_Create List With_ is the _Array_ constructor block, located in the _Array_ category of the ToolBox.

This block has a _Mutator_ that is used to change it's shape by creating or deleting Input connectors.

This program assigns a _SinOsc_ block to the variable _osc_, and an _Array_ block to the variable _array_.

_array_ consists of two copies of the variable _osc_, making a stereo signal from a mono source.

The output of the program is a _Binary Operator_ block, located in the _Math_ category of the ToolBox.

The operator is selected from a menu.  Here _×_ is used to scale the amplitude of the array of oscillators.


