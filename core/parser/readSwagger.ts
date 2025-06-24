import fs from 'node:fs'
import path from 'node:path'
import axios from 'axios'

const CWD = process.cwd()

/** 获取 swagger json */
export async function readSwagger(swaggerUrl: string) {
  const errMsg = `swagger地址访问异常👿👿👿 \n${swaggerUrl}`
  try {
    if (swaggerUrl.startsWith('http')) {
      const res = await axios.get(swaggerUrl)
      if (res.status === 200) {
        return res.data
      }
      else {
        console.log('\x1B[31m%s\x1B[0m', errMsg)
        throw new Error(errMsg)
      }
    }
    else {
      // 从本地读取数据
      const filePath = path.resolve(CWD, swaggerUrl)
      const data = fs.readFileSync(filePath, 'utf-8')
      return JSON.parse(data)
    }
  }
  catch (error) {
    console.log('\x1B[31m%s\x1B[0m', errMsg)
    throw new Error(error)
  }
}
