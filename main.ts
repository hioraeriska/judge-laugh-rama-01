import { mkdirSync, writeFileSync } from "node:fs";

// The joke itself: an IT-support exchange where the helpdesk answers a
// hardware request with paperwork instead of hardware. The second sentence
// reframes the first — "second monitor" becomes "second ticket number" —
// which is the whole punchline, so the line needs nothing else around it.
function officeJoke(): string {
  return "I asked IT for a second monitor. They gave me a second ticket number.";
}

// The bounty gate admits a single line of 1 to 199 characters. Anything
// outside that range, or anything spanning more than one line, is refused
// before it can be judged, so reject it here instead of shipping it.
function checkLine(line: string): void {
  const tooShort = line.length < 1;
  const tooLong = line.length > 199;
  const multiLine = line.includes("\n");
  if (tooShort || tooLong || multiLine) {
    throw new Error(
      "line fails the gate: must be a single line under 200 characters",
    );
  }
}

const LINE = officeJoke();
checkLine(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
