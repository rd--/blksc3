all:
	echo "blksc3/lib"

copy-dist:
	mkdir -p jssc3/dist spl/dist
	cp scsynth-wasm-builds/jssc3/dist/jssc3.js jssc3/dist/jssc3.js
	cp scsynth-wasm-builds/spl/dist/sl.js spl/dist/sl.js

download-blockly-9.1.0:
	wget https://github.com/google/blockly/releases/download/blockly-v9.1.0/blockly-9.1.0.tgz
	tar xf blockly-9.1.0.tgz && mv package blockly-9.1.0

clone-all: clone-blockly clone-commonmarkjs clone-jssc3

fetch-all: fetch-blockly fetch-commonmarkjs fetch-jssc3 fetch-commonmarkjs-dist

clone-blockly:
	git clone https://github.com/google/blockly

fetch-blockly:
	(cd blockly ; git pull)

clone-commonmarkjs:
	git clone https://github.com/commonmark/commonmark.js/

fetch-commonmarkjs:
	(cd commonmark.js ; git pull)

build-commonmarkjs:
	(cd commonmark.js ; npm install)

fetch-commonmarkjs-dist:
	(cd commonmark.js ; mkdir -p dist ; cd dist ; rm -f commonmark.js ; wget https://unpkg.com/commonmark/dist/commonmark.js)

clone-jssc3:
	git clone https://gitlab.com/rd--/jssc3

fetch-jssc3:
	(cd jssc3 ; git pull)

# osc.js is a dependency of jssc3, so blksc3 uses lib/jssc3/lib/osc.js/ and a local osc.js isn't required

clone-oscjs:
	git clone https://github.com/colinbdclark/osc.js/

fetch-oscjs:
	(cd osc.js ; git pull)
