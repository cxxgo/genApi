import type { IApiGroup, IMock, IParsered } from '../types'
import path from 'node:path'
import log from 'npmlog'
import { groupApiByFileName } from '../utils'
import { cleanDir } from '../utils/file'
import { getMockPath } from './mockUtils'
import { writeMockApi } from './writeMockApi'
import { writeMockIndex } from './writeMockIndex'
import { writeMockInterface } from './writeMockInterface'

let MOCK_OUTPUT_DIR = '' // mock 数据输出路径

/** 生成 mock 数据 */
export async function genMock(data: IParsered[], mockConfig: IMock) {
  MOCK_OUTPUT_DIR = await getMockPath()
  console.log(`mock 数据生成中...`)
  log.verbose('mock 数据输出路径', MOCK_OUTPUT_DIR)
  cleanDir(MOCK_OUTPUT_DIR)
  await genMockParaller(data, mockConfig)
}

/** 生成所有站点的 mock 数据 */
function genMockParaller(data: IParsered[], mockConfig: IMock) {
  const fn: any[] = []
  const groupApiList: { outputDir: string, stationFlag: string, apiGroup: IApiGroup[] }[] = [] // 所有站点的 apiGroup 数据
  data.forEach((item) => {
    const apiGroup = groupApiByFileName(item.apis)
    groupApiList.push({ outputDir: item.outputDir, stationFlag: item.stationFlag, apiGroup })
    fn.push(genStationMock(item, apiGroup, mockConfig))
  })
  // 将所有站点的 mock 接口写入入口文件 mock/index.js
  fn.push(writeMockIndex(groupApiList, { mockRootPath: MOCK_OUTPUT_DIR }))
  return Promise.all(fn)
}

/** 生成单个站点的 mock数据 */
function genStationMock(data: IParsered, apiGroup: IApiGroup[], mockConfig: IMock) {
  const outputDir = path.join(MOCK_OUTPUT_DIR, data.stationFlag) // xxx/mock/station0
  writeMockApi(apiGroup, { absOutputDir: outputDir, fieldRules: mockConfig?.fieldRules })
  writeMockInterface(data.interfaces, { outputDir, fieldRules: mockConfig?.fieldRules })
  writeMockInterface(data.interfaces, { outputDir, fieldRules: mockConfig?.fieldRules, cmd: true }) // cmd格式， 用于 mock server
}
