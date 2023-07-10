const connection = require('../root/db_connect');
const fileProcessing = require('./file_processing')
const logger = require('../root/logger')

//creating master table and uploading data(if any)
const dbMaster = require('../models/agc_master');
const master = dbMaster(connection)
master.sync({alter:true}).then(() => {
  logger.info('AGC Master table created successfully!!')
  fileProcessing.readFile(global.agc_config.data_file_path +'master.json').then((data)=>{
    logger.info('AGC Master data file read successfully!!')
    if(data){
      master.bulkCreate(JSON.parse(data),{validate: true}).then(() => {
        logger.info('AGC Master data created successfully!!')
      }).catch((err) => setImmediate(() => {logger.error('Failed to create AGC Master data!!'); throw err}))
    }
  }).catch((err)=>setImmediate(()=>{logger.error('Failed to read AGC Master data file!!'); throw err}));
}).catch((err)=>setImmediate(()=>{logger.error('Failed to create AGC Master data table!!'); throw err}));

//creating user table and uploading data(if any)
const dbUser = require('../models/agc_user');
const user = dbUser(connection)
user.sync({alter:true}).then(() => {
  logger.info('AGC User table created successfully!!')
  fileProcessing.readFile(global.agc_config.data_file_path +'user.json').then((data)=>{
    logger.info('AGC User data file read successfully!!')
    if(data){
      user.bulkCreate(JSON.parse(data),{validate: true}).then(() => {
        logger.info('AGC User data created successfully!!')
      }).catch((err) => setImmediate(() => {logger.error('Failed to create AGC User data!!'); throw err}))
    }
  }).catch((err)=>setImmediate(()=>{logger.error('Failed to read AGC User data file!!'); throw err}));
}).catch((err)=>setImmediate(()=>{logger.error('Failed to create AGC User table!!'); throw err}));

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
  logger.info('AGC User Profile table created successfully!!')
  fileProcessing.readFile(global.agc_config.data_file_path +'user_profile.json').then((data)=>{
    logger.info('AGC User Profile data file read successfully!!')
    if(data){
      userProfile.bulkCreate(JSON.parse(data),{validate: true}).then(() => {
        logger.info('AGC User Profile data created successfully!!')
      }).catch((err) => setImmediate(() => {logger.error('Failed to create AGC User Profile data!!'); throw err}))
    }
  }).catch((err)=>setImmediate(()=>{logger.error('Failed to read AGC User Profile data file!!'); throw err}));
}).catch((err)=>setImmediate(()=>{logger.error('Failed to create AGC User Profile table!!'); throw err}));

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
  logger.info('AGC User Division table created successfully!!')
  fileProcessing.readFile(global.agc_config.data_file_path +'user_division.json').then((data)=>{
    logger.info('AGC User Division data file read successfully!!')
    if(data){
      userDivision.bulkCreate(JSON.parse(data),{validate: true}).then(() => {
        logger.info('AGC User Division data created successfully!!')
      }).catch((err) => setImmediate(() => {logger.error('Failed to create AGC User Division data!!'); throw err}))
    }
  }).catch((err)=>setImmediate(()=>{logger.error('Failed to read AGC User Division data file!!'); throw err}));
}).catch((err)=>setImmediate(()=>{logger.error('Failed to create AGC User Division table!!'); throw err}));

//creating sequence table
const dbSequence = require('../models/agc_sequence');
const sequence = dbSequence(connection)
sequence.sync({alter:true}).then(() => {
  logger.info('AGC Sequence table created successfully!!')
}).catch((err)=>setImmediate(()=>{logger.error('Failed to create AGC Sequence data table!!'); throw err}));

//creating agc file table
const dbFile = require('../models/agc_file');
const file = dbFile(connection)
file.sync({alter: true}).then(() => {
  logger.info('AGC File table created successfully!!')
}).catch((err) => setImmediate(() => {logger.error('Failed to create AGC File table!!'); throw err}))

//creating agc request table
const dbRequest = require('../models/agc_request');
const request = dbRequest(connection)
request.sync({alter: true}).then(() => {
  logger.info('AGC Request table created successfully!!')
}).catch((err) => setImmediate(() => {logger.error('Failed to create AGC Request table!!'); throw err}))

