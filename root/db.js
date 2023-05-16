/*const events = require("events")
let dbConnectorEmitter = new events.EventEmitter()
console.log(`db connector emitter ${dbConnectorEmitter}`)
var mysql = require('mysql')

var connection = mysql.createConnection({
    host: "localhost",
    user: "appuser",
    password: "appuser@123",
    database: 'app_db'
  });
  
connection.connect(function(err) {
    if (err) throw err;
    console.log("DB Connection Successful!!")
    dbConnectorEmitter.emit('db_connection')
});*/
const getMasterData = reqBody => {
  console.log(reqBody)
  let queryString = 'select * from app_master where type = ?'
  connection.query(queryString,[type], (err,rows,fields) => {
    if (err) throw err
    if (rows.length) {
      return rows
    } else {
      return 0
    }
  })
}

const getMasterDataByType = type => {
  let queryString = 'select * from app_master where type = ?'
  connection.query(queryString,[type], (err,rows,fields) => {
    if (err) throw err
    if (rows.length) {
      return rows
    } else {
      return 0
    }
  })
}

const getMasterDataByTypeAndParentCode = (type,parent_code) => {
  let queryString = 'select * from app_master where type = ? and parent_code = ?'
  connection.query(queryString,[type,parent_code], (err,rows,fields) => {
    if (err) throw err
    if (rows.length) {
      return rows
    } else {
      return 0
    }
  })
}

const getMasterDataByCode = code => {
  let queryString = 'select * from app_master where code = ?'
  connection.query(queryString,[code], (err,rows,fields) => {
    if (err) throw err
    if (rows.length) {
      return rows
    } else {
      return 0
    }
  })
}

/*dbConnectorEmitter.on('db_connection_exit',function(){
    //close db connection
})
//module.exports = dbConnectorEmitter*/

module.exports = {
  getMasterDataByType,
  getMasterDataByTypeAndParentCode,
  getMasterDataByCode
}