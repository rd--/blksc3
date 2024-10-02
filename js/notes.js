// Convert .md text to .html
function markdownToHtml(mdText) {
	const mdReader = new commonmark.Parser({ smart: true });
	const htmlWriter = new commonmark.HtmlRenderer();
	// console.debug('markdownToHtml', mdText);
	return htmlWriter.render(mdReader.parse(mdText));
}

// .sl files can have a .md notes segment.
function mdNotesFromSpl(splText) {
	const lines = splText.split('\n');
	const notesMarker = lines.findIndex(str => sc.stringIsPrefixOf('{- ---- notes.md', str));
	const hasMarker = notesMarker >= 0;
	if (lines.length == 0) {
		return 'No notes?';
	} else if (hasMarker) {
		return sc.arrayUnlines(lines.slice(notesMarker + 1, lines.length));
	} else {
		const program = lines.slice(1, lines.length);
		return sc.arrayUnlines([['Source:', '~~~'], program, ['~~~']].flat(1));
	}
}

// Load .sl from fileName, extract .md notes, convert to .html.
export function loadNotes(fileName) {
	return sc.fetchUtf8(fileName, { cache: 'no-cache' })
		.then((splText) => markdownToHtml(mdNotesFromSpl(splText)));
}
