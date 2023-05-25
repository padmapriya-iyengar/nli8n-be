const db = require('./common')

const getAllUsers = async() => {
    return await db.user.findAll()
}

const getUserInfo = async(reqBody) => {
  return await db.user.findAll({where: {username: reqBody.username}, include:[{model: db.userProfile, required: true}, {model: db.userDivision, required: true}]})
}
module.exports = {
    getAllUsers,
    getUserInfo
}