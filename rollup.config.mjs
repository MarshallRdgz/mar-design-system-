import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/components/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      interop: 'auto',
    },
    {
      file: 'dist/index.esm.js', // Este es el que usa Vite/Boilerplate
      format: 'esm',
      sourcemap: true,
    },
  ],

  plugins: [
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extract: false, // 👈 CAMBIO: Ponlo en false o bórralo
      inject: true, // 👈 AÑADIR: Esto inyecta el CSS en el <head> automáticamente
      minimize: true,
      use: [
        [
          'sass',
          {
            api: 'modern-compiler',
          },
        ],
      ],
    }),
  ],
  external: ['react', 'react-dom', 'react/jsx-runtime'],
};
