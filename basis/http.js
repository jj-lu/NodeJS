const http = require('http')

const serve = http.createServer((request, response) => {
  response.setHeader('content-type', 'text/html;charset=utf-8')
  // response的end函数设置响应体
  // response.end('hello serve')
  response.end('你好，serve')
})

// 监听9000端口，查看服务是否正常启动
serve.listen(9000, () => {
  console.log('服务开启成功')
})
