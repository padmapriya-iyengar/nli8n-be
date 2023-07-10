const db = require('./common')

const createRole = async(reqBody) => {
    const roleData = {
        role_id: reqBody.role_id,
        role_name: reqBody.role_name
    }
    return await db.role.create(roleData)
}

const getAllRoles = async() => {
    return await db.role.findAll()
}

const getActiveRoles = async() => {
    return await db.role.findAll({where: {status: 1}})
}

const getRoleDataById = async(reqParams) => {
    return await db.role.findAll({where: {role_id: reqParams.role_id}})
}

const updateRole = async(reqBody) => {
    return await db.role.update({role_name: reqBody.role_name},{where: {role_id: reqBody.role_id}})
}

const deleteRole = async(reqBody) => {
    return await db.role.update({status: 0},{where: {role_id: reqBody.role_id}})
}

const activateRole = async(reqBody) => {
    return await db.role.update({status: 1},{where: {role_id: reqBody.role_id}})
}

module.exports = {
    createRole,
    getAllRoles,
    getRoleDataById,
    updateRole,
    deleteRole,
    activateRole,
    getActiveRoles
}