// const esbuild = require('esbuild');
import * as esbuild from 'esbuild';
esbuild
  .build({
    entryPoints: ['app.jsx'],
    bundle: true,
    outfile: 'out.js'
  })
  .catch(() => process.exit(1));
