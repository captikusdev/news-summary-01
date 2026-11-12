import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const sourceFile = new URL('./summary.txt', import.meta.url);
const destFile = join(outputDir, 'entry.txt');

copyFileSync(sourceFile, destFile);

// Guard: verify that the written entry matches the source exactly.
const sourceBuffer = readFileSync(sourceFile);
const destBuffer = readFileSync(destFile);
if (!sourceBuffer.equals(destBuffer)) {
  throw new Error('Integrity check failed: written entry.txt differs from summary.txt');
}
