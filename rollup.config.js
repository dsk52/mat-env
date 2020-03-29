import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

export default {
  input: './mat/src/javascript/script.js',
  output: {
    file: 'dest/javascript/script.js',
    format: 'iife',
    name: 'main'
  },
  plugins: [
    babel(),
    uglify()
  ]
}
