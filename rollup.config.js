export default {
    input: 'src/main.js',
    output: {
        file: 'assets/bundle.js',
        format: 'cjs'
    },
    plugins: [],
    global: {
        // jquery: '$'  // When using jquery, it must be active.
    }
};
