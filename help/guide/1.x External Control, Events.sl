{- External Control, Events -}
FreeVerb(Voicer(1, 16, { :e |
	Blip(e.p.UnitCps, e.y * 9) * e.w * e.z
}).Splay2, Lag(Cc(1), 0.2), Lag(Cc(2), 0.2), 0.5)

{- ---- notes.md ---- -}
# External Control, Events

_Voicer_ reads _#_ event streams,
where an event is a set of continuous control parameters associated with a switch (_gate_) signal,
and generates an ⟦⟧ (_Array_) of # places.
Each place in the ⟦⟧ is set by evaluating 𝑓 with a distinct 𝔼 (_Event_).

In this program _Voicer_ constructs 16 parallel event processors.
𝔼 (_EventParam_) reads parameters _p_ (linear pitch), _y_ (location in y-axis), _w_ (gate) and _z_ (pressure).

_Cc_ reads the first two inputs as the ⊕ (_mix_) and ▣ (_room_) of ⧈𝑓 (_FreeVerb_).
