# blksc3

Block SuperCollider.

## blk-gen

Generate `.js` and `.json` and `.xml` files for blksc3.

````
$ blksc3 blk-gen
...
$
````

## stc-to-osc

Read .stc text notation (in fact any text) from a Websocket and send
it as the single parameter of an OpenSoundControl message ( `/eval` by
default).

````
$ blksc3 --host=localhost --port=9160 --addr=/eval stc-to-osc
...
$
````

## stc-to-st

Read .stc text notation from a Websocket, translate to .st (Smalltalk) notation, and write it to stdout.

````
$ blksc3 --host=localhost --port=9160 stc-to-st | gst -
...
$
````

# ws-osc-to-udp-osc

Send incoming Websocket Osc messaged out over Udp.

