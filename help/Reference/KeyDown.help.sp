/* KeyDown */
1.to(16).collect({ :k |
    sinOsc(keyPitch(k).unitCps, 0) * keyDown(k)
}).splay2
