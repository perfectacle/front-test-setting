import typescript from 'rollup-plugin-typescript2';
import tslint from 'rollup-plugin-tslint';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

export default [
    // Node and other module bulder for UMD build
    {
        input: 'src/index.ts',
        output: {
            file: pkg.main,
            format: 'umd'
        },
        name: 'utils',
        plugins: [
            typescript(),
            tslint()
        ]
    },

    // browser-friendly IIFE build
    {
        input: 'src/index.ts',
        output: {
            file: pkg.browser,
            format: 'iife'
        },
        name: 'utils',
        plugins: [
            typescript(),
            tslint(),
            uglify()
        ]
    },
]