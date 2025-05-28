import esbuild from 'esbuild';

let context = await esbuild.context({
  entryPoints: ['src/main.jsx'],
  nodePaths: ['dist'],
  bundle: true,
  outdir: 'www/js',
  sourcemap: true,
  format: 'esm',
  target: 'esnext',
  define: { __DEV__: 'false' },
  jsx: 'automatic',
}).catch(() => process.exit(1));

await context.serve({
  servedir: 'www',
})
