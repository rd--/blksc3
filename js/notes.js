import * as sc from '../lib/scsynth-wasm-builds/lib/jssc3/dist/jssc3.js';

// Convert .md text to .html, requires commonmark.
function markdownToHtml(mdText) {
	const mdReader = new commonmark.Parser({ smart: true });
	const htmlWriter = new commonmark.HtmlRenderer();
	// console.debug('markdownToHtml', mdText);
	return htmlWriter.render(mdReader.parse(mdText));
}

// .sp files can have a .md segment, indicated by a line beginning '# '
function mdNotesFromSpl(splText) {
	const lines = splText.split('\n');
	const notesMarker = lines.findIndex((str) =>
		sc.stringIsPrefixOf('# ', str)
	);
	const hasMarker = notesMarker >= 0;
	const endSrc = hasMarker ? notesMarker : lines.length;
	const includeSrc = !hasMarker || (lines[notesMarker].includes('Annotation'));
	if (lines.length == 0) {
		return 'No notes?';
	}
	const answerLines = [];
	if (hasMarker) {
		answerLines.push(sc.arrayUnlines(lines.slice(notesMarker + 1, lines.length)));
	}
	if(includeSrc) {
		const program = lines.slice(1, endSrc);
		answerLines.push(sc.arrayUnlines([['Source:', '~~~'], program, ['~~~']].flat(1)));
	}
	return sc.arrayUnlines(answerLines);
}

// Load .sl from fileName, extract .md notes, convert to .html.
export function loadNotes(fileName) {
	return sc.fetchUtf8(fileName, { cache: 'no-cache' })
		.then((splText) => markdownToHtml(mdNotesFromSpl(splText)));
}
