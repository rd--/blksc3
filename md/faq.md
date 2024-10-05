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

# Inputs

There are two kinds of inputs, _value_ inputs and _statement_ inputs.
Value inputs accept expression blocks and statement inputs accept a stack of statement blocks.

# Left to right

Ordinarily the system is in left-to-right mode.
In this case the block name is at the left,
the inputs run from left to right,
and the output connector is on the left edge.

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

<http://blksc3.rohandrape.net/?e=help/guide/2.05%20Type%20Annotations>

# Workspace
