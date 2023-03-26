const http = require('http')

const serve = http.createServer((request, response) => {
  const method = request.method
  const { pathname } = new URL(request.url, 'http://localhost')
  response.setHeader('content-type', 'text/html;charset=utf-8')
  console.log(pathname, 'pathname', method)
  if (method === 'GET' && pathname === '/login') {
    response.end('登录')
  } else if (method === 'GET' && pathname === '/logout') {
    response.end('退出')
  } else response.end('404 not found')
})

serve.listen(9000, () => {
  console.log('服务启动')
})
