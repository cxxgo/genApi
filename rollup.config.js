const { dts } = require('rollup-plugin-dts')
const typescript = require('rollup-plugin-typescript2')
// const json = require('@rollup/plugin-json')

module.exports = [
  // {
  //   input: 'core/index.ts',
  //   output: {
  //     file: 'dist/index.js',
  //     format: 'cjs',
  //   },
  //   plugins: [
  //     // json(),
  //     typescript({
  //       include: ['core/**'],
  //     }),
  //   ],
  // },
  {
    input: 'core/genMock/ssr/client.ts',
    output: {
      file: 'static/client.js',
      format: 'es',
    },
    plugins: [
      typescript({
        include: ['core/genMock/ssr/**'],
      }),
    ],
  },
  {
    input: 'index.ts',
    output: {
      file: 'dist/index.js',
      format: 'cjs',
    },
    plugins: [
      typescript({
        include: ['index.ts', 'commander/**', 'core/**'],
      }),
    ],
  },
  {
    input: 'index.ts',
    output: [{ file: 'dist/type.d.ts', format: 'es' }],
    plugins: [dts()],
  },
]
