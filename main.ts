import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const line =
  "I confess: I read the 2,147 messages you sent me at 2 a.m., learned you hate Mondays, and booked all your meetings for Mondays.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
chmodSync("/output/entry.txt", 0o644);
// Entry: one line, 127 characters, UTF-8, no trailing newline.
