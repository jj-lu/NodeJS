var express = require('express')
var router = express.Router()

const lowdb = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapt = new FileSync(__dirname + '/../data/db.json')
const db = lowdb(adapt)
const shortId = require('shortid')

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
  let id = shortId.generate()
  console.log(req.body, 'body')
  db.get('account')
    .unshift({ id, ...req.body })
    .write()
  // res.send('添加成功')
  res.render('success', { msg: '添加成功' })
})

module.exports = router
