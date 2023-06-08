// const esbuild = require('esbuild');
import * as esbuild from 'esbuild';
// esbuild
//   .build({
//     entryPoints: ['app.jsx'],
//     outdir: 'dist',
//     bundle: true,
//     sourcemap: true,
//     minify: true,
//     splitting: true,
//     format: 'esm',
//     target: ['esnext']
//   })
//   .catch(() => process.exit(1));
let ctx = await esbuild.context({
  entryPoints: ['app.jsx'],
  bundle: true,
  outdir: 'dist'
});
await ctx.watch();
