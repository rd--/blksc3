/* External Control, Events */
FreeVerb(
	Voicer(1, 16) { :e |
		Blip(e.p.UnitCps, e.y * 9) * e.w * e.z
	}.Splay2,
	Lag(NamedControl('Mix', 0.65), 0.2),
	Lag(NamedControl('Room', 0.75), 0.2),
	0.5
)

/* ---- notes.md ---- */
# External Control, Events

𝓥 (_Voicer_) reads _#_ event streams,
where an event is a set of continuous control parameters associated with a switch (_gate_) signal,
and generates a ⟦⟧ (_List_) of # places.
Each place in the ⟦⟧ is set by evaluating λ with a distinct 𝔼 (_Event_).

In this program _Voicer_ constructs 16 parallel event processors.
𝔼 (_EventParam_) reads parameters _p_ (linear pitch), _y_ (location in y-axis), _w_ (gate) and _z_ (pressure).

𝒞 (_ControlField_) elements set the ⊕ (_Mix_) and ▣ (_Room_) of parameters of ⧈𝑓 (_FreeVerb_).
