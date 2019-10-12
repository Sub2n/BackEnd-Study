const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')

// DB 연동
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'wktnqls2!',
  database: 'jsman'
})

connection.connect()

router.get('/', function (req, res) {
  console.log('get join url');
  res.sendFile(path.join(__dirname, '../../public/join.html'))
})

module.exports = router;