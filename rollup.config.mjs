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
    typescript({
      tsconfig: 'tsconfig.app.json',
      // Cambiado a false para que use el declarationDir del tsconfig
      useTsconfigDeclarationDir: false, 
      clean: true,
    }),
    postcss({
      inject: true,
      extract: false,
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