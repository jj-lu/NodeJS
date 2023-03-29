const test = () => {
  console.log('测试模块化')
}

const test2 = () => {
  console.log('测试模块化2')
}

console.log(arguments.callee.toString(), '查看自执行函数')
// console.log()
// module.exports = test

// module.exports 导出多个数据
module.exports = {
  test,
  test2
}

// exports导出多个数据
exports.test = test
exports.test2 = test2
