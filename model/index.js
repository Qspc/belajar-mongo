const dbConfig = require('../config/DbConfig')

const db = {}
db.url = dbConfig.database

db.posts = require('../model/User')

module.exports = db
