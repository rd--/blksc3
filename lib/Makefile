all:
	echo "blksc3/lib"

clone-blockly:
	git clone https://github.com/google/blockly

fetch-blockly:
	(cd blockly ; git pull)

clone-commonmarkjs:
	git clone https://github.com/commonmark/commonmark.js/

fetch-commonmarkjs:
	(cd commonmark.js ; git pull)

fetch-commonmarkjs-dist:
	(cd commonmark.js ; mkdir -p dist ; cd dist ; rm -f commonmark.js ; wget https://unpkg.com/commonmark/dist/commonmark.js)

clone-jssc3:
	git clone https://gitlab.com/rd--/jssc3

fetch-jssc3:
	(cd jssc3 ; git pull)

# however, osc.js is a dependency of jssc3, so blksc3 uses lib/jssc3/lib/osc.js/
clone-oscjs:
	git clone https://github.com/colinbdclark/osc.js/

fetch-oscjs:
	(cd osc.js ; git pull)

clone-all: clone-blockly clone-commonmarkjs clone-jssc3 clone-oscjs

fetch-all: fetch-blockly fetch-commonmarkjs fetch-jssc3 fetch-oscjs fetch-commonmarkjs-dist
