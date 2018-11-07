var express = require('express')
var router = express.Router()

router.get("/omat", (req, res, next) => {
  res.status(301).redirect("../test.html")
  next()
})

// router.post('/test', function(req,res,next){ 
//   var file = express.static(path.join(__dirname, "test.html"))
//   res.sendFile(file, options, function(err) {
//     if(err) {
//         res.status(err.status).end()
//     }
//   });
// });

// app.use("/redirect", (req, res) => {
//   res.status(301).redirect("./")
// })

module.exports = router
