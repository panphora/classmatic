import babel from 'rollup-plugin-babel';
import filesize from 'rollup-plugin-filesize';
import { terser } from "rollup-plugin-terser";
import resolve from "rollup-plugin-node-resolve"

export default {
  input: 'src/classmatic.js',
  output: {
    name: 'Classmatic',
    file: 'dist/classmatic.min.js',
    format: 'umd',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    filesize(),
    terser({
      compress: {
        drop_debugger: false,
      },
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ]
}