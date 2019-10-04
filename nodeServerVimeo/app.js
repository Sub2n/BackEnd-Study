const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'wktnqls2!',
  database: 'jsman'
})

connection.connect()

app.listen(3000, function () {
  console.log('start! express server on port 3000');
})

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.set('view engine', 'ejs')

// url routing
// localhost:3000 (root)로 접속 시 index.html 응답
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

// localhost:3000/index.html로 요청해도 뜰 수 있게 함
app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

// localhost:3000/email_post로의 post 요청에 대한 응답 처리
// Server에서 ejs rendering을 해서 보내주는 방식? 
app.post('/email_post', function (req, res) {
  res.render('email.ejs', {
    'email': req.body.email
  })
})

// json으로 응답해서 client에서 정보를 사용해 다시 그리는 방법으로, 화면 깜빡임 없음
app.post('/ajax_send_email', function (req, res) {
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