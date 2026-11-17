import { spawnSync } from "node:child_process";
import { mkdirSync } from "node:fs";
import path from "node:path";

const temporaryDirectory = path.resolve(".tmp");
const vitestCli = path.resolve("node_modules", "vitest", "vitest.mjs");

mkdirSync(temporaryDirectory, { recursive: true });

const result = spawnSync(process.execPath, [vitestCli, "run", ...process.argv.slice(2)], {
  stdio: "inherit",
  env: {
    ...process.env,
    TEMP: temporaryDirectory,
    TMP: temporaryDirectory,
    TMPDIR: temporaryDirectory,
  },
});

process.exitCode = result.status ?? 1;
