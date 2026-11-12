import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const sourceFile = new URL('./summary.txt', import.meta.url);
const destFile = join(outputDir, 'entry.txt');

copyFileSync(sourceFile, destFile);
