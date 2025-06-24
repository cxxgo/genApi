import type { IParsered } from '../types'
import path from 'node:path'
import { groupApiByFileName } from '../utils'
import { writeApi } from './writeApi'
import { writeInterface } from './writeInterface'

const CWD = process.cwd()

export async function genApi(data: IParsered[]) {
  await genParaller(data)
}

function genParaller(data: IParsered[]) {
  const fns: void[] = []
  data.forEach((item) => {
    fns.push(genStation(item))
  })
  return Promise.all(fns)
}

/** 生成单个站点的api */
function genStation(data: IParsered) {
  const outputDir = path.join(CWD, data.outputDir) // 文件输出目录
  const apiGroup = groupApiByFileName(data.apis)
  console.log(`总共 ${(data.apis || []).length} 个接口生成中...`)
  writeApi(apiGroup, data.interfaces, { outputDir, apiBody: data.apiBody!, httpTpl: data.httpTpl || '' })

  // 只有当后缀是 ts 时才生成 interface
  const ext = apiGroup[0]?.fileExt
  if (ext === 'ts') {
    writeInterface(data.interfaces, { outputDir })
  }
}
