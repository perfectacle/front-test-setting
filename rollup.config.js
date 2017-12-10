import typescript from 'rollup-plugin-typescript2';
import tslint from 'rollup-plugin-tslint';
import uglify from 'rollup-plugin-uglify';
import pkg from './package.json';

export default {
    input: 'src/index.ts',
    output: {
        file: pkg.main,
        format: 'iife'
    },
    name: 'utils',
    plugins: [
        typescript(),
        tslint(),
        uglify()
    ]
}