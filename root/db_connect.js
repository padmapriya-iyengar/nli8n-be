const mysql = require('mysql')

var connection = mysql.createConnection({
    host: "localhost",
    user: "appuser",
    password: "appuser@123",
    database: 'app_db'
  });

module.exports = connection