// const esbuild = require('esbuild');
import * as esbuild from 'esbuild';
esbuild
  .build({
    entryPoints: ['app.jsx'],
    bundle: true,
    outdir: 'public'
  })
  .catch(() => process.exit(1));
