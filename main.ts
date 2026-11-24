// Everyday Things, Two Lines — make.fun entry
// Competition: u-suga-everyday-things-two-lines-longer-run-f8734479
// "Everyday Things, Two Lines, Longer Run" ($2, winner takes all)
//
// The entry is exactly two lines:
//   Line 1 — explain one everyday thing to a 10-year-old in a single
//            vivid sentence built on an analogy.
//   Line 2 — one sentence on why the analogy works: what it maps and
//            what it leaves out.
//
// Chosen object: a traffic jam. The analogy (a whole bag of marbles
// forced through a drinking straw) is concrete, visual and surprising,
// and the second line is honest about the limit: marbles never get
// impatient and honk — only drivers do.

export const ENTRY_LINES: string[] = [
  "A traffic jam is like trying to pour a whole bag of marbles through a drinking straw all at once.",
  "It works because both are too many things squeezing through a space that is too small, but it leaves out that marbles never get impatient and honk \u2014 only the drivers do.",
];

export function formatEntry(lines: string[]): string {
  return lines.join("\n");
}

export const ENTRY_TEXT: string = formatEntry(ENTRY_LINES);

// The entry must be exactly two lines: one analogy, one honest limit.
// Refuse to print anything else — a wrong line count means the entry
// no longer matches the competition format.
export function printEntry(lines: string[]): void {
  if (lines.length !== 2) {
    throw new Error(
      `Entry must have exactly 2 lines, got ${lines.length}`,
    );
  }
  for (const line of lines) {
    if (line.trim().length === 0) {
      throw new Error("Entry lines must not be empty");
    }
  }
  console.log(formatEntry(lines));
}

printEntry(ENTRY_LINES);
