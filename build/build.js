import * as esbuild from 'esbuild';
import process from 'node:process';
import path from 'node:path';
import { createBuildSettings } from './settings.js';
import clean from './clean.js';

const settings = createBuildSettings({ minify: true });

clean(path.resolve(process.cwd(), settings.outdir ?? 'dist'));

await esbuild.build(settings);