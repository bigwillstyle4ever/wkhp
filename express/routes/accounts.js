var express = require('express')
var router = express.Router()

router.get('/create/', function(req, res, next) {
  res.send('respond on create user')
  next()
});

router.get('/login/:id', function(req, res, next) {
  res.send({'respond on login user with id': req.params.id })
  console.log('loging in ID:', req.params.id)
  next()
});

router.get('/logout/:id', function (req, res, next) {
  res.send({'respond on logout user with id': req.params.id })
  console.log('loging out ID:', req.params.id)
  next()
})

module.exports = router;
