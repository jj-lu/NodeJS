const http = require('http')
const url = require('url')

const serve = http.createServer((request, response) => {
  // 获取请求方法
  console.log(request.method, 'method')

  //获取请求的url
  console.log(request.url, 'url')

  //获取http协议的版本号
  console.log(request.httpVersion, 'version')

  //获取http协议的请求头
  console.log(request.headers, 'header')

  // 获取请求头的host
  console.log(request.headers.host, 'host')

  // 获取post请求的body信息
  let body = ''
  request.on('data', chuck => {
    body += chuck
  })
  request.on('end', () => {
    console.log(body, 'body')
  })

  // 利用旧版url模块解析url和query请求参数
  let requestObj = url.parse(request.url, true)
  console.log(requestObj, 'requestObj')
  console.log(requestObj.query, 'query')
  console.log(requestObj.query.username, requestObj.query.password)

  // 利用新版URL对象解析url和query请求参数
  const newUrl = new URL(request.url, 'http://localhost')
  console.log(newUrl, 'obj')
  // URL {
  //   href: 'http://localhost/user?username=jj&password=123456789',
  //   origin: 'http://localhost',
  //   protocol: 'http:',
  //   username: '',
  //   password: '',
  //   host: 'localhost',
  //   hostname: 'localhost',
  //   port: '',
  //   pathname: '/user',
  //   search: '?username=jj&password=123456789',
  //   searchParams: URLSearchParams { 'username' => 'jj', 'password' => '123456789' },
  //   hash: ''
  // } obj
  console.log(newUrl.searchParams.get('username'), newUrl.searchParams.get('password'), 'obj')

  response.setHeader('content-type', 'text/html;charset=utf-8')
  // response的end函数设置响应体
  // response.end('hello serve')
  response.end('你好，serve')
})

// 监听9000端口，查看服务是否正常启动
serve.listen(9000, () => {
  console.log('服务开启成功')
})
