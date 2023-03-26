const http = require('http')
const url = require('url')

const serve = http.createServer((request, response) => {
  // 获取请求方法
  // console.log(request.method, 'method')

  // //获取请求的url
  // console.log(request.url, 'url')

  // //获取http协议的版本号
  // console.log(request.httpVersion, 'version')

  // //获取http协议的请求头
  // console.log(request.headers, 'header')

  // // 获取请求头的host
  // console.log(request.headers.host, 'host')

  // // 获取post请求的body信息
  // let body = ''
  // request.on('data', chuck => {
  //   body += chuck
  // })
  // request.on('end', () => {
  //   console.log(body, 'body')
  // })

  // // 利用旧版url模块解析url和query请求参数
  // let requestObj = url.parse(request.url, true)
  // console.log(requestObj, 'requestObj')
  // console.log(requestObj.query, 'query')
  // console.log(requestObj.query.username, requestObj.query.password)

  // // 利用新版URL对象解析url和query请求参数
  // const newUrl = new URL(request.url, 'http://localhost')
  // console.log(newUrl, 'obj')
  // // URL {
  // //   href: 'http://localhost/user?username=jj&password=123456789',
  // //   origin: 'http://localhost',
  // //   protocol: 'http:',
  // //   username: '',
  // //   password: '',
  // //   host: 'localhost',
  // //   hostname: 'localhost',
  // //   port: '',
  // //   pathname: '/user',
  // //   search: '?username=jj&password=123456789',
  // //   searchParams: URLSearchParams { 'username' => 'jj', 'password' => '123456789' },
  // //   hash: ''
  // // } obj
  // console.log(newUrl.searchParams.get('username'), newUrl.searchParams.get('password'), 'obj')

  /**
   * 设置响应体
   */

  // 状态码
  response.statusCode = 201

  // 响应状态描述
  response.statusMessage = 'test node'

  // 响应头
  response.setHeader('myHeader', 'test header')
  response.setHeader('testMove', ['a', 'b', 'c'])
  response.setHeader('content-type', 'text/html;charset=utf-8')

  // 设置请求体
  response.write('请求体一')
  response.write('请求体二')
  response.write('请求体三')

  // response的end函数设置响应体
  // end只能有一个，而且是必须有一个作为结束
  // response.end('hello serve')
  response.end('你好，serve')
})

// 监听9000端口，查看服务是否正常启动
serve.listen(9000, () => {
  console.log('服务开启成功')
})
