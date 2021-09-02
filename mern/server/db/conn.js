let mongoose = require('mongoose');
require("dotenv").config({ path: "../config.env" });

const mongoDBUri= process.env.ATLAS_URI

class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect(mongoDBUri)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error',err)
       })
  }
}

module.exports = new Database()