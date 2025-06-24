import fs from 'node:fs'
import path from 'node:path'

/** 清空某个目录下所有的文件/文件夹 */
export function cleanDir(folderPath) {
  // 判断文件夹是否存在
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file, index, arr) => {
      const dir = `${folderPath}/${file}`
      if (fs.lstatSync(dir).isFile()) {
        fs.unlinkSync(dir) // 删除文件
      }
      else if (fs.lstatSync(dir).isDirectory()) {
        cleanDir(dir) // 递归
        fs.rmdirSync(dir) // 删除当前目录
      }
    })
  }
}

/**
 *  创建文件夹
 * @params thePath 文件或文件夹路径 /aaa/bbb  或 /aaa/bbb/example.ext, 如果路径 /aaa/bbb 不存在，则创建
 */
export function createFolder(thePath: string) {
  const theDirname = path.dirname(thePath)
  if (!fs.existsSync(theDirname)) {
    fs.mkdirSync(theDirname, { recursive: true })
  }
}
