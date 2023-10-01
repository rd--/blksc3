// Convert .md text to .html
function markdown_to_html(mdText) {
	var mdReader = new commonmark.Parser({smart: true});
	var htmlWriter = new commonmark.HtmlRenderer();
	// console.debug('markdown_to_html', mdText);
	return htmlWriter.render(mdReader.parse(mdText));
}

// [Unused] Load .md from fileName, convert to .html and pass to processFunc.
function fetch_md_then(fileName, processFunc) {
	sc.fetch_utf8_then(fileName, mdText => processFunc(markdown_to_html(mdText)));
}

// .stc files can have a .md notes segment.
function md_notes_from_stc(stcText) {
	var lines = stcText.split('\n');
	var from_marker = sc.arrayDropWhile(lines, str => !sc.stringIsPrefixOf('(* ---- notes.md', str));
	return sc.arrayUnlines(sc.arrayTail(from_marker));
}

// Load .stc from fileName, extract .md notes, convert to .html and pass to processFunc.
export function load_notes_and_then(fileName, processFunc) {
	sc.fetch_utf8_then(fileName, stcText => processFunc(markdown_to_html(md_notes_from_stc(stcText))));
}
