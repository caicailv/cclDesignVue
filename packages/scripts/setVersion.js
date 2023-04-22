const readline = require('readline')
const fs = require('fs')
const path = require('path')
const url = path.join(__dirname, '../ccl-design/package.json')
const pkg = JSON.parse(fs.readFileSync(url, 'utf-8'))

const checkVersion = (iv, pv) => {
  const ivArr = iv.split('.')
  const pvArr = pv.split('.')
  if (ivArr.length != 3 || pvArr.length != 3) return false
  const ivNum = ivArr.map((item) => Number(item))
  const pvNum = pvArr.map((item) => Number(item))
  if (ivNum.includes(NaN)) return false
  if (ivNum[0] != pvNum[0]) return ivNum[0] > pvNum[0]
  if (ivNum[1] != pvNum[1]) return ivNum[1] > pvNum[1]
  return ivNum[2] > pvNum[2]
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})
const handleCmd = (answer) => {
  if (checkVersion(answer, pkg.version)) {
    fs.writeFileSync(url, JSON.stringify({ ...pkg, version: answer }, null, 2))
    console.log(`版本号已更新为${answer}`)
    rl.close()
  } else {
    rl.question(`版本号不符合规范,请重新输入:\n`, handleCmd)
  }
}

const init = () => {
  rl.question(`当前版本号为${pkg.version},请输入新的版本号:\n`, handleCmd)
}

init()
