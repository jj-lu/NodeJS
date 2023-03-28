const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  const { pathname } = new URL(request.url, 'http://127.0.0.1')

  // if (pathname === '/') {
  //   // 利用fs读取文件
  //   const rs = fs.createReadStream(__dirname + '/tablePractice.html')
  //   rs.on('data', chuck => {
  //     response.write(chuck)
  //   })
  //   rs.on('end', () => {
  //     response.end()
  //   })
  // } else if (pathname === '/tableCss.css') {
  //   const rs = fs.createReadStream(__dirname + './tableCss.css')
  //   let data = ''
  //   rs.on('data', chuck => {
  //     data += chuck
  //   })
  //   rs.on('end', () => {
  //     response.end(data)
  //   })
  // } else if (pathname === '/tableJs.js') {
  //   const rs = fs.createReadStream(__dirname + './tableJs.js')
  //   let data = ''
  //   rs.on('data', chuck => {
  //     data += chuck
  //   })
  //   rs.on('end', () => {
  //     response.end(data)
  //   })
  // } else {
  //   response.statusCode = 404
  //   response('404 not found')
  // }

  // 优化
  const rs = fs.createReadStream(__dirname + pathname)
  rs.on('data', chuck => {
    response.write(chuck)
  })
  rs.on('end', () => {
    response.end()
  })
  rs.on('error', () => {
    response.statusCode = 500
    response.end('error')
  })
})

server.listen(9000, () => {
  console.log('服务开启chengg')
})
