const db = require('./common')

const getUserProfile = async(reqBody) => {
    return await db.userProfile.findAll({where: {username_fk: reqBody.username}})
}

module.exports = {
    getUserProfile
}