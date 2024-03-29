{- Workspace, Synthesiser -}
{ PinkNoise() } ! 2 * 0.025

{- ---- notes.md ---- -}
# Workspace, Synthesiser

The area containing the _block_ drawing is called the _workspace_.
Blocks are connected together to form a _program_,
which is sent to the _SuperCollider_ synthesiser to make sound.

Blocks can be moved about the workspace and connected and disconnected from each other using the mouse.
Blocks can be copied and pasted by typing _Ctl-c_ & _Ctl-v_, and deleted by typing the _Delete_ key.
Edits can be undone using _Ctl-z_.

Blocks can be _Duplicated_ and _Deleted_ using the _Context Menu_, opened by right clicking a block.

The Workspace has controls to zoom in (⊕) and out (⊖) of the drawing,
and to center it at its initial scale (⊙).

Beneath the Workspace is a control to
_Fit_ the drawing to the Workspace area.
The drawing can be tidied using _Cleanup_,
all blocks can be deleted using _Clear_.

_Play_ sends the current program to SuperCollider to be played.
_Replace_ cross-fades between the last program played and the current program.
_Reset_ stops all of the sounding programs.

This program consists of seven blocks.
It makes quiet, decorrelated, stereo pink noise.
