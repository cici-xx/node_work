var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');
var session = require('express-session')

var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var contentRouter = require('./routes/content');
var sociologyRouter = require('./routes/sociology');
var psychologyRouter = require('./routes/psychology');
var economicsRouter = require('./routes/economics');
var naturalscienceRouter = require('./routes/naturalscience');
var historyRouter = require('./routes/history');
var personalRouter = require('./routes/personal');
var detailRouter = require('./routes/detail');
var searchRouter = require('./routes/search');
var adminRouter = require('./routes/admin');
var admin_Router = require('./routes/admin_');
var admin_contentRouter = require('./routes/admin_content');
var bookmanagementRouter = require('./routes/bookmanagement');
var alterRouter = require('./routes/bookmanagement');
var updateRouter = require('./routes/bookmanagement');
var adviseRouter = require('./routes/advise');



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret:"123",
  cookie:{maxAge:60000}
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', loginRouter);
app.use('/register',registerRouter);
app.use('/content',contentRouter);
app.use('/sociology',sociologyRouter);
app.use('/psychology',psychologyRouter);
app.use('/economics',economicsRouter);
app.use('/naturalscience',naturalscienceRouter);
app.use('/history',historyRouter);
app.use('/personal',personalRouter);
app.use('/detail',detailRouter);
app.use('/search',searchRouter);
app.use('/admin',adminRouter);
app.use('/admin_',admin_Router);
app.use('/admin_content',admin_contentRouter);
app.use('/bookmanagement',bookmanagementRouter);
app.use('/alter',alterRouter);
app.use('/update',updateRouter);
app.use('/advise',adviseRouter);



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

module.exports = app;
