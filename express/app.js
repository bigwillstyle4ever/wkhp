var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var favicon = require("serve-favicon");
require('serve-static')

require('./config/config')

var apiRouter = require('./routes/api');
var indexRouter = require('./routes/index');
var testRouter = require('./routes/test');
var userRouter = require('./routes/users');

var app = express();

app.use(favicon(path.join(__dirname, 'public/img', 'favicon.ico')));

app.use(logger('dev')); // app.use(logger('combined'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
//app.use(cookieParser(configuration.cookieParserSecret));

//app.use('/static', express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/', apiRouter);
app.use('/test/', testRouter);
app.use('/users/', userRouter);

module.exports = app;
