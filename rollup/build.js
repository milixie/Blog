const rollup = require('rollup')

const inputOptions = {
	input: 'index.js',
	external: '',
	plugins: [],
	onwarn: '',
	cache: '',
	acorn: '',
	context: '',
	moduleContext: '',
	legacy: ''
}
const outputOptions = {
  // 核心参数
  file: 'bundle.js',   // 若有bundle.write，必填
  format: 'cjs', // 必填
  name: 'test',
  globals: '',

 
}

async function build () {
	const bundle = await rollup.rollup(inputOptions)

	console.log(bundle.imports, bundle.exports, bundle.modules)

	const { code, map } = await bundle.generate(outputOptions)

	await bundle.write(outputOptions)
}

build()

