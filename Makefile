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
	ssh rd@rohandrape.net "(cd rohandrape.net/pub/blksc3 ; git pull ; make remote-setup)"

remote-setup:
	(cd lib/jssc3 ; git pull)
	(cd lib/spl ; git pull)
	(cd lib/scsynth-wasm-builds ; git pull)
	(cd lib ; make copy-dist)

mk-fmt:
	deno fmt --use-tabs --single-quote blksc3.html
	fourmolu -i hs

doctest:
	doctest -Wno-x-partial -Wno-incomplete-uni-patterns hs/translate.hs
