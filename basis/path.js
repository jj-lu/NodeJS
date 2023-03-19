const path = require('path')

/**
 * resolve 拼接规范的绝对路径
 */
console.log(path.resolve(__dirname, 'path.js')) // D:\JJ\code\NodeJS\basis\path.js

/**
 * sep 获取操作系统的路径分隔符
 */
console.log(path.sep) // \

/**
 * parse 解析路径并返回对象
 */

// __filename 当前文件的绝对路径
console.log(__filename)
console.log(path.parse(__filename))

/**
 * basename 获取路径的基础名称
 */
console.log(path.basename(__filename))

/**
 * extname 获取路径的扩展名
 */
console.log(path.extname(__filename))

/**
 * dirname 获取路径的目录名
 */
console.log(path.dirname(__filename))
