const express = require('express')
const app = express()

app.listen(3000, function () {
  console.log('start! express server on port 3000');
})

app.use(express.static('public'))

// url routing
// localhost:3000 (root)로 접속 시 index.html 응답
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

// localhost:3000/index.html로 요청해도 뜰 수 있게 함
app.get('/index.html', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})