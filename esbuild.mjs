import esbuild from 'esbuild';
import babel from 'esbuild-plugin-babel'

let context = await esbuild.context({
  // entryPoints: ['packages/react-dom/client.js'],
  entryPoints: ['src/main.jsx'],
  nodePaths: ['packages'],
  bundle: true,
  outdir: 'www/js',
  sourcemap: true,
  format: 'esm',
  target: 'esnext',
  // jsx: 'automatic', 
  define: { __DEV__: 'false' },
  plugins: [babel()]
}).catch(() => process.exit(1));

await context.serve({
  servedir: 'www',
  port: 8000,
})
