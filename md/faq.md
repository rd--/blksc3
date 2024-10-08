# Block & Parameter Names

# Comments

There are three kinds of comments: 1. comment blocks, 2. block comments and 3. workspace comments.

_Comment blocks_, written as a left double quote (“), are statement blocks located in the _Meta_ category.
They have a single text field which is printed, as a comment, when the block is evaluated.
By convention synthesiser programs begin with a comment block.

_Block comments_ are texts attached to a block using the _Add comment_ context menu entry.
The text is displayed in a box that can be moved and resized.
Blocks that have comments attached have a question mark (?) button to show or hide the text.
The comment text is printed, as a comment, when the block is evaluated.

_Workspace comments_ are texts that are attached to the workspace using the _Add comment_ context menu entry.
The text is displayed in a box that can be moved and resized, and has a header that allows the comment to be _collapsed_.
The comment text is not printed.

# Expression Blocks

An expression block (also called a function block or a value block) is a block that answers an output value (at an output connector) and accepts one or more inputs (at input fields).
See also _Statement Block_.

# External Inputs

Blocks can be drawn with either _internal_ or _external_ inputs.
There is a context menu item to select between the two drawing modes.

<img src="sw/blksc3/png/SinOsc.external.png" width="81" height="114">

Cf. Internal Inputs.

# Guide

There is an online [Guide](https://rohandrape.net/pub/blksc3/blksc3.html?e=help/guide/--Guide--).
The _Guide_ menu can be selected using the _g_ access key.

# Idioms

An idiom is, as in Apl, a composite sequence of blocks that is often used.
The Toolbox contains a number of idioms.

# Inputs

There are two kinds of inputs, _value_ inputs and _statement_ inputs.
Value inputs accept expression blocks and statement inputs accept a stack of statement blocks.

# Internal Inputs

<img src="sw/blksc3/png/SinOsc.internal.png" width="250" height="48">

Cf. External Inputs.

# Left to right

Ordinarily the system is in left-to-right mode.
In this case the block name is at the left,
the inputs run from left to right,
and the output connector is on the left edge.

# Naming Schema

Selects between symbolic and text naming schemas.

# Scalable Vector Graphics

<!-- ![](sw/blksc3/svg/Why%20Block%20SuperCollider.svg) -->

# Small Programs

There is a list of [Small Programs](https://rohandrape.net/pub/blksc3/blksc3.html?e=help/graph/--Small%20Programs--).
These are programs that will draw within the workspace on a 1366×768 display.
The _Small Programs_ menu can be selected using the _a_ access key.

# Statement Blocks

A statement block is a block that does not answer a value,
and therefore does not have an output connector.
Instead statements may have a previous statement connector at the top (for instance ⊳),
or a next statement connector at the bottom,
or both (for instance “).
Statement blocks are connected together into statement stacks.
See also _Expression Block_.

# Toolbox

The toolbox is the area to the left of the workspace.

# Translation

# Type Annotations

Type annotations constrain how blocks can be connected together.
There is a [Type Annotations](http://blksc3.rohandrape.net/?e=help/guide/2.05%20Type%20Annotations) section in the _Guide_.

# Unicode

Lisp editors will often display the typed text `lambda` using the glyph `λ`.

We can extend this mechanism so that the text

> `SinOsc(freq: 440, phase: 0, mul: 1, add: 0)`

is displayed as

> `∿(ν: 440, ϕ: 0, ×: 1, +: 0)`.

<img src="sw/blksc3/png/SinOsc.internal.png" width="250" height="48">

as

<img src="sw/blksc3/png/SinOsc.internal.text.png" width="210" height="46">

or

<img src="sw/blksc3/png/SinOsc.internal.text.keywords.png" width="348" height="49">

<!-- ![](sw/blksc3/png/SinOsc.internal.X.png) -->

# Workspace
