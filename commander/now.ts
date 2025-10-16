import type { UserConfig } from '../core/types'
import { genApi } from '../core/genApi'
import { genMock } from '../core/genMock'
import { parser } from '../core/parser'
import { saveConfigPathToLocal } from '../core/parser/localData'
import { getConfigPath, loadConfig } from '../core/utils/config'

export async function now(options: {
  /** 用户传入的 config 配置文件路径 */
  config: string
  /** 是否生成 mock 数据 */
  mock: boolean
}) {
  const configFilePath = getConfigPath(options.config)
  if (!configFilePath)
    return

  saveConfigPathToLocal(configFilePath)
  const { config } = (await loadConfig(configFilePath)) as { config: UserConfig }
  if (config?.apiList?.every(item => item.gen === false)) {
    console.log('\x1B[33m%s\x1B[0m', '没有需要生成的数据，请检查配置')
    console.log()
    return
  }
  parser(config).then((parseredData) => {
    genApi(parseredData, config.formatter)
    if (options.mock) {
      genMock(parseredData, config.mock)
    }
  })
}
