const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {
  // response.end(`
  //   <!DOCTYPE html>
  //   <html lang="en">
  //     <head>
  //       <meta charset="UTF-8" />
  //       <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  //       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //       <title>Document</title>
  //       <style>
  //         td {
  //           padding: 20px 40px;
  //         }
  //         tr:nth-child(odd) {
  //           background-color: aqua;
  //         }
  //         tr:nth-child(even) {
  //           background-color: bisque;
  //         }
  //         table,
  //         td {
  //           border-collapse: collapse;
  //         }
  //       </style>
  //     </head>
  //     <body>
  //       <table border="1">
  //         <tr>
  //           <td></td>
  //           <td></td>
  //           <td></td>
  //         </tr>
  //         <tr>
  //           <td></td>
  //           <td></td>
  //           <td></td>
  //         </tr>
  //         <tr>
  //           <td></td>
  //           <td></td>
  //           <td></td>
  //         </tr>
  //         <tr>
  //           <td></td>
  //           <td></td>
  //           <td></td>
  //         </tr>
  //       </table>
  //       <script>
  //         const tdArr = document.querySelectorAll('td')
  //         tdArr.forEach(item => {
  //           item.addEventListener('click', () => {
  //             item.style.background = 'blue'
  //           })
  //         })
  //       </script>
  //     </body>
  //   </html>
  // `)

  // 利用fs读取文件
  const rs = fs.createReadStream(__dirname + '/tablePractice.html')
  // let _data = ''
  // rs.on('data', chuck => {
  //   _data += chuck
  // })
  // rs.on('end', () => {
  //   response.end(_data)
  // })

  rs.on('data', chuck => {
    response.write(chuck)
  })
  rs.on('end', () => {
    response.end()
  })
})

server.listen(9000, () => {
  console.log('服务开启chengg')
})
