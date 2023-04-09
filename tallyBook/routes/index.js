var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/tallyBook', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  // res.send('记账本列表')
  res.render('list')
})

/**
 * 新增记账信息
 */
router.get('/tallyBook/create', (req, res) => {
  // res.send('OK')
  res.render('create')
})

router.post('/tallyBook', (req, res) => {
  console.log(req.body, 'body')
  res.send('添加成功')
})

module.exports = router