//creating agc file request map table
const dbFileReq = require('../models/agc_file_request_map');
const fileReqMap = dbFileReq(connection)
fileReqMap.belongsTo(file, {
  foreignKey: {
    allowNull: false,
    name: 'FileReferenceNo_fk'
  },
  targetKey: 'ReferenceNo'
})
file.hasMany(fileReqMap,{
  foreignKey: {
    allowNull: false,
    name: 'FileReferenceNo_fk'
  },
  sourceKey: 'ReferenceNo'
})
fileReqMap.belongsTo(request, {
  foreignKey: {
    allowNull: false,
    name: 'RequestNo_fk'
  },
  targetKey: 'RequestNo'
})
request.hasMany(fileReqMap,{
  foreignKey: {
    allowNull: false,
    name: 'RequestNo_fk'
  },
  sourceKey: 'RequestNo'
})
fileReqMap.sync({alter: true}).then(() => {
  logger.info('AGC File Request Map table created successfully!!')
}).catch((err) => setImmediate(() => {logger.error('Failed to create AGC File Request Map table!!'); throw err}))

//creating notification table and uploading data(if any)
const dbNotification = require('../models/agc_notification');
const notification = dbNotification(connection)
notification.belongsTo(file, {
  foreignKey: {
    allowNull: false,
    name: 'FileReferenceNo_fk'
  },
  targetKey: 'ReferenceNo'
})
file.hasMany(notification,{
  foreignKey: {
    allowNull: false,
    name: 'FileReferenceNo_fk'
  },
  sourceKey: 'ReferenceNo'
})
notification.sync({alter:true}).then(() => {
  logger.info('AGC Notification table created successfully!!')
  fileProcessing.readFile(global.agc_config.data_file_path +'notification.json').then((data)=>{
    logger.info('AGC Notification data file read successfully!!')
    if(data){
      notification.bulkCreate(JSON.parse(data),{validate: true}).then(() => {
        logger.info('AGC Notification data created successfully!!')
      }).catch((err) => setImmediate(() => {logger.error('Failed to create AGC Notification data!!'); throw err}))
    }
  }).catch((err)=>setImmediate(()=>{logger.error('Failed to read AGC Master data file!!'); throw err}));
}).catch((err)=>setImmediate(()=>{logger.error('Failed to create AGC Notification table!!'); throw err}));

//creating role table and uploading data(if any)
const dbRole = require('../models/agc_role');
const role = dbRole(connection)
role.sync({alter:true}).then(() => {
  logger.info('AGC Role table created successfully!!')
  fileProcessing.readFile(global.agc_config.data_file_path+'role.json').then((data)=>{
    logger.info('AGC Role data file read successfully!!')
    if(data){
      role.bulkCreate(JSON.parse(data),{validate: true}).then(()=>{
        logger.info('AGC Role data created successfully!!')
      }).catch((err)=>setImmediate(()=>{logger.error('Failes to create AGC Role data file!!'); throw err}))
    }
  }).catch((err)=>setImmediate(()=>{logger.error('Failed to read AGC Role data file!!'); throw err}))
}).catch((err)=>setImmediate(()=>{logger.error('Failed to create AGC Role table!!'); throw err}))

//creating user role table
const dbUserRole = require('../models/agc_user_role')
const userRole = dbUserRole(connection)
userRole.belongsTo(user, {
  foreignKey: {
    allowNull: false,
    name: 'username_fk'
  },
  targetKey: 'username'
})
user.hasMany(userRole,{
  foreignKey: {
    allowNull: false,
    name: 'username_fk'
  },
  sourceKey: 'username'
})
userRole.belongsTo(role, {
  foreignKey: {
    allowNull: false,
    name: 'role_id_fk'
  },
  targetKey: 'role_id'
})
role.hasMany(userRole,{
  foreignKey: {
    allowNull: false,
    name: 'role_id_fk'
  },
  sourceKey: 'role_id'
})
userRole.sync({alter:true}).then(()=>{
  logger.info('AGC User Role table created successfully!!')
}).catch((err)=>setImmediate(()=>{logger.error('Failed to create AGC User Reole table!!'); throw err}))

module.exports = {
  master,
  notification,
  user,
  userProfile,
  userDivision,
  sequence,
  file,
  request,
  fileReqMap,
  role,
  userRole
}