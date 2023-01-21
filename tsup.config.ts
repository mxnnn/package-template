import type { Options } from 'tsup';

export default {
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  splitting: true,
  treeshake: true,
  clean: true,
  target: 'node16',
  dts: true,
  minify: true,
  minifyIdentifiers: true,
  minifySyntax: true,
  minifyWhitespace: true,
} satisfies Options;
