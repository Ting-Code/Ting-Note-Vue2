const fs = require('fs')
const path = require('path')
//本地测试地址
const mockBaseURL = '//note-server.hunger-valley.com'
//上线地址
const realBaseURL = '//note-server.hunger-valley.com'

//isDev输入初始ture，则为开发环境
exports.config = function({ isDev = true } = { isDev: true } ) {
  let fileTxt = `
  module.exports = {
    baseURL: '${isDev ? mockBaseURL : realBaseURL}'
  }
  `
  //写入文件
  fs.writeFileSync(path.join(__dirname, '../src/helpers/config-baseURL.js'), fileTxt)
}
