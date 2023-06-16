const db = require('./common')

const getUserNotifications = async(reqBody) => {
    return await db.notification.findAll({where: {responder: reqBody.username, status: 'A'}})
}

const updateUserNotifications = async(reqParams,reqBody) => {
  let record;
  if(reqBody.action == 'READ'){
    record = await db.notification.update({message_read_status: 'Read' },{where: {id: reqParams.id}});
  }
  if(reqBody.action == 'NOTREAD'){
    record = await db.notification.update({message_read_status: 'NotRead' },{where: {id: reqParams.id}});
  }
  if(reqBody.action == 'DELETE'){
    record = await db.notification.update({status: 'I' },{where: {id: reqParams.id}});
  }
  if(reqBody.action == 'ACTIVATE'){
    record = await db.notification.update({status: 'A' },{where: {id: reqParams.id}});
  }
  return record
}

const getUserNotificationByID = async(reqBody) => {
  return await db.notification.findAll({where: {id: reqBody.id}})
}

const getAllNotifications = async() => {
  return await db.notification.findAll();
}

module.exports = {
  getUserNotifications,
  getUserNotificationByID,
  updateUserNotifications,
  getAllNotifications
}