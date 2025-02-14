all:
	echo "blksc3"

clean:
	rm -Rf *~ dist
	(cd cmd ; make clean)
	(cd help ; make clean)

update-lib:
	git submodule update --remote lib/scsynth-wasm-builds

push-all:
	r.gitlab-push.sh blksc3
	r.github-push.sh blksc3

remote-update:
	ssh rd@rohandrape.net "(cd rohandrape.net/pub/blksc3 ; git pull ; make update-lib)"

mk-fmt:
	deno fmt --use-tabs --single-quote blksc3.html
	fourmolu -i hs

doctest:
	doctest -Wno-x-partial -Wno-incomplete-uni-patterns hs/translate.hs
