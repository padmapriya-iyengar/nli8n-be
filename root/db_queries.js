const connection = require('./db_connect');

const getMasterData = reqBody => {
  let queryString = '';
  let params = [];
  if(reqBody.source == 'type'){
    queryString = 'select * from app_master where type = ? and status = 1;'
    params.push(reqBody.identifier)
  } else if(reqBody.source == 'type_parent'){
    queryString = 'select * from app_master where type = ? and parent_code = ? and status = 1;'
    params.push(reqBody.identifier)
    params.push(reqBody.parent_code)
  } else if(reqBody.source == 'code'){
    queryString = 'select * from app_master where code = ? and status = 1;'
    params.push(reqBody.identifier)
  }
  return new Promise(function(resolve,reject) {
    connection.query(queryString,params,(err,rows,fields) => {
      if (err) {
        return reject(err)
      }
      if (rows.length) {
        return resolve(rows)
      } else {
        return resolve(0)
      }
    })
  })
}

const getUserNotifications = reqBody => {
  let queryString = '';
  let params = [];
  queryString = "select * from app_notifications where responder = ? and status = 'A';"
  params.push(reqBody.username)
  return new Promise(function(resolve,reject) {
    connection.query(queryString,params,(err,rows,fields) => {
      if (err) {
        return reject(err)
      }
      if (rows.length) {
        return resolve(rows)
      } else {
        return resolve(0)
      }
    })
  })
}

const getUserNotificationByID = reqBody => {
  let queryString = '';
  let params = [];
  queryString = "select * from app_notifications where id = ?;"
  params.push(reqBody.id)
  return new Promise(function(resolve,reject) {
    connection.query(queryString,params,(err,rows,fields) => {
      if (err) {
        return reject(err)
      }
      if (rows.length) {
        return resolve(rows)
      } else {
        return resolve(0)
      }
    })
  })
}

const updateUserNotifications = (reqParams,reqBody) => {
  let updQueryString = '';
  let updParams = [];
  if(reqBody.action == 'READ')
    updQueryString = "update app_notifications set message_read_status = 'Read' where id = ?;"
  if(reqBody.action == 'NOTREAD')
    updQueryString = "update app_notifications set message_read_status = 'NotRead' where id = ?;"
  if(reqBody.action == 'DELETE')
    updQueryString = "update app_notifications set status = 'I' where id = ?;"
  if(reqBody.action == 'ACTIVATE')
    updQueryString = "update app_notifications set status = 'A' where id = ?;"
  updParams.push(reqParams.id)
  return new Promise(function(resolve,reject) {
    connection.query(updQueryString,updParams,(upErr,upRows,fields) => {
      if (upErr) {
        return reject(upErr)
      }
      resolve('update_success')
    })
  })
}

module.exports = {
  getMasterData,
  getUserNotifications,
  updateUserNotifications,
  getUserNotificationByID
}