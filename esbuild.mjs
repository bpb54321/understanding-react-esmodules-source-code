import esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/main.jsx'],
  nodePaths: ['dist'],
  bundle: true,
  outfile: 'bundle.js',
  sourcemap: true,
  format: 'esm',
  target: 'esnext',
  define: { __DEV__: 'false' },
  jsxDev: false,
  jsx: 'automatic',
}).catch(() => process.exit(1));
