const db = require('./common')

const getUserDivisions = async(reqBody) => {
    return await db.userDivision.findAll({where: {username_fk: reqBody.username}})
}

module.exports = {
    getUserDivisions
}