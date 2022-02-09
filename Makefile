all:
	echo "blksc3"

clean:
	rm -Rf *~ dist
	(cd cmd ; make clean)
	(cd help ; make clean)

push-all:
	r.gitlab-push.sh blksc3
	r.github-push.sh blksc3

remote-update:
	ssh rd@rohandrape.net "(cd rohandrape.net/pub/blksc3 ; git pull ; (cd lib/jssc3 ; git pull ; cd lib/scsynth-wasm-builds ; git pull))"
