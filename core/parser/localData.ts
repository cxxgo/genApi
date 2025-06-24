import type { IParsered } from '../types'
import fs from 'node:fs'
import path from 'node:path'
import { readDataFromLocal, saveDataToLocal } from '../utils'

/** 将解析后的数据保存到本地 */
export async function saveParseredDataToLocal(data: any) {
  const p = getParseredDataPath()
  saveDataToLocal(p, data)
}
/** 从本地读取解析后的数据 */
export async function getParseredDataFromLocal(): Promise<IParsered[]> {
  try {
    const p = getParseredDataPath()
    const dataStr = readDataFromLocal(p)
    return JSON.parse(dataStr)
  }
  catch (error) {
    return []
  }
}

/** 获取解析后的数据的存储路径 */
function getParseredDataPath() {
  const basename = path.basename(process.cwd()) // 运行目录路径最后一个斜杠后的内容
  // link 方式运行, 数据会输出到本项目来，加前缀用于区分
  return path.join(__dirname, `../temp/${basename}-parseredData.json`)
}

/** 将config配置文件路径存储到本地 */
export function saveConfigPathToLocal(configPath: string) {
  const p = getConfigFileKey()
  // 数据追加
  if (fs.existsSync(p)) {
    const dataStr = readDataFromLocal(p) // 本地所有用户配置
    const obj = dataStr ? JSON.parse(dataStr) : {}
    obj.configPath = configPath
    saveDataToLocal(p, obj)
  }
  // 文件新增
  else {
    saveDataToLocal(p, { configPath })
  }
}

/** 从本地读取config配置文件路径 */
export function getConfigPathFromLoal(): string {
  try {
    const p = getConfigFileKey()
    const dataStr = readDataFromLocal(p)
    const obj = JSON.parse(dataStr)
    return obj.configPath
  }
  catch (error) {
    return ''
  }
}

/** 获取配置文件存储名称 key */
function getConfigFileKey() {
  const basename = path.basename(process.cwd()) // 运行目录路径最后一个斜杠后的内容
  // link 方式运行, 数据会输出到本项目来，加前缀用于区分
  return path.join(__dirname, `../temp/${basename}-config.json`)
}
