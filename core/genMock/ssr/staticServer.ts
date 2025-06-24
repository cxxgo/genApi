import fs from 'node:fs'
import path from 'node:path'

const CWD = process.cwd()

/** 静态资源托管, 直接返回文件内容 */
export async function staticServer(reqUrl: string, res) {
  try {
    const fileUrl = path.join(CWD, reqUrl) // http://localhost:8088/static
    // 读取资源的信息, fs.Stats对象
    const stat = await fs.promises.stat(fileUrl)

    if (stat.isFile()) {
      // 请求文件
      sendFile(res, fileUrl)
    }
    else {
      // 请求文件夹
      sendDirectory(res, fileUrl)
    }
  }
  catch (error) {
    // 访问的资源不存在
    if (error.code === 'ENOENT') {
      res.statusCode = 404
      res.end('file/directory does not exist')
    }
    else {
      res.statusCode = 500
      res.end('something wrong with the server')
    }
  }
}

export async function sendFile(res, pathname) {
  const data = await fs.promises.readFile(pathname)
  const ext = pathname.split('.').pop()
  const contentTypeMap = {
    js: 'application/javascript',
  }
  res.writeHead(200, {
    'Content-Type': contentTypeMap[ext] || '',
  })
  res.end(data)
}

export async function sendDirectory(res, pathname) {
  const fileList = await fs.promises.readdir(pathname, { withFileTypes: true })
  // 相对路径，如 http://localhost:8088/static/example 相对 http://localhost:8088 的结果为 'static/example'
  const relativePath = path.relative(process.cwd(), pathname)

  // 构造返回的html结构体
  let content = '<ul>'
  fileList.forEach((file) => {
    const filePath = path.join('/', relativePath, file.name) // /static/example/test.txt
    content += `
      <li>
        <a href=${filePath}>${file.name}${file.isDirectory() ? '/' : ''}
        </a>
      </li>`
  })
  content += '</ul>'

  res.end(`<h1>Content of ${relativePath || 'root directory'}:</h1>${content}`)
}
