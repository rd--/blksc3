(* KeyDown *)
1.to(16).collect({ :k |
    SinOsc(KeyPitch(k).UnitCps, 0) * KeyDown(k)
}).Splay2
