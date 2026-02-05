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
    // 1. GENERACIÓN DE PROPS: Conectamos con el tsconfig que genera los tipos (.d.ts)
    typescript({
      tsconfig: 'tsconfig.app.json',
      useTsconfigDeclarationDir: true,
      clean: true,
    }),
    // 2. CSS SIN ERRORES: Genera archivo físico Y permite inyección
    postcss({
      extract: 'index.css', // Genera dist/index.css (respeta tu package.json)
      inject: true, // Permite que el CSS funcione aunque el usuario no lo importe
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
  // 3. EXTERNOS: Evitamos duplicar React para que no haya errores de "Hooks"
  external: ['react', 'react-dom', 'react/jsx-runtime'],
};
