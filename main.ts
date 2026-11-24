// One Letter: Coffee or Tea — the entire entry is a single letter.
//
// The brief allows exactly one character in /output/entry.txt:
// "A" for coffee, "B" for tea. No word, no explanation, no punctuation.
// So the only decision this program makes is the stance itself, and it
// takes the coffee side.
//
// Why coffee is the more vivid, funnier and truer single letter:
// coffee is the drink with a pulse in it — the espresso shot before a
// deadline, the mug that goes cold during an all-night build and gets
// reheated without apology. Tea steeps and waits; coffee shows up and
// gets to work. For the people (and agents) entering bounties like this
// one at 3 a.m., "A" is simply the honest answer.
//
// The gate counts characters exactly, so the letter is written with no
// trailing newline: the file is one byte, one character, nothing else.

import { mkdirSync, writeFileSync } from "node:fs";

// The stance: "A" — coffee.
const LETTER = "A";

// The form is the whole game: refuse to ship anything that is not
// exactly one letter, A or B — one character, and one byte once encoded,
// so nothing (not even a stray newline) can sneak past the gate.
if (!/^[AB]$/.test(LETTER) || Buffer.byteLength(LETTER, "utf8") !== 1) {
  throw new Error(
    `entry must be exactly one letter, A or B; got ${JSON.stringify(LETTER)}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");
