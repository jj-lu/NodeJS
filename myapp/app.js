const express = require('express')
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('hello world')
})

app.get('/get', (req, res) => {
  res.send('get get')
})

app.post('/post', (req, res) => {
  res.send('get post')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
