# Glossary

## Assignment

The assignment block ≔ sets the value of a variable.
The figure below shows the variable _i_ being incremented by one.

![](sw/blksc3/png/Assignment.png)

## Binary Operator

A binary operator is an operator with two operands.

## Block & Parameter Names

## Block Comments

Block comments are texts attached to a block using the _Add comment_ context menu entry.
The text is displayed in a box that can be moved and resized.
Blocks that have comments attached have a question mark (?) button to show or hide the text.
The comment text is printed, as a comment, when the block is evaluated.

## Case Rule

Identifiers are written in mixed case as `SinOsc`, `LfSaw`  and `Fft`.

## Categories

The blocks in the toolbox are organised into categories, which may be further organised into sub-categories.
Blocks in the same category are assigned the same colour.

## Collapsed Blocks

A block can be _collapsed_ using the _Collapse Block_ entry of the context menu.
A collapsed block can be _expanded_ using the _Expand Block_ entry of the context menu.

## Colours

## Comment Blocks

Comment blocks, written as a left double quote (“), are statement blocks located in the _Meta_ category.
They have a single text field which is printed, as a comment, when the block is evaluated.
By convention synthesiser programs begin with a comment block.

## Comments

There are three kinds of comments:

1. Comment Blocks
2. Block Comments
3. Workspace Comments

## Complete Toolbox

The complete toolbox includes only a complete set of the blocks the system knows about,
organised into a system of categories and subcategories.

## Context menus

A context menu contains a list of actions related to an element in the workspace, or to the workspace itself.
A context menu is shown on right mouse clicks and long pen presses.

## Copy & Paste

A block can be copied by typing _Ctl-c_ and a copied block can be pasted by typing _Ctl-v_.

## Deleting Blocks

Blocks can be deleted using the _Delete_ entry in the context menu or by pressing the _Delete_ key.
When a block is deleted all of its descendents are deleted along with it.
Deletion can be _undone_.

## Dropdown Menus

Block fields with a ▼ indicator are menus.
The figure below shows a constant block with the menu open.

![](sw/blksc3/png/ConstantMenu.png)

## Duplicate

A block can be _duplicated_ using the _Duplicate_ entry of the context menu.

## Expression

## Expression Blocks

An expression block (also called a function block or a value block) is a block that answers an output value (at an output connector) and accepts one or more inputs (at input fields).
See also _Statement Block_.

## External Inputs

Blocks can be drawn with either _Internal Inputs_ or _External inputs_.
There is a context menu item to select between the two drawing modes.
The figure below shows the ∿ (_SinOsc_) block with external inputs.

![](sw/blksc3/png/SinOsc.external.png)

## External Synthesiser

Block SuperCollider ordinarily runs a copy of the SuperCollider synthesiser (`scsynth`) within the browser.
However it can also communicate with an external synthesiser by sending messages over a socket.

## Function

In mathematics, a function is a relation that uniquely associates members of one set with members of another set.
In some contexts function may be used as a synonym for operator or procedure or subroutine.
In some contexts function may be used to refer to a procedure that has no side effects.

## Function Notation

Function notation is a form of prefix notation where the operands are enclosed in parentheses and separated by commas.
The prefix expression `f p q` is written `f(p, q)` in function notation, `f` is the operator and `p` and `q` the operands.

## Help

