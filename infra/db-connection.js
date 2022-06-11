const path = require('path')
const sqlite3 = require('sqlite3')

module.exports = filePath => new sqlite3.Database(path.resolve(filePath))
