import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import webpackDevServer from '../webpack/dev-server';

// use dotenv
dotenv.config({
  silent: true,
});

// Express app setup
const app = express();
const router = express.Router();

// pug as views engine to display errors or other apps outside react
app.set('views', path.join(__dirname, './pugTemplates'));
app.set('view engine', 'pug');

// include webpack-dev-server for development only
if (process.env.NODE_ENV !== 'production') {
  webpackDevServer(app);
}

app.use(logger('combined'));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// cookie parser
app.use(cookieParser());

// serve static files from 'public'
app.use(express.static(path.join(__dirname, './assets')));

// default route
app.use(
  '/',
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
  })
)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: app.get('env') === 'development' ? err : {},
  });
  next();
});

export default app;
