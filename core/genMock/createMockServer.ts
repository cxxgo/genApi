import type { IMock, IParsered } from '../types'
import http from 'node:http'
import path from 'node:path'
import Mock from 'better-mock'
import log from 'npmlog'
import { MOCK_SERVER_PORT } from '../constant'
import { portIsOccupied } from '../utils'
import { getMockPath } from './mockUtils'
import { ssrServer } from './ssr/server'
import { staticServer } from './ssr/staticServer'

export async function createMockServer(mockConfig: IMock, allApiData: IParsered[]) {
  const MOCK_OUTPUT_DIR = await getMockPath()
  log.verbose('mock 数据读取路径', MOCK_OUTPUT_DIR)
  const port = await portIsOccupied(mockConfig.port || MOCK_SERVER_PORT)
  const server = http.createServer()

  server.on('request', async (req, res) => {
    const _url = req.url.split('?')[0]
    const _method = req.method

    // 访问首页
    if (_url === '/') {
      ssrServer(allApiData, mockConfig, res)
    }
    else if (_url === '/favicon.ico') {
      res.end()
    }
    // 访问静态资源目录
    else if (_url.split('/')[1] === 'static') {
      staticServer(_url, res)
    }
    // 访问接口
    else {
      res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': '*',
      })

      const obj: { url: string, method: string, outputInterface: string, outputType: string, stationFlag: string }
        = {} as any
      // 找到 url 相同的api
      ;(allApiData || []).find((item) => {
        // eslint-disable-next-line array-callback-return
        return (item.apis || []).find((theOne) => {
          if (
            isSameApi(
              { url: theOne.url.split('?')[0], method: theOne.method },
              { url: req.url.split('?')[0], method: req.method },
              mockConfig,
            )
          ) {
            obj.url = theOne.url
            obj.method = theOne.method
            obj.outputInterface = theOne.outputInterface
            obj.outputType = theOne.outputType
            obj.stationFlag = item.stationFlag
            return true
          }
        })
      })

      if (Object.keys(obj).length) {
        try {
          const { stationFlag, outputInterface, outputType } = obj
          const cmdInterfacePath = path.join(MOCK_OUTPUT_DIR, stationFlag, './_interfaces.cmd.js') // 'D:\____own____\genApi\mock' +  'station0'
          delete require.cache[require.resolve(cmdInterfacePath)] // 删除require缓存, 保证拿到最新的mock数据
          // eslint-disable-next-line ts/no-require-imports
          const theInterface = require(cmdInterfacePath)
          const interfaceFn = theInterface[outputInterface] // interface.GreenBookGratefulInfoResp
          if (interfaceFn && typeof interfaceFn === 'function') {
            // 接口返回数据是个数组
            if (outputType === 'array') {
              const mockObj = Mock.mock({ 'theArray|1-10': [interfaceFn()] }).theArray // Mock.mock({ 'theArray|1-10': [ EarthDeptMetaRespeFanHuiMoXing() ] }).theArray
              res.end(JSON.stringify(mockObj))
            }
            else {
              const mockObj = Mock.mock(interfaceFn()) // Mock.mock(interface.GreenBookGratefulInfoResp())
              res.end(JSON.stringify(mockObj))
            }
          }
          else {
            res.end()
          }
        }
        catch (error) {
          res.end(`接口解析出错 ${error}`)
        }
      }
      else {
        if (_method.toLowerCase() === 'options') {
          res.end()
        }
        else {
          res.end(`资源不存在${_url}`)
        }
      }
    }
  })

  server.listen(port, () => {
    console.log('\x1B[32m%s\x1B[0m', `mock 服务启动成功: http://localhost:${port}`)
  })
}

/** 判断是否是同一个api */
function isSameApi(theOne: { url: string, method: string }, req, mockConfig: IMock) {
  const { url: reqUrl, method: reqMethod } = req
  const method = theOne.method
  let url = theOne.url
  if (mockConfig?.rewrite && typeof mockConfig.rewrite === 'function') {
    url = mockConfig.rewrite({ url })
  }

  const methodIsSame = method && reqMethod && method.toLowerCase() === reqMethod.toLowerCase()

  if (!methodIsSame) {
    return false
  }
  if (url === reqUrl) {
    return true
  }

  // url示例:  /api/v1/person/bank-record/${id}
  // reqUrl示例: /api/v1/person/bank-record/123456
  if (url.includes('${')) {
    // 将 '/api/v1/person/bank-record/${id}'  处理成 '/api/v1/person/bank-record/(.*)?'
    const regStr = url.replace(/\$\{(.*)?\}/g, '(.*)?')
    const reg = new RegExp(regStr) //   /\/api\/v1\/person\/bank-record\/(.*)?/
    return reg.test(reqUrl)
  }
  return false
}
