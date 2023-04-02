const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')

const app = express()

/**
 * 全局中间件
 */
// 定义中间件方法，记录日志
function recordLogMiddle(request, response, next) {
  const { path, ip } = request
  fs.appendFileSync(__dirname + '/log.txt', `${Date.now()}: ${path} -- ${ip} \r\n`)
  next()
}
//使用中间件函数
app.use(recordLogMiddle)

/**
 * 中间件实现防盗链
 */
function checkRefererMiddle(request, response, next) {
  const referer = request.get('referer')
  if (referer) {
    const referUrl = new URL(referer)
    console.log(referUrl.host, referUrl.hostname, 'a')
    if (referUrl.hostname !== '127.0.0.1') {
      response.status(404)
      response.send('404 not found')
    } else next()
  }
  next()
}
app.use(checkRefererMiddle)

// get方法
app.get('/home', (request, response) => {
  console.log(request.path, '地址')
  console.log(request.query, '参数')
  console.log(request.ip, 'ip')
  console.log(request.get('host'), '请求头')
  response.end('welcome to express')
})

// 设置和获取路由参数
app.get('/user/:id', (request, response) => {
  console.log(request.params.id, '路由参数')
  response.send('用户ID：' + request.params.id)
})

/**
 * 使用body-parser解析body请求参数
 */
// json
const jsonBody = bodyParser.json()

// query body
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// post方法
app.post('/login', urlencodedParser, (request, response) => {
  console.log(request.body)
  console.log(request.query)
  response.end('post to express')
})

// put方法
app.put('/update', (request, response) => {
  response.end('update to express')
})

// delete方法
app.delete('/delete', (request, response) => {
  response.end('delete to express')
})

// 匹配所有方法
app.all('/all', (request, response) => {
  response.end('all method')
})

/**
 * 其他响应设置
 */
app.get('/other', (request, response) => {
  // 响应文件下载
  // response.download(__dirname + '/first.js')

  // 重定向
  // response.redirect('https://www.baidu.com')

  // json
  // response.json({
  //   username: 'jj',
  //   age: 18
  // })

  // 响应文件内容
  response.sendFile(__dirname + '/first.js')
})

/**
 * 路由中间件
 */
const checkMiddle = (request, response, next) => {
  if (request.query.id) {
    next()
  } else {
    response.send('请输入ID')
  }
}
app.get('/edit', checkMiddle, (request, response) => {
  response.send('编辑成功')
})
app.get('/delete', checkMiddle, (request, response) => {
  response.send('删除成功')
})

/**
 * 静态资源中间件设置
 * (如果静态资源与路由规则同时匹配，谁先匹配谁就响应)
 */
app.use(express.static(__dirname + '/public'))

// 匹配所有路径，可以作为404拦截
app.all('*', (request, response) => {
  // 设置状态码
  // response.status(404)
  // 设置请求头
  // response.set('bbc', 'jj')
  // 返回
  // response.send('404')

  response.status(404).set('aab', 'jj').send('404 not found')
})

app.listen(9000, () => {
  console.log('9000 已启动')
})
