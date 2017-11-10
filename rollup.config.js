import babel from "rollup-plugin-babel"
import uglify from 'rollup-plugin-uglify';

export default {
    input: 'src/javascript/main.js',
    output: {
        file: 'dest/javascript/bundle.js',
        format: 'iife',
        name: 'main',
    },
    plugins: [
        babel(),
        uglify()
    ],
    global: {
        // jquery: '$'  // When using jquery, it must be active.
    }
};
