const db = require('./common');
const connection = require('../root/db_connect')

const createFile = async(reqBody) => {
    trx = await connection.transaction();
    const fileCreation = await db.file.create(reqBody.data, {transaction: trx})

    const notfData = {
        RequestNo: null,
        FileReferenceNo_fk: fileCreation.ReferenceNo,
        source_item_id: fileCreation.File_Id,
        user_group: 'REGISTRY (IAD)',
        actor: fileCreation.FileCreatedBy,
        message_type: 'User',
        message_code: 'FILE_CREATED',
        message: 'File '+fileCreation.ReferenceNo+' is created.',
        responder: fileCreation.FileCreatedBy,
        request_state: 'File Created'
    }
    await db.notification.create(notfData, {transaction: trx})

    await trx.commit();
    return fileCreation
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

const getFilesForDashboard = async(reqParams) => {
    return await connection.query("SELECT agcf.File_Id AS TASK_ID,'N' AS OPEN_DEFAULT_LAYOUT_ID,agcf.FileTitle AS TASK_TITLE,"+
        "agcf.FileTitle AS FILE_TITLE,agcf.ReferenceNo AS FILE_REF_NO,agcf.FileCreatedDate AS DELIVERY_DATE,agcf.FileStatusDesc AS TASK_STATUS,"+
        "agcf.FileCreatedBy AS TASK_FROM,agcf.FileCreatedBy AS ASSIGNEE,agcf.File_Id AS MAIN_FILE_ITEM_ID, agcf.FileType AS FILE_TYPE,"+
        "'N' AS SLA_BREACH,agcf.File_Id AS ITEM_ID,'user' AS TARGET_TYPE,'file' AS PROCESS_NAME FROM agc_files agcf WHERE agcf.FileCreatedBy = :username;",
        {
            replacements: {username: reqParams.username},
            type: connection.QueryTypes.SELECT
        })
}

module.exports = {
    createFile,
    getFileByReference,
    getAllFiles,
    getFilesForDashboard
}