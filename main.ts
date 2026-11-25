// One Word From Your Ex — make.fun entry.
//
// Writes exactly one word — the word an ex would use to describe
// you — to entry.txt in the output directory (MAKEFUN_OUTPUT_DIR
// when set, /output otherwise). No phrase, no explanation, no
// trailing newline.
//
// The pick: "Exhausting". It stings because it is honest — the
// kind of word an ex reaches for when the relationship wore them
// out — and it lands instantly with no context needed.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a single word, 10 characters, within the 1-24 gate.
const entryWord = "Exhausting";

function main(): void {
  const word = entryWord.trim();
  if (word.length < 1 || word.length > 24) {
    throw new Error(`Entry word must be 1-24 characters, got ${word.length}.`);
  }
  if (/\s/.test(word)) {
    throw new Error("Entry must be a single word with no spaces.");
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), word, "utf8");
}

main();
