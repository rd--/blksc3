all:
	echo "blksc3"

clean:
	rm -Rf *~
	(cd help ; make clean)

push-all:
	r.gitlab-push.sh blksc3
	r.github-push.sh blksc3
