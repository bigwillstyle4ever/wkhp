var express = require('express')
var router = express.Router()

router.get('/:id', function (req, res) {
  console.log('API HIT:', req.params.id)
  if(req.params.id === 'connection') {
    res.send({
      msg: ('connection success')
    })
  }
  if(req.params.id === 'json') {
    res.send({
      data:
      [
        {
          name: 'foo',
          value: '100',
        },
        {
          name: 'bar',
          value: '4711',
        }
      ]
    })
  }
})

router.post('/register-email', function (req, res) {
  console.log('/api/register-email got HIT:', req.params.id)
  //res.send({err: new Error('oops')})
  res.send({

  })
})


module.exports = router
