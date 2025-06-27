#! /usr/bin/env node

const commander = require('commander')
const log = require('npmlog')

const program = commander.program
const { init, now, mockServer, getRunEnv } = require('../dist/index')
const pkgJson = require('../package.json')

log.level = 'info'
log.addLevel('success', 4500, { bg: 'green' })

const version = pkgJson.version
const runEnv = getRunEnv()

process.env.genapiVersion = version // 供全局使用
process.env.genapiRunEnv = runEnv

log.verbose('当前运行环境', runEnv)

program.version(version)

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
    console.log(`当前版本: ${version}`)
    console.log()
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
