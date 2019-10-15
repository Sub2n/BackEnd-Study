const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const session = require('express-session')
const flash = require('connect-flash')

const router = require('./router/index')


app.listen(3000, function () {
  console.log('start! express server on port 3000');
})

// Middlewares
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.set('view engine', 'ejs')

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash()) // 메시지를 쉽게 전달해주는 거

app.use(router);