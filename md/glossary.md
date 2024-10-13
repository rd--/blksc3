# Glossary

## Assignment

The assignment block ≔ sets the value of a variable.
The figure below shows the variable _i_ being incremented by one.

![](sw/blksc3/png/Assignment.png)

## Binary Operator

A binary operator is an operator with two operands.
In some contexts it particularly refers to an operator that is written using infix notation.

## Block & Parameter Names

## Block Comments

Block comments are texts attached to a block using the _Add comment_ context menu item.
The text is displayed in a box that can be moved and resized.
Blocks that have comments attached have a question mark (?) button to show or hide the text.
The comment text is printed, as a comment, when the block is evaluated.

## Block Outputs

A block may have a single output, represented as a jigsaw connector on the left edge.
Block outputs connect to value inputs.
Blocks with an output are usually called expression or value blocks.

## Browser

WorldWideWeb (Berners-Lee 1992).

## Case Rule

Identifiers are written in mixed case as `SinOsc`, `LfSaw` and `Fft`.

## Categories

The blocks in the toolbox are organised into categories, which may be further organised into sub-categories.
Blocks in the same category are assigned the same colour.

## Code Generator

To evaluate a block program it is first printed as a text program.
This process is called code generation.

## Collapsed Blocks

A block can be _collapsed_ using the _Collapse Block_ item in the context menu.
A collapsed block can be _expanded_ using the _Expand Block_ item in the context menu.

## Colours

## Comment Blocks

Comment blocks, written as a left double quote (“), are statement blocks located in the _Meta_ category.
They have a single text field which is printed, as a comment, when the block is evaluated.
The comment should not contain any newlines, if it does only the first line is written.
By convention synthesiser programs begin with a comment block.

## Comments

There are three kinds of comments:

1. Comment Blocks
2. Block Comments
3. Workspace Comments

## Complete Toolbox

The complete toolbox includes a complete set of the blocks the system knows about,
organised into a system of categories and subcategories.

## Console

The console is a text area that can be printed to.

## Context menus

A context menu contains a list of actions related to an element in the workspace, or to the workspace itself.
A context menu is shown on right mouse clicks and long pen presses.

## Copy & Paste

A block can be copied by typing _Ctl-c_ and a copied block can be pasted by typing _Ctl-v_.

## Deleting Blocks

Blocks can be deleted using the _Delete_ item in the context menu,
or by pressing the _Delete_ key.
When a block is deleted all of its descendents are deleted along with it.
Deletion can be _undone_.

## Duplicate

A block can be _duplicated_ using the _Duplicate_ item in the context menu.

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
In some contexts function may be used to refer to a procedure that is written using function notation,
and operator to refer to a procedure that is written using infix notation.

## Function Notation

Function notation is a form of prefix notation where the operands are enclosed in parentheses and separated by commas.
The prefix expression `f p q` is written `f(p, q)` in function notation, `f` is the operator and `p` and `q` the operands.

## Help

There is an online [Help](https://blksc3.rohandrape.net/?e=help/Reference/--Help--) system.
The _Help_ menu can be selected using the _h_ access key.
The help programs illustrate individual blocks.
Some blocks have multiple illustrations and the help programs have numerical suffixes to distinguish them.

## Guide

There is an online [Guide](https://blksc3.rohandrape.net/?e=help/Guide/--Guide--).
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

λ (_Lambda_) blocks answer procedure values.
They define the expected arguments and the steps of execution or evaluation for a procedure.
The name is from the lambda calculus (Church 1941) and Lisp (McCarthy 1960).

## Left to right

Ordinarily the system is in left-to-right mode.
In this case the block name is at the left,
the inputs run from left to right,
and the output connector is on the left edge.

## Let Binding

A let binding introduces a local variable and assigns it an initial value.
Let bindings must be grouped together at the start of a statement stack.
In the figure below a local variable _x_ is defined to have the value of the matematical constant _e_.

![](sw/blksc3/png/LetBinding.png)

## Lexical Scope

Lexical scope is the part of a program text, or drawing, in which a binding of a name to a value applies.
In the figure below `x` is bound to `1` and `y` is bound to `pi`.
The `x` binding in the λ block is local, it does not interact with the outer `x` binding.

![](sw/blksc3/png/LexicalScope.png)

## Menu Field

Block fields with a ▼ indicator are menus.
The figure below shows a numeric constant block with the menu open.

![](sw/blksc3/png/NumericConstant.png)

## Naming Schema

The 𝑁 control selects between symbolic and text naming schemas.
Some equivalent names are ∿=_SinOsc_ and ≤=_LessThanOrEqualTo_.

## Number

A number block is a block with a single editable text field in which one can write a number.
The number may be an integer or a real number.
Trying to type in a text that is not a number leaves the number unchanged.
The number block is fetched from the _Constants_ category of the toolbox.
The figure below shows the number twenty three divided by an approximation of π.

![](sw/blksc3/png/Number.png)

## Numeric Constant

The numeric constant block is a block with a menu containg a number of predefined mathematical constants,
such as π (_Pi_), 2×π (_TwoPi_), 𝑒 (_E_) and ∞ (_Infinity_).
It is fetched from the _Constants_ category of the toolbox.

![](sw/blksc3/png/NumericConstant.png)

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

## Play Block

The ⊳ (_Play_) block is a statement block that indicates the end of the program.
The input to the ⊳ block is the sound that is heard when the program is listened to.
There should only be one ⊳ block in a program, and it should be the last block.

## Postfix Notation

Postfix notation, also called reverse Polish or reverse Łukasiewicz notation, is a notation where the operator follows the operands.
The postfix expression `p q +` is written `p + q` in infix notation, and `+ p q` in prefix notation.

## Prefix Notation

Prefix notation, also called Polish or Łukasiewicz notation, is a notation where the operator precedes the operands.
The prefix expression `+ p q` is written `p + q` in infix notation, and `p q +` in postfix notation.

## Print Program

The _Print_ button prints the synthesis graph of the current program to the console.

## Procedure

## Program Oracle

The program oracle (易) selects at random from a subset of the list of programs in the program menu.

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

## Shadow Block

A shadow block is an editable but non-movable block connected to another block.
Blocks can be placed on top of shadow blocks to overwrite them.
In the figure below both input fields of the ⍰𝒑 (_PinkNoise_) block,
and the × (_Multiply_) and + (_Add_) fields of the ⋏ (_Resonz_) block are shadow blocks.
The _ν_ (_Frequency_) and ¹⁄𝑄 (_ReciprocalOfQ_) inputs are replaced by number blocks.

![](sw/blksc3/png/ShadowBlock.png)

## Simple Programming Language

## Small Programs

There is a list of [Small Programs](https://blksc3.rohandrape.net/?e=help/Program/--Small%20Programs--).
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
In the figure below a ≔ (_Assignment_) block is connected to a ⊳ (_Play_) block.

![](sw/blksc3/png/Statements.png)

## Statement Connections

Statement blocks are sequenced using _next statement_ and _previous statement_ connectors.
These connectors are on the top and bottom edges of the block,
so that block sequences stack vertically,
and are read from top to bottom.

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
There is a [Toolbox](https://blksc3.rohandrape.net/?e=help/Guide/1.03%20Toolbox) section in the _Guide_.
The figure below shows the complete toolbox with the constants category selected.

![](sw/blksc3/png/Toolbox.png)

## Tooltip

A tooltip offers help when the mouse hovers over a block.
The figure below shows the ∿ (_SinOsc_) block with the tooltip displayed.
The help text gives the text name of the block,
the text names of the parameters,
and a one sentence synopsis.

![](sw/blksc3/png/Tooltip.png)

## Translation

## Type

A type is a category (or collection or grouping) of values,
whose elements share common characteristics such as representation or available operations.

## Type Annotations

Type annotations, also called connection checks, constrain how blocks can be connected together.
There is a [Type Annotations](http://blksc3.rohandrape.net/?e=help/Guide/2.05%20Type%20Annotations) section in the _Guide_.

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

A value input accepts an output connector of an expression block.
When the input is internal it is drawn as a missing puzzle piece,
when the input is external it is drawn as a puzzle piece connecter on the right edge.
The figure below shows the no-argument λ (_Lambda_) block.
The ⦙ (_Statements_) input is a statement input,
the ← (_Return_) input is a value input.

![](sw/blksc3/png/Lambda.zero.stm.png)

## Variable

Variables are created using the _Create Variable_ entry in the _Variable_ category of the toolbox,
which also contains the variable reference and assignment blocks.

## Workspace

The area containing the block drawing is called the _Workspace_.
There is a [Workspace](https://blksc3.rohandrape.net/?e=help/Guide/1.02%20Workspace,%20Synthesiser) section in the _Guide_.

## Visual Programming Language

## Workspace Comments

_Workspace comments_ are texts that are attached to the workspace using the _Add comment_ item in the context menu.
The text is displayed in a box that can be moved and resized, and has a header that allows the comment to be _collapsed_.
The comment text is not printed.

## Zoom

The workspace has controls to zoom in (⊕) and out (⊖) of the drawing, and to center it at its initial scale (⊙).
A mouse scroll wheel will also control workspace scaling.
