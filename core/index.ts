import type { UserConfig } from './types'
import { genApi } from './genApi/index'
import { createMockServer } from './genMock/createMockServer'
import { genMock } from './genMock/index'
import { parser } from './parser/index'

function defineConfig(config: Partial<UserConfig>) {
  return config
}
export { createMockServer, defineConfig, genApi, genMock, parser }
