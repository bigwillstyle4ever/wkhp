import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import webpackDevServer from '../../webpack/dev-server';

dotenv.config({
  silent: true,
});

const app = express();
const router = express.Router();

// pug as views engine to display errors or other apps outside react
app.set('views', path.join(__dirname, './pugTemplates'));
app.set('view engine', 'pug');

if (process.env.NODE_ENV !== 'production') {
  webpackDevServer(app);
}

app.use(logger('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());

// serve static files from 'public'
app.use(express.static(path.join(__dirname, '../../src/assets')));

// default route
app.use(
  '/',
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../src/index.html'))
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
