%.html : %.md
	pandoc -f markdown+smart --citeproc --standalone --bibliography $(HOME)/rf/ref/ref.bib $< -o $@

all: extended-abstract.html glossary.html

references:
	pandoc -f markdown+smart -t markdown_strict --citeproc --standalone --bibliography $(HOME)/rf/ref/ref.bib glossary.md > /tmp/references.md

clean:
	rm -f *.html
