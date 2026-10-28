/* KeyDown */
1.to(16).collect({ :k |
    sinOsc(KeyPitch(k).UnitCps, 0) * KeyDown(k)
}).splay2
