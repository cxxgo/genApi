#! /usr/bin/env node

const commander = require('commander')
const log = require('npmlog')

const program = commander.program

const { init, now, mockServer } = require('../dist/index')
const pkgJson = require('../package.json')

program.version(pkgJson.version)

log.level = 'info'
log.addLevel('success', 4500, { bg: 'green' })

// 注册命令
program
  .command('init')
  .option('-f --force', '是否重新生成 genapi 配置文件')
  .option('--verbose', '输出日志')
  .action((options) => {
    options.verbose && (log.level = 'verbose')
    init(options)
  })

program
  .command('now')
  .option('-c --config <configPath>', '配置文件路径')
  .option('--no-mock', '是否不生成 mock 数据')
  .option('--verbose', '输出日志')
  .action((options) => {
    options.verbose && (log.level = 'verbose')
    console.log()
    console.log(`当前版本: ${pkgJson.version}`)
    console.log()
    process.env.genapiVersion = pkgJson.version
    now(options)
  })

program
  .command('mock-server')
  .option('--verbose', '输出日志')
  .action((options) => {
    options.verbose && (log.level = 'verbose')
    mockServer()
  })

// program.helpInformation = () => {
//   return `
//   命令                        作用
//   ----------------------------------------------------------
//   genapi --version            输出版本号
//   genapi --help               输出帮助信息
//   genapi init [-f,--force]    生成 genapi 配置文件
//   genapi now                  生成接口
//   genapi mock-server          启动本地mock服务器
// `
// }

program.parse(process.argv)
