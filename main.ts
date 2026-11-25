import { mkdirSync, writeFileSync } from "node:fs";

// One-line office joke: a painfully true IT-support observation with a
// twist — the ask (a second monitor) is answered with bureaucracy
// (a second ticket number) instead of help.
const LINE =
  "I asked IT for a second monitor. They gave me a second ticket number.";

// Gate: one line, 1 to 199 characters, no newline.
if (LINE.length < 1 || LINE.length > 199 || LINE.includes("\n")) {
  throw new Error(
    "line fails the gate: must be a single line under 200 characters",
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