There is an online [Help](https://rohandrape.net/pub/blksc3/blksc3.html?e=help/guide/--Help--) system.
The _Help_ menu can be selected using the _h_ access key.
The help programs illustrate individual blocks.
Some blocks have multiple illustrations and the help programs have numerical suffixes to distinguish them.

## Guide

There is an online [Guide](https://rohandrape.net/pub/blksc3/blksc3.html?e=help/guide/--Guide--).
The _Guide_ menu can be selected using the _g_ access key.
The Guide consists of a sequence of small example programs each with extensive notes.

## Idioms

An idiom is, as in Apl, a composite sequence of blocks that is often used.
The Toolbox contains a number of idioms.

## Infix Notation

Infix notation is a notation where the (binary) operator is written between the (two) operands.
The infix expression `p + q` is written `+ p q` in prefix notation, and `p q +` in postfix notation.

## Input Kinds

There are two kinds of inputs, _value_ inputs and _statement_ inputs.
Value inputs accept an expression block.
Statement inputs accept one or more statement blocks.

## Internal Inputs

Blocks can be drawn with either _Internal Inputs_ or _External inputs_.
There is a context menu item to select between the two drawing modes.
The figure below shows the ∿ (_SinOsc_) block with internal inputs.

![](sw/blksc3/png/SinOsc.internal.png)

## JavaScript

JavaScript (Wirfs-Brock 2020).
The language is standardised in the document ECMA-262 and is maintained Ecma's Technical Committee 39.

## Lambda

λ (_Lambda_) blocks answer procedure values,
the define the expected arguments and the steps of execution or evaluation.
The name is from the lambda calculus (Church 1941) and Lisp (McCarthy 1960).

## Left to right

Ordinarily the system is in left-to-right mode.
In this case the block name is at the left,
the inputs run from left to right,
and the output connector is on the left edge.

## Naming Schema

The 𝑁 control selects between symbolic and text naming schemas.
Some equivalent names are ∿=_SinOsc_ and ≤=_LessThanOrEqualTo_.

## Operand

An operand, also called an argument or a parameter, is a value operated on by an operator.
In the infix expression `p + q`, `p` and `q` are operands and `+` is the operator.

## Operator

An operator is the part of an expression that specifies the operation to be performed.
In the expression `p + q`, `+` is the operator and `p` and `q` are operands.
The number of operands required by an operator is the arity of the operator.
In some contexts operator refers to specifically to verbs that are written infix.

## Operator Menu

Blocks may implement many different behaviours selected from an operator menu.
The figure below shows the binary math operator block with the operator menu opened.

![](sw/blksc3/png/OperatorMenu.png)

## Patcher

Patcher (Puckette 1988)
Two of its descendents Max (Puckette 1991) and PureData (Puckette 1996) are still widely used.

## Patchwork

Patchwork (Laurson 1989)
OpenMusic (Assayag 1996)

## Postfix Notation

Postfix notation, also called reverse Polish or reverse Łukasiewicz notation, is a notation where the operator follows the operands.
The postfix expression `p q +` is written `p + q` in infix notation, and `+ p q` in prefix notation.

## Prefix Notation

Prefix notation, also called Polish or Łukasiewicz notation, is a notation where the operator precedes the operands.
The prefix expression `+ p q` is written `p + q` in infix notation, and `p q +` in postfix notation.

## Procedure

## Scalable Vector Graphics

The workspace can be saved as a Scalable Vector Graphics file.
An image of the [Why SuperCollider?](sw/blksc3/svg/Why%20Block%20SuperCollider.svg) graph.

## S-Expression

S-expressions (McCarthy 1960) are a class of symbolic expressions.
They are formed by using the three special characters `(.)`,
and an infinite set of distinguishable atomic symbols.
The atomic symbols are s-expressions, and if `p` and `q` are s-expressions, so is `(p . q)`.
There are a two additional notations to simplify writing common idioms,
`(p q r)` is an abbreviation of `(p . (q . (r . nil)))`,
and `'p` is an abbreviation of `(quote p)`.

## Shadow block

A shadow block is an editable but non-movable block connected to another block.
Blocks can be placed on top of shadow blocks to overwrite them.

## Simple Programming Language

## Small Programs

There is a list of [Small Programs](https://rohandrape.net/pub/blksc3/blksc3.html?e=help/graph/--Small%20Programs--).
These are programs that will draw within the workspace on a 1366×768 display.
The _Small Programs_ menu can be selected using the _a_ access key.

## Small Toolbox

The small toolbox includes only a small set of the blocks the system knows about,
and it is organised into a flat system of categories (there are no subcategories).
It is designed so that all of the categories,
and all of the blocks within each category,
fit on a display of size 1366×768.

## Statement

## Statement Blocks

A statement block is a block that does not answer a value,
and therefore does not have an output connector.
Instead statements may have a previous statement connector at the top (for instance ⊳),
or a next statement connector at the bottom,
or both (for instance “ and ≔).
Statement blocks may also have input connectors at the right (for instance ⊳ and ≔).
Statement blocks are connected together into statement stacks.
See also _Expression Block_.

## Statement Input

A statement input accepts one or more statement blocks.
The figure below shows the no-argument λ (_Lambda_) block.
The ⦙ (_Statements_) input is a statement input,
the ← (_Return_) input is a value input.

![](sw/blksc3/png/Lambda.zero.stm.png)

## Symbolic Naming Schema

The figure below shows the ∿ (_SinOsc_) block using the symbolic naming scheme.

![](sw/blksc3/png/SinOsc.internal.png)

The symbols used are:

- ∿: sine
- ν: frequency
- ϕ: phase
- ×: multiply
- +: add

The naming scheme also applies to menu fields.
The figure below shows the ⊥ (_False_) block using the symbolic naming scheme.

![](sw/blksc3/png/False.png)

## Text Naming Schema

The figure below shows the ∿ (_SinOsc_) block using the text naming scheme.
In this scheme the input names are elided.

![](sw/blksc3/png/SinOsc.internal.text.png)

The naming scheme also applies to menu fields.
The figure below shows the ⊥ (_False_) block using the text naming scheme.

![](sw/blksc3/png/False.text.png)

## Toolbox

The area to the left of the workspace is called the _Toolbox_.
The toolbox contains instances of the blocks the system knows about, organised into categories.
Blocks are fetched by dragging them out of the toolbox and into the workspace.
The system comes with two toolboxes, a _complete toolbox_ and a _small toolbox_,
the 𝑇 button selects between them.
There is a [Toolbox](https://rohandrape.net/pub/blksc3/blksc3.html?e=help/guide/1.03%20Toolbox) section in the _Guide_.
The figure below shows the complete toolbox with the constants category selected.

![](sw/blksc3/png/Toolbox.png)

## Translation

## Type

A type is a category (or collection or grouping) of values,
whose elements share common characteristics such as representation or available operations.

## Type Annotations

Type annotations, also called connection checks, constrain how blocks can be connected together.
There is a [Type Annotations](http://blksc3.rohandrape.net/?e=help/guide/2.05%20Type%20Annotations) section in the _Guide_.

## Unary Operator

A unary operator is an operator with one operand.

## Undo

Actions can be _undone_ by typing _Ctl-u_,
and _redone_ by typing _Ctl-y_.

## Unicode

Lisp editors will often display the typed text `lambda` using the glyph `λ`.
We can extend this mechanism so that the text

> `SinOsc(freq: 440, phase: 0, mul: 1, add: 0)`

is displayed as

> `∿(ν: 440, ϕ: 0, ×: 1, +: 0)`

## Uniform Resource Locator

The address of a World Wide Web page, abbreviated as Url.

## Value Input

A value input accepts an expression block.
The figure below shows the no-argument λ (_Lambda_) block.
The ⦙ (_Statements_) input is a statement input,
the ← (_Return_) input is a value input.

![](sw/blksc3/png/Lambda.zero.stm.png)

## Variable

## Workspace

The area containing the block drawing is called the _Workspace_.
There is a [Workspace](https://rohandrape.net/pub/blksc3/blksc3.html?e=help/guide/1.02%20Workspace,%20Synthesiser) section in the _Guide_.

## Visual Programming Language

## Workspace Comments

_Workspace comments_ are texts that are attached to the workspace using the _Add comment_ context menu entry.
The text is displayed in a box that can be moved and resized, and has a header that allows the comment to be _collapsed_.
The comment text is not printed.

## Zoom

The workspace has controls to zoom in (⊕) and out (⊖) of the drawing, and to center it at its initial scale (⊙).
A mouse scroll wheel will also control workspace scaling.
