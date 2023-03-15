const fs = require('fs')

// 写入文件

/**
 * fs.writeFile(文件名, 待写入的数据, 选项配置（可选）, 写入回调函数)
 */
fs.writeFile('./测试写入文件.txt', '测试创建写入一个txt文件', err => {
  if (err) {
    // 写入完成的回调函数，存在err表示写入失败，err为null表示正常写入
    return console.log('写入失败')
  }
  console.log('文件写入成功')
})
console.log('异步写入')

/**
 * fs.writeFile(文件名, 待写入的数据, 选项配置（可选)
 */
fs.writeFileSync('./测试同步写入.txt', '测试创建写入一个同步txt文件')
console.log('同步写入')

// 追加写入文件

/**
 * fs.appendFile(文件名, 待写入的数据, 选项配置（可选）, 写入回调函数)
 */
fs.appendFile('./测试写入文件.txt', '，测试追加写入文件', err => {
  if (err) {
    return console.log('追加写入文件失败')
  }
  console.log('追加写入文件成功')
})

fs.appendFileSync('./测试同步写入.txt', '测试追加同步写入')

fs.writeFile('./测试写入文件.txt', '\r\n测试换行使用writeFile 追加写入文件', { flag: 'a' }, err => {
  if (err) {
    return console.log('writeFile 追加写入文件失败')
  }
  console.log('writeFile 追加写入文件成功')
})

// 流式写入

/**
 * 建立一个写文件流
 */
const ws = fs.createWriteStream('./流式写入.txt')

ws.write('写入一，\r\n')
ws.write('写入二，\r\n')
ws.write('写入三，\r\n')
ws.write('写入四。\r\n')

ws.close()

// 读取文件

/**
 * 异步读取文件
 */
fs.readFile('./测试写入文件.txt', (err, data) => {
  if (err) {
    return console.log('文件读取失败')
  }
  console.log(data.toString())
})

/**
 * 同步读取文件
 */
const readFileSyncData = fs.readFileSync('./测试同步写入.txt')
console.log(readFileSyncData.toString())
