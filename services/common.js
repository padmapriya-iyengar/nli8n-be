const connection = require('../root/db_connect');
const fileProcessing = require('./file_processing')
const config = require('../root/config')

//creating logger table
const dbLogger = require('../models/agc_log');
const log = dbLogger(connection)
log.sync({alter:true}).then(() => {
  logInfo('SUCCESS',JSON.parse('{"string": "AGC Logger table created successfully!!"}'))
}).catch((err)=>setImmediate(()=>{logInfo('ERROR',JSON.parse('{"string": "Failed to create AGC Logger table!!"}')); throw err}));

//creating master table and uploading data(if any)
const dbMaster = require('../models/agc_master');
const master = dbMaster(connection)
master.sync({alter:true}).then(() => {
  logInfo('SUCCESS',JSON.parse('{"string": "AGC Master table created successfully!!"}'))
  fileProcessing.readFile(config.data_file_path +'master.json').then(function(data){
    logInfo('SUCCESS',JSON.parse('{"string": "AGC Master data file read successfully!!"}'))
    if(data){
      master.bulkCreate(JSON.parse(data),{validate: true}).then(() => {
        logInfo('SUCCESS',JSON.parse('{"string": "AGC Master data created successfully!!"}'))
      }).catch((err) => setImmediate(() => {logInfo('ERROR',JSON.parse('{"string": "Failed to create AGC Master data!!"}')); throw err}))
    }
  }).catch((err)=>setImmediate(()=>{logInfo('ERROR',JSON.parse('{"string": "Failed to read AGC Master data file!!"}')); throw err}));
}).catch((err)=>setImmediate(()=>{logInfo('ERROR',JSON.parse('{"string": "Failed to created AGC Master data table!!"}')); throw err}));

//creating notification table and uploading data(if any)
const dbNotification = require('../models/agc_notification');
const notification = dbNotification(connection)
notification.sync({alter:true}).then(() => {
  logInfo('SUCCESS',JSON.parse('{"string": "AGC Notification table created successfully!!"}'))
  fileProcessing.readFile(config.data_file_path +'notification.json').then(function(data){
    logInfo('SUCCESS',JSON.parse('{"string": "AGC Notification data file read successfully!!"}'))
    if(data){
      notification.bulkCreate(JSON.parse(data),{validate: true}).then(() => {
        logInfo('SUCCESS',JSON.parse('{"string": "AGC Notification data created successfully!!"}'))
      }).catch((err) => setImmediate(() => {logInfo('ERROR',JSON.parse('{"string": "Failed to create AGC Notification data!!"}')); throw err}))
    }
  }).catch((err)=>setImmediate(()=>{logInfo('ERROR',JSON.parse('{"string": "Failed to read AGC Master data file!!"}')); throw err}));
}).catch((err)=>setImmediate(()=>{logInfo('ERROR',JSON.parse('{"string": "Failed to create AGC Notification table!!"}')); throw err}));

//creating user table and uploading data(if any)
const dbUser = require('../models/agc_user');
const user = dbUser(connection)
user.sync({alter:true}).then(() => {
  logInfo('SUCCESS',JSON.parse('{"string": "AGC User table created successfully!!"}'))
  fileProcessing.readFile(config.data_file_path +'user.json').then(function(data){
    logInfo('SUCCESS',JSON.parse('{"string": "AGC User data file read successfully!!"}'))
    if(data){
      user.bulkCreate(JSON.parse(data),{validate: true}).then(() => {
        logInfo('SUCCESS',JSON.parse('{"string": "AGC User data created successfully!!"}'))
      }).catch((err) => setImmediate(() => {logInfo('ERROR',JSON.parse('{"string": "Failed to create AGC User data!!"}')); throw err}))
    }
  }).catch((err)=>setImmediate(()=>{logInfo('ERROR',JSON.parse('{"string": "Failed to read AGC User data file!!"}')); throw err}));
}).catch((err)=>setImmediate(()=>{logInfo('ERROR',JSON.parse('{"string": "Failed to create AGC User table!!"}')); throw err}));

//creating user profile table, its relation with user table and uploading data(if any)
const dbUserProfile = require('../models/agc_user_profile');
const userProfile = dbUserProfile(connection)
userProfile.belongsTo(user, {
  foreignKey: {
    allowNull: false,
    name: 'username_fk',
    unique: 'FOREIGN'
  },
  targetKey: 'username'
});
user.hasOne(userProfile, {
  foreignKey: {
    allowNull: false,
    name: 'username_fk',
    unique: 'FOREIGN'
  },
  sourceKey: 'username'
});
userProfile.sync({alter:true}).then(() => {
  logInfo('SUCCESS',JSON.parse('{"string": "AGC User Profile table created successfully!!"}'))
  fileProcessing.readFile(config.data_file_path +'user_profile.json').then(function(data){
    logInfo('SUCCESS',JSON.parse('{"string": "AGC User Profile data file read successfully!!"}'))
    if(data){
      userProfile.bulkCreate(JSON.parse(data),{validate: true}).then(() => {
        logInfo('SUCCESS',JSON.parse('{"string": "AGC User Profile data created successfully!!"}'))
      }).catch((err) => setImmediate(() => {logInfo('ERROR',JSON.parse('{"string": "Failed to create AGC User Profile data!!"}')); throw err}))
    }
  }).catch((err)=>setImmediate(()=>{logInfo('ERROR',JSON.parse('{"string": "Failed to read AGC User Profile data file!!"}')); throw err}));
}).catch((err)=>setImmediate(()=>{logInfo('ERROR',JSON.parse('{"string": "Failed to create AGC User Profile table!!"}')); throw err}));

//creating user divisions table, its relation with user table and uploading data(if any)
const dbUserDivision = require('../models/agc_user_division')
const userDivision = dbUserDivision(connection)
userDivision.belongsTo(user, {
  foreignKey: {
    allowNull: false,
    name: 'username_fk'
  },
  targetKey: 'username'
})
user.hasMany(userDivision,{
  foreignKey: {
    allowNull: false,
    name: 'username_fk'
  },
  sourceKey: 'username'
})
userDivision.sync({alter:true}).then(() => {
  logInfo('SUCCESS',JSON.parse('{"string": "AGC User Division table created successfully!!"}'))
  fileProcessing.readFile(config.data_file_path +'user_division.json').then(function(data){
    logInfo('SUCCESS',JSON.parse('{"string": "AGC User Division data file read successfully!!"}'))
    if(data){
      userDivision.bulkCreate(JSON.parse(data),{validate: true}).then(() => {
        logInfo('SUCCESS',JSON.parse('{"string": "AGC User Division data created successfully!!"}'))
      }).catch((err) => setImmediate(() => {logInfo('ERROR',JSON.parse('{"string": "Failed to create AGC User Division data!!"}')); throw err}))
    }
  }).catch((err)=>setImmediate(()=>{logInfo('ERROR',JSON.parse('{"string": "Failed to read AGC User Division data file!!"}')); throw err}));
}).catch((err)=>setImmediate(()=>{logInfo('ERROR',JSON.parse('{"string": "Failed to create AGC User Division table!!"}')); throw err}));


const logInfo = async(status, logInfo) => {
  if((status == 'SUCCESS' && config.enable_log.success) || (status == 'ERROR' && config.enable_log.failure)){
    await log.create({
      log_data: logInfo,
      status: status,
    })
  }
}

module.exports = {
    log,
    master,
    notification,
    user,
    userProfile,
    userDivision,
    logInfo
}