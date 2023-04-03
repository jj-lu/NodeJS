const express = require('express')

const router = express.Router()

router.get('/admin', (request, response) => {
  response.send('admin 页面')
})

router.get('/test', (request, response) => {
  response.send('admin test 页面')
})

module.exports = router
