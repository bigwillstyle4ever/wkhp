var express = require('express')
var router = express.Router()

router.get('/create/', function(req, res, next) {
  res.send('respond on create user')
  next()
});

router.get('/modify/:id', function(req, res, next) {
  res.send({'respond on modify user with id': req.params.id })
  console.log('modifying ID:', req.params.id)
  next()
});

router.get('/delete/:id', function (req, res, next) {
  res.send({'respond on delete user with id': req.params.id })
  console.log('deleting ID:', req.params.id)
  next()
})

module.exports = router;
