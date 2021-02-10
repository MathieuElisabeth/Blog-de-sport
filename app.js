var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');

var app = express();
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 600000000 }, loggedin : false}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/connexion', loginRouter);

// Page
app.get('/acceuil', function(req, res) {
  res.render('pages/acceuil');
});

app.get('/connexion', function(req, res) {
  res.render('pages/connexion');
});

app.get('/tous-les-articles', function(req, res) {
res.render('pages/tous_les_articles');
});

app.listen(8080);
console.log('listen on port 8080');

// Page
app.get('/acceuil', function(req, res) {
  res.render('pages/acceuil');
});

app.get('/connexion', function(req, res) {
  res.render('pages/connexion');
});

app.get('/tous-les-articles', function(req, res) {
res.render('pages/tous_les_articles');
});

app.get('/article', function(req, res) {
  res.render('pages/article');
  });

app.listen(8080);
console.log('listen on port 8080');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const db = require("./app/models");
db.sequelize.sync();
module.exports = app;
