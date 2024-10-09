# Glossary

## Block & Parameter Names

## Block Comments

Block comments are texts attached to a block using the _Add comment_ context menu entry.
The text is displayed in a box that can be moved and resized.
Blocks that have comments attached have a question mark (?) button to show or hide the text.
The comment text is printed, as a comment, when the block is evaluated.

## Comment Blocks

Comment blocks, written as a left double quote (“), are statement blocks located in the _Meta_ category.
They have a single text field which is printed, as a comment, when the block is evaluated.
By convention synthesiser programs begin with a comment block.

## Comments

There are three kinds of comments:

1. Comment Blocks
2. Block Comments
3. Workspace Comments

## Dropdown Field

## Expression Blocks

An expression block (also called a function block or a value block) is a block that answers an output value (at an output connector) and accepts one or more inputs (at input fields).
See also _Statement Block_.

## External Inputs

Blocks can be drawn with either _Internal Inputs_ or _External inputs_.
There is a context menu item to select between the two drawing modes.
The figure below shows the ∿ (_SinOsc_) block with external inputs.

<img src="sw/blksc3/png/SinOsc.external.png" width="81" height="114">

## External Synthesiser

Block SuperCollider ordinarily runs a copy of the SuperCollider synthesiser (`scsynth`) within the browser.
However it can also communicate with an external synthesiser by sending messages over a socket.

## Help

## Guide

There is an online [Guide](https://rohandrape.net/pub/blksc3/blksc3.html?e=help/guide/--Guide--).
The _Guide_ menu can be selected using the _g_ access key.
The Guide consists of a sequence of small example programs each with extensive notes.

## Idioms

An idiom is, as in Apl, a composite sequence of blocks that is often used.
The Toolbox contains a number of idioms.

## Input Kinds

There are two kinds of inputs, _value_ inputs and _statement_ inputs.
Value inputs accept expression blocks.
Statement inputs accept a stack of statement blocks.

## Internal Inputs

Blocks can be drawn with either _Internal Inputs_ or _External inputs_.
There is a context menu item to select between the two drawing modes.
The figure below shows the ∿ (_SinOsc_) block with internal inputs.

<img src="sw/blksc3/png/SinOsc.internal.png" width="250" height="48">

Cf. External Inputs.

## Left to right

Ordinarily the system is in left-to-right mode.
In this case the block name is at the left,
the inputs run from left to right,
and the output connector is on the left edge.

## Naming Schema

The 𝑁 control selects between symbolic and text naming schemas.

## Scalable Vector Graphics

The workspace can be saved as a Scalable Vector Graphics file.
An image of the [Why SuperCollider?](sw/blksc3/svg/Why%20Block%20SuperCollider.svg) graph.

## Small Programs

There is a list of [Small Programs](https://rohandrape.net/pub/blksc3/blksc3.html?e=help/graph/--Small%20Programs--).
These are programs that will draw within the workspace on a 1366×768 display.
The _Small Programs_ menu can be selected using the _a_ access key.

## Statement Blocks

A statement block is a block that does not answer a value,
and therefore does not have an output connector.
Instead statements may have a previous statement connector at the top (for instance ⊳),
or a next statement connector at the bottom,
or both (for instance “).
Statement blocks are connected together into statement stacks.
See also _Expression Block_.

## Symbolic Naming Schema

The figure below shows the ∿ (_SinOsc_) block using the symbolic naming scheme.

<img src="sw/blksc3/png/SinOsc.internal.png" width="250" height="48">

The symbols used are:

- ∿: sine
- ν: frequency
- ϕ: phase
- ×: multiply
- +: add

## Text Naming Schema

The figure below shows the ∿ (_SinOsc_) block using the text naming scheme.
In this scheme the input names are elided.

<img src="sw/blksc3/png/SinOsc.internal.text.png" width="210" height="46">

## Toolbox

The area to the left of the workspace is called the _Toolbox_.

## Translation

## Type Annotations

Type annotations constrain how blocks can be connected together.
There is a [Type Annotations](http://blksc3.rohandrape.net/?e=help/guide/2.05%20Type%20Annotations) section in the _Guide_.

## Unicode

Lisp editors will often display the typed text `lambda` using the glyph `λ`.
We can extend this mechanism so that the text

> `SinOsc(freq: 440, phase: 0, mul: 1, add: 0)`

is displayed as

> `∿(ν: 440, ϕ: 0, ×: 1, +: 0)`

## Workspace

The area containing the block drawing is called the _Workspace_.

## Workspace Comments

_Workspace comments_ are texts that are attached to the workspace using the _Add comment_ context menu entry.
The text is displayed in a box that can be moved and resized, and has a header that allows the comment to be _collapsed_.
The comment text is not printed.

