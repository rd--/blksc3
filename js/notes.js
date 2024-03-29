// Convert .md text to .html
function markdownToHtml(mdText) {
	var mdReader = new commonmark.Parser({smart: true});
	var htmlWriter = new commonmark.HtmlRenderer();
	// console.debug('markdownToHtml', mdText);
	return htmlWriter.render(mdReader.parse(mdText));
}

// .stc files can have a .md notes segment.
function mdNotesFromStc(stcText) {
	var lines = stcText.split('\n');
	var fromMarker = sc.arrayDropWhile(lines, str => !sc.stringIsPrefixOf('{- ---- notes.md', str));
	return sc.arrayUnlines(sc.arrayTail(fromMarker));
}

// Load .stc from fileName, extract .md notes, convert to .html.
export function loadNotes(fileName) {
	return sc.fetchUtf8(fileName, { cache: 'no-cache' })
		.then(stcText => markdownToHtml(mdNotesFromStc(stcText)));
}
