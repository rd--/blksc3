/* External Control, Events */
freeVerb(
	voicer(1, 16) { :e |
		blip(e.p.unitCps, e.y * 9) * e.w * e.z
	}.splay2,
	lag(namedControl('Mix', 0.65), 0.2),
	lag(namedControl('Room', 0.75), 0.2),
	0.5
)

# External Control, Events

𝓥 (_Voicer_) reads _#_ event streams,
where an event is a set of continuous control parameters associated with a switch (_gate_) signal,
and generates a ⟦⟧ (_List_) of # places.
Each place in the ⟦⟧ is set by evaluating λ with a distinct 𝔼 (_Event_).

In this program _Voicer_ constructs 16 parallel event processors.
𝔼 (_EventParam_) reads parameters _p_ (linear pitch), _y_ (location in y-axis), _w_ (gate) and _z_ (pressure).

𝒞 (_ControlField_) elements set the ⊕ (_mix_) and ▣ (_Room_) of parameters of ⧈𝑓 (_freeVerb_).
