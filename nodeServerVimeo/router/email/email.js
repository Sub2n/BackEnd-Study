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

// localhost:3000/email/form 으로의 post 요청에 대한 응답 처리
// Server에서 ejs rendering을 해서 보내주는 방식? 
router.post('/form', function (req, res) {
  res.render('email.ejs', {
    'email': req.body.email
  })
})

// localhost:3000/email/ajax 으로의 post 요청에 대한 응답 처리
// json으로 응답해서 client에서 정보를 사용해 다시 그리는 방법으로, 화면 깜빡임 없음
router.post('/ajax', function (req, res) {
  const email = req.body.email;
  let responseData = {};

  const query = connection.query(`SELECT name FROM user WHERE email="${email}"`, function (err, rows) {
    if (err) throw err;
    if (rows[0]) {
      responseData.result = 'ok';
      responseData.name = rows[0].name;
    } else {
      responseData.result = 'none';
      responseData.name = '';
    }
    res.json(responseData)
  })
})

module.exports = router;