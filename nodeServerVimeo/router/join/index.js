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
  // res.sendFile(path.join(__dirname, '../../public/join.html'))
  res.render('join.ejs');
})

router.post('/', function (req, res) {
  const body = req.body;
  const email = body.email;
  const name = body.name;
  const pw = body.password;

  const sql = {
    email,
    name,
    pw
  };

  const query = connection.query(`INSERT INTO user SET ?`, sql, function (err, rows) {
    if (err) throw err;

    // ejs template에 객체의 data 넣어서 client로 전송
    else res.render('welcome.ejs', {
      name,
      'id': rows.insertId
    })
  })
})


module.exports = router;