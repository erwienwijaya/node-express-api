const config = require('../../config/config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = config.url

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

//add model
db.users = require('./users.model')(mongoose)

module.exports = db;