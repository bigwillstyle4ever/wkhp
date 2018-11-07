require('mongodb').MongoClient
let mongoose = require('mongoose')
let config = require('../config/config')

// mlab bucket:

mongoose.connect(
  config.mongoUri,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    auth: {
      user: config.mongoUsername,
      password: config.mongoPw
    }
  }
)
.then(() => console.log('connection successful'))
.catch((err) => console.error(err))

mongoose.Promise = global.Promise

// local dev db:

// var url = "mongodb://localhost:27017/db";
// mongoose.connect(
//   url,
//   { useNewUrlParser: true },
//   console.log('connected to mongo')
// );

module.exports = {mongoose}