import esbuild from 'esbuild';
import process from 'node:process';
import path from 'node:path';
import fs from 'node:fs';
import { createBuildSettings } from './settings.js';
import clean from './clean.js';
import indexHTML from './index.html.js';

const settings = createBuildSettings({ 
  sourcemap: true,
});

const outdir = path.resolve(process.cwd(), settings.outdir ?? 'dist')

clean(outdir);

if (!fs.existsSync(outdir)) {
  fs.mkdirSync(outdir);
}

const ctx = await esbuild.context(settings);

ctx.watch();

fs.writeFileSync(`${process.cwd()}/dist/index.html`, indexHTML());

const { host, port } = await ctx.serve({
  port: 5500,
  servedir: 'dist',
});

console.log(`Serving app at ${host}:${port}.`);