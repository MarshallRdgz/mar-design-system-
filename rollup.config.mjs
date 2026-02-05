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
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true,
    },
  ],

  plugins: [
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extract: true,
      minimize: true,
      // MODIFICACIÓN: Agregada API moderna para evitar el error de Legacy JS API
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
  // MODIFICACIÓN: Agregado react/jsx-runtime para evitar error de Dispatcher
  external: ['react', 'react-dom', 'react/jsx-runtime'],
};
