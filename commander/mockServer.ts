import type { UserConfig } from '../core/types'
import fs from 'node:fs'
import log from 'npmlog'
import { genMock } from '../core/genMock'
import { createMockServer } from '../core/genMock/createMockServer'
import { getMockPath } from '../core/genMock/mockUtils'
import { parser } from '../core/parser'
import { getConfigPathFromLoal, getParseredDataFromLocal } from '../core/parser/localData'
import { getConfigPath, loadConfig } from '../core/utils/config'

export async function mockServer() {
  // 优先从本地取执行 genapi now 时带的config路径
  const localPath = getConfigPathFromLoal()
  const configFilePath = fs.existsSync(localPath) ? localPath : getConfigPath()
  if (!configFilePath)
    return

  const { config } = (await loadConfig(configFilePath)) as { config: UserConfig }
  let allApiData = await getParseredDataFromLocal()

  // 不存在本地解析数据
  if (!allApiData?.length) {
    log.verbose('不存在本地解析数据')
    allApiData = await parser(config)
    await genMock(allApiData, config.mock)
  }
  // 存在本地解析数据，但是不存在mock数据（执行 genapi now --no-mock）
  else {
    log.verbose('存在本地解析数据，但是不存在mock数据')
    const mockPath = await getMockPath()
    log.verbose(`mock 数据路径: ${mockPath}`)
    if (!fs.existsSync(mockPath)) {
      // 不存在 mock 目录
      await genMock(allApiData, config.mock)
    }
    else {
      // 存在 mock 目录，但是是空目录
      const mockFiles = fs.readdirSync(mockPath)
      if (!mockFiles.length) {
        log.verbose('存在 mock 目录，但是是空目录')
        await genMock(allApiData, config.mock)
      }
    }
  }
  createMockServer(config?.mock || {}, allApiData)
}
