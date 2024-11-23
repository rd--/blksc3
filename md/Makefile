%.html : %.md
	pandoc -f markdown+smart --citeproc --standalone --bibliography $(HOME)/rf/ref/ref.bib $< -o $@

all: essay.html

clean:
	rm -f *.html
