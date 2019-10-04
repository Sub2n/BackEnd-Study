const express = require('express'); // node_modules에서 express 함수를 불러옴
const app = express(); // Express Application 생성
const bodyParser = require('body-parser')

app.listen(3000, function () {
  console.log('Express Server Started on localhost:3000')
})

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

app.post('/search', function (req, res) {
  const responseData = {
    result: 'ok',
    answer: req.body.query
  }

  res.json(responseData)
})