const fs = require('node:fs')
const path = require('node:path')

const CWD = process.cwd()

const swaggerList = [
  // path.resolve(CWD, './__test__/json/swagger1.json'),
  // path.resolve(CWD, './__test__/json/swagger2.json'),
  // path.resolve(CWD, './__test__/json/swagger3.json'),
  // path.resolve(CWD, './__test__/json/swagger4.json'),
  path.resolve(CWD, './__test__/json/swagger5.json'),
]

const wordsArr = [
  ['测试哦', ['哈哈', '嘿嘿']],
  ['userName', 'noodles'],
]

function replaceFn(str) {
  let _str = str
  wordsArr.forEach((word) => {
    const word1 = word[1]
    const newVal = typeof word1 === 'string' ? word1 : word1[Math.floor(Math.random() * word1.length)]
    _str = _str.replace(new RegExp(word[0], 'g'), newVal)
  })
  return _str
}

swaggerList.forEach((url) => {
  let str = fs.readFileSync(url, 'utf-8')
  str = replaceFn(str)
  fs.writeFileSync(url, str)
})
