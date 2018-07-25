import json from 'rollup-plugin-json'
import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'

export default {
	input: 'index.js',
	output: {
		file: 'bundle.js',
		format: 'cjs'
	},
	plugins: [ 
		json(), 
		resolve({
			customResolveOptions: {
				moduleDirectory: 'node_modules'
			}
		}),
		babel({
			exclude: 'node_modules/**'
		}),
		commonjs()
	],
	external: ['lodash']
}