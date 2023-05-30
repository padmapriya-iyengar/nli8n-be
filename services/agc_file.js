const db = require('./common');

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