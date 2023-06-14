const db = require('./common')


const readFileByReference = async(reqBody) => {
    return await db.fileReqMap.findAll({where: {FileReferenceNo_fk: reqBody.fileReferenceNo}, include: [{model: db.file, required: true},{model: db.request, required: true}]})
}

const readFilesByRequestNo = async(reqBody) => {
    return await db.fileReqMap.findAll({where: {RequestNo_fk: reqBody.requestNo}, include: [{model: db.file, required: true},{model: db.request, required: true}]})
}

const readRequestByRequestNo = async(reqBody) => {
    return await db.fileReqMap.findAll({where: {RequestNo_fk: reqBody.requestNo}, include: [{model: db.file, required: true},{model: db.request, required: true}]})
}

const readRequestsByFileReferenceNo = async(reqBody) => {
    return await db.fileReqMap.findAll({where: {FileReferenceNo_fk: reqBody.fileReferenceNo}, include: [{model: db.file, required: true},{model: db.request, required: true}]})
}

module.exports = {
    readFileByReference,
    readFilesByRequestNo,
    readRequestByRequestNo,
    readRequestsByFileReferenceNo
}