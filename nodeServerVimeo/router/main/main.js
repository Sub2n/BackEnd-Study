const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')

// localhost:3000/main 으로 요청해도 뜰 수 있게 함
router.get('/', function (req, res) {
  console.log('main loaded')
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router;