const db = require('./common')

const getUserRoles = async(reqParams) => {
    return await db.userRole.findAll({where: {username_fk: reqParams.username, status: 1}})
}

const createUserRole = async(reqBody) => {
    const userRoleData = {
        role_id_fk: reqBody.role_id,
        username_fk: reqBody.username
    }
    return await db.userRole.create(userRoleData)
}

const deleteUserRole = async(reqBody) => {
    return await db.userRole.update({status: 0 },{where: {username_fk: reqBody.username, role_id_fk: reqBody.role_id}})
}

const activateUserRole = async(reqBody) => {
    return await db.userRole.update({status: 1 },{where: {username_fk: reqBody.username, role_id_fk: reqBody.role_id}})
}

module.exports = {
    getUserRoles,
    createUserRole,
    activateUserRole,
    deleteUserRole
}