import esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/main.js'],
  nodePaths: ['dist'],
  bundle: true,
  outfile: 'bundle.js',
  sourcemap: true,
  format: 'esm',
  target: 'esnext',
  define: { __DEV__: 'false' },
  jsxDev: true,
  jsx: 'automatic',
}).catch(() => process.exit(1));
