const db = require('./common')

const getUserDivisions = async(reqBody) => {
    return await db.userDivision.findAll({where: {username_fk: reqBody.username, status: 1}})
}

const deleteUserDivision = async(reqBody) => {
    return await db.userDivision.update({status: 0},{where: {username_fk: reqBody.username, group_name: reqBody.group_name}})
}

const activateUserDivision = async(reqBody) => {
    return await db.userDivision.update({status: 1},{where: {username_fk: reqBody.username, group_name: reqBody.group_name}}) 
}

module.exports = {
    getUserDivisions,
    deleteUserDivision,
    activateUserDivision
}