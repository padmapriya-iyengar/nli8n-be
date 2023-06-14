const db = require('./common');

const createFile = async(reqBody) => {
    return await db.file.create(reqBody.data)
}

const getFileByReference = async(reqBody) => {
    if(reqBody.source === 'reference')
        return await db.file.findAll({where: {ReferenceNo: reqBody.identifier}})
    else if(reqBody.source === 'type')
        return await db.file.findAll({where: {FileType: reqBody.identifier}})
}

const getAllFiles = async() => {
    return await db.file.findAll()
}

module.exports = {
    createFile,
    getFileByReference,
    getAllFiles
}