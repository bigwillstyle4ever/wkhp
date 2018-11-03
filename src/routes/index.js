import express from 'express';

const router = express.Router();
/* GET home page.
router.get('*', (req, res) => {
  res.render('index');
}); */

router.get('*', (req, res) => {
  // throw new Error('Sorry an error occured');
  res.render('index');
});

export default router;
