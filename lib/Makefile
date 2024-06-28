all:
	echo "blksc3/lib"

# locally use symlinks, remotely copy files
copy-dist:
	mkdir -p jssc3/dist spl/dist spl/.cache
	cp scsynth-wasm-builds/lib/jssc3/dist/jssc3.js jssc3/dist/
	cp scsynth-wasm-builds/lib/spl/dist/sl.js spl/dist/
	cp scsynth-wasm-builds/lib/spl/.cache/*.js spl/.cache/

# fecth blockly release
download-blockly:
	wget https://github.com/google/blockly/releases/download/blockly-v11.1.1/blockly-11.1.1.tgz
	tar xf blockly-11.1.1.tgz && mv package blockly-11.1.1
