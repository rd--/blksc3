The _math_ operator blocks should only hold _UGen_ operators.

_splay2_ should be written as a block constructor, not a method.

_clearBuf_ is an interesting case, it is a method because it constructs an _Mrg_ node.

There are array operation blocks with menus, _ArrayProc1_ and _ArrayProc2_.

There is an _ArrayCollect_ block, however it should be deleted in favour of _ArrayProc2.collect_.

_fromAssocArray_ and _->_ belong at _Event_, not _Math_.

_kr_ should not exist.

Guide:

- Notes, .stc.
  That notes are not stored in blocks.
  That they specially formatted comments in .stc files.

- Display, Layout.
  That the default layout rule is proportional to the size of the viewport.
  That there are fixed size layouts.
  That these are useful for seeing how programs will appear on other displays.
