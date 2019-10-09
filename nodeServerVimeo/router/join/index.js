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
  res.sendFile(path.join(__dirname, '../../public/join.html'))
})

router.post('/', function (req, res) {
  const body = req.body;
  const email = body.email;
  const name = body.name;
  const password = body.password;
  console.log(email, name, password);

  const query = connection.query(`INSERT INTO user (email, name, pw) VALUES ("${email}", "${name}", "${password}")`, function (err, rows) {
    if (err) throw err;
    console.log('OK DB INSERTED');
  })
})


module.exports = router;