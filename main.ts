// One Word From Grandma — entry program.
// Writes the single word grandma would text about AI to /output/entry.txt.
// The word: "eavesdropper" — grandma's warm, baffled accusation at the machine
// that listens to everything. One word, 12 characters, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const word = "eavesdropper";

// Gate check (mirrors the sealed scorer): 1-30 characters, a single word,
// not only white space. Fail loudly instead of writing an invalid entry.
if (!/^\S{1,30}$/.test(word)) {
  throw new Error("entry must be one word of 1-30 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word, "utf8");
