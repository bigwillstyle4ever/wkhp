import express from 'express';

const router = express.Router();

// default route to dashboard service => remove pug and change to html
router.get('*', (req, res) => {
  res.render('index');
});

export default router;
