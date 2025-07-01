import type { UserConfig } from './core/types'

export * from './commander/index'
export * from './core/types'
export { getRunEnv } from './core/utils'

interface IDefineConfig {
  /** 当前版本号 */
  version: string
}
export async function defineConfig(config: UserConfig | ((data: IDefineConfig) => UserConfig) | ((data: IDefineConfig) => Promise<UserConfig>) | Promise<UserConfig>) {
  return typeof config === 'function' ? await config({ version: process.env.genapiVersion }) : config
}
