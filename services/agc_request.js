const db = require('./common')
const connection = require('../root/db_connect');
let trx;

const createRequest = async(reqParams,reqBody) => {
    trx = await connection.transaction();
    const reqCreation = await db.request.create(reqBody.data, {transaction: trx})
    const mapData = {
        RequestNo_fk: reqCreation.RequestNo,
        FileReferenceNo_fk: reqParams.fileReferenceNo
    }
    await db.fileReqMap.create(mapData, {transaction: trx})
    await trx.commit();
    return reqCreation
}

const getRequestByRequestNo = async(reqBody) => {
    return await db.request.findAll({where: {RequestNo: reqBody.requestNo}})
}

const getAllRequests = async() => {
    return await db.request.findAll()
}

module.exports = {
    createRequest,
    getRequestByRequestNo,
    getAllRequests
}