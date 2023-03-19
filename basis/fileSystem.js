const fs = require('fs')
const process = require('process')

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

// 流式读取

/**
 * 创建读取文件流
 */
const rs = fs.createReadStream('./测试同步写入.txt')

/**
 * 监听data事件，获取每一段读取内容
 */
rs.on('data', chuck => {
  console.log(chuck, 'chuck')
})

/**
 * 监听end事件，获取文件读取结束
 */
rs.on('end', () => {
  console.log('文件读取结束')
})

/**
 * 复制文件脚本
 */

// 全部读取再写入
const data = fs.readFileSync('./测试同步写入.txt')
fs.writeFileSync('./复制文件.txt', data)
console.log(process.memoryUsage()) // 30486528

// 流读取写入
const copyRS = fs.createReadStream('./测试同步写入.txt')
const copyWS = fs.createWriteStream('./复制文件二')

copyRS.on('data', chuck => {
  copyWS.write(chuck) // 31281152
})
copyRS.on('end', () => {
  console.log(process.memoryUsage())
})

// 使用流式管道实现复制
const copyWS2 = fs.createWriteStream('./复制文件三.txt')
copyRS.pipe(copyWS2)

/**
 * 文件重命名
 */

// rename(当前文件路径， 修改后文件路径， 回调函数)
fs.rename('./复制文件.txt', './重命名/重命名后的文件.txt', err => {
  if (err) {
    return console.log('文件重命名错误', err)
  }
  console.log('文件重命名成功')
})

/**
 * 删除文件
 */
fs.unlink('./复制文件二', err => {
  if (err) {
    return console.log('删除文件失败', err)
  }
  console.log('删除文件成功')
})

fs.rm('./复制文件三.txt', err => {
  if (err) {
    return console.log('删除文件失败', err)
  }
  console.log('删除文件成功')
})

/**
 * 操作文件夹
 */

// 添加文件夹
fs.mkdir('./新增文件夹', err => {
  if (err) {
    return console.log('新增文件夹失败', err)
  }
  console.log('新增文件夹成功')
})

// 递归添加文件夹
fs.mkdir('./a/b/c', { recursive: true }, err => {
  if (err) {
    return console.log('新增文件夹失败', err)
  }
  console.log('新增文件夹成功')
})

// 查看文件夹
fs.readdir('./', (err, data) => {
  if (err) {
    return console.log('查看文件夹失败', err)
  }
  console.log(data)
})

// 删除文件夹
fs.rmdir('./新增文件夹', err => {
  if (err) {
    return console.log('删除文件夹失败', err)
  }
  console.log('删除文件夹成功')
})

// 递归删除文件夹
fs.rmdir('./a', { recursive: true }, err => {
  if (err) {
    return console.log('删除文件夹失败', err)
  }
  console.log('删除文件夹成功')
})
