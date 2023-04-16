const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/testmongo')

/**
 * 监听连接成功回调
 */
// mongoose.connection.on('open', () => {
//   console.log('连接成功')
// })
// 官方推荐监听连接成功使用once 回调函数执行性一次
mongoose.connection.once('open', () => {
  console.log('连接成功')

  // 创建文档中的结构对象，设置文档中的属性以及属性值的类型
  let userSchema = new mongoose.Schema({
    id: Number,
    name: String,
    age: Number
  })

  // 创建模型对象，是一个对文档操作分装的对象
  let userModel = mongoose.model('users', userSchema)

  const jjTest = new userModel({
    id: 1,
    name: 'jj_test',
    age: 19
  })

  jjTest.save()
  // userModel.create(
  //   {
  //     id: 1,
  //     name: 'jj_test',
  //     age: 18
  //   },
  //   (err, data) => {
  //     if (err) {
  //       return console.log(err)
  //     }
  //     console.log(data, 'finish')
  //   }
  // )
})

/**
 * 监听连接失败回调
 */
mongoose.connection.on('error', () => {
  console.log('连接失败')
})

/**
 * 监听关闭连接
 */
mongoose.connection.on('close', () => {
  console.log('连接关闭')
})

/**
 * 手动关闭数据库连接
 */
// setTimeout(() => {
//   mongoose.disconnect()
// }, 2000)
