import path from 'node:path'

const CWD = process.cwd()

/** 配置文件名称 */
export const CONFIG_FILE_NAME = 'genapi.config'

/** 默认的配置文件路径 */
export const DEFAULT_CONFIG_PATH = {
  ts: path.join(CWD, `${CONFIG_FILE_NAME}.ts`),
  js: path.join(CWD, `${CONFIG_FILE_NAME}.js`),
}

/** mock 服务默认端口号 */
export const MOCK_SERVER_PORT = 8090
