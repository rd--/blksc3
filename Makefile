all:
	echo "blksc3"

clean:
	rm -Rf *~
	(cd help ; make clean)

push-all:
	r.gitlab-push.sh blksc3
