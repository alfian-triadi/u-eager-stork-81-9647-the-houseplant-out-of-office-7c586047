// The Houseplant Out-of-Office — make.fun entry.
// Writes one out-of-office auto-reply, as if a houseplant wrote it,
// to /output/entry.txt. The gate requires 1–120 UTF-8 characters,
// not whitespace-only.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Out of office. I'm a cactus — unwatered since March, unbothered since forever. Your email can wait. So can I.";

// Enforce the competition gate locally: 1–120 characters, not whitespace-only.
const chars = [...LINE].length;
if (chars < 1 || chars > 120 || LINE.trim().length === 0) {
  throw new Error(`entry is ${chars} characters, must be 1–120`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
