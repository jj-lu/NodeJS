var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

router.get('/post', (req, res) => {
  res.send('get post request')
})

module.exports = router
