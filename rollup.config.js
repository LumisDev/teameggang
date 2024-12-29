const path = require('path')
const resolve = require('@rollup/plugin-node-resolve')
const terse = require('@rollup/plugin-terser')
const babel = require('@rollup/plugin-babel')
const replace = require('@rollup/plugin-replace')
const commonjs = require('@rollup/plugin-commonjs')
const postcss = require('rollup-plugin-postcss')
const livereload = require('rollup-plugin-livereload')
const html = require('rollup-plugin-html')
const serve = require('rollup-plugin-serve')
const isDev = process.env.NODE_ENV === 'development'

/** @type {import('rollup').RollupOptions} */
module.exports = {
    input: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        dir: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        resolve(),
        babel(),
        html(),
        postcss({
            extract: true
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(isDev ? 'development' : 'production'),
            preventAssignment: true
        }),
        commonjs(),
        isDev && serve({
            contentBase: 'dist',
            historyApiFallback: true
        }),
        isDev && livereload('dist'),
        !isDev && terse()
    ]
}