const express = require('express')
const app = express()
const router = express.Router()
const path = require('path')
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

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

// flash로 에러 메시지를 받아서 ejs 렌더링
router.get('/', function (req, res) {
  let message;
  const errMessage = req.flash('error');
  if (errMessage) message = errMessage;

  res.render('join.ejs', {
    message
  });
})

// passport 모듈 local-join 정의
passport.use('local-join', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function (req, email, password, done) {
  const query = connection.query('select * from user where email=?', [email], function (err, row) {
    if (err) return done(err);

    if (row.length) {
      // 처리 결과가 있으면
      console.log('exist user')
      // done false 넘기면 failureRedirect로
      return done(null, false, {
        message: 'Your Email is Already Used'
      })
    } else {
      const sql = {
        email,
        pw: password
      };
      const query = connection.query('insert into user set ?', sql, function (err, rows) {
        if (err) throw err;

        return done(null, {
          email,
          'id': rows.insertId
        })
      })
    }
  })
}))

// join으로 post요청 오면 local-join으로 넘기는 routing 처리
router.post('/', passport.authenticate('local-join', {
  successRedirect: '/main',
  failureRedirect: '/join',
  failureFlash: true
}))

// router.post('/', function (req, res) {
//   const body = req.body;
//   const email = body.email;
//   const name = body.name;
//   const pw = body.password;

//   const sql = {
//     email,
//     name,
//     pw
//   };

//   const query = connection.query(`INSERT INTO user SET ?`, sql, function (err, rows) {
//     if (err) throw err;

//     // ejs template에 객체의 data 넣어서 client로 전송
//     else res.render('welcome.ejs', {
//       name,
//       'id': rows.insertId
//     })
//   })
// })


module.exports = router;