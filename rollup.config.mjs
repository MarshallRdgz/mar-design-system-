import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import dts from 'rollup-plugin-dts'; // 👈 El nuevo aliado

export default [
  // PRIMERA CONFIGURACIÓN: Código JS y CSS
  {
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
        useTsconfigDeclarationDir: false,
        clean: true,
        check: false,
      }),
      postcss({
        inject: true,
        extract: false,
        minimize: true,
        use: [['sass', { api: 'modern-compiler' }]],
      }),
    ],
    external: ['react', 'react-dom', 'react/jsx-runtime'],
  },
  // SEGUNDA CONFIGURACIÓN: Generación forzada de tipos (.d.ts)
  {
    input: 'src/components/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.scss$/, /\.css$/], // Ignora estilos al generar tipos
  },
];
