const db = require('./common');


/**
 * Description placeholder
 * @date 01/06/2023 - 23:56:15
 *
 * @async
 * @param {*} reqBody
 * @returns {unknown}
 */
const createFile = async(reqBody) => {
    return await db.file.create(reqBody.data)
}

const readFileByReference = async(reqBody) => {
    return await db.file.findAll({where: {ReferenceNo: reqBody.fileNo}})
}
module.exports = {
    createFile,
    readFileByReference
}