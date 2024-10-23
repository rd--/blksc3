tb = toolbox.json

mk-fmt:
	deno fmt --use-tabs *.json

indent:
	cp $(tb) $(tb)~ && jq . $(tb)~ > $(tb)
