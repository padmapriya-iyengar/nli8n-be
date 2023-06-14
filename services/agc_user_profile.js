const db = require('./common')
const logger = require('../root/logger')

const getUserProfile = async(reqBody) => {
    return await db.userProfile.findAll({where: {username_fk: reqBody.username}})
}

const updateUserProfile = async(reqParams,reqBody) => {
    return await db.userProfile.update(reqBody.data,{where: {username_fk: reqParams.username}})
}
module.exports = {
    getUserProfile,
    updateUserProfile
}