import fs from 'node:fs'
import { loadConfig as unconfigLoad } from 'unconfig'
import { DEFAULT_CONFIG_PATH } from '../constant'

/** 加载配置文件 */
export async function loadConfig(configPath: string): Promise<{ config?: any, sources?: any }> {
  try {
    const { config, sources } = await unconfigLoad({
      sources: [
        {
          files: configPath,
          // default extensions
          extensions: ['ts', 'mts', 'cts', 'js', 'mjs', 'cjs', 'json', ''],
        },
      ],
    })
    return { config, sources }
  }
  catch (error) {
    console.log(error)
    return {}
  }
}

/**
 * 获取 apiConfig 配置文件路径
 * @param optionConfig 用户通过 --config 参数传入的路径
 */
export function getConfigPath(optionConfig?: string) {
  // 传了，但是路径不存在
  if (optionConfig && !fs.existsSync(optionConfig)) {
    console.error(`通过--config参数传入的配置文件 ${optionConfig} 不存在`)
    return
  }
  // 优先判断用户是否通过 --config 参数传入了配置文件
  const configFilePath
    = optionConfig && fs.existsSync(optionConfig)
      ? optionConfig
      : Object.values(DEFAULT_CONFIG_PATH).find(confPath => fs.existsSync(confPath))

  if (!configFilePath) {
    console.error('缺少配置文件，执行 genapi init 生成')
    return
  }
  return configFilePath
}
