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

    const notfData = {
        RequestNo: reqCreation.RequestNo,
        FileReferenceNo_fk: reqParams.fileReferenceNo,
        source_item_id: reqCreation.Request_Id,
        user_group: 'REGISTRY (IAD)',
        actor: reqCreation.RequestCreatedBy,
        message_type: 'Group',
        message_code: 'REQUEST_ASSIGNED_TO_RO',
        message: 'Request '+reqCreation.RequestNo+' is assigned to Registry Officer.',
        responder: reqCreation.RequestCreatedBy,
        request_state: 'Request Created'
    }
    await db.notification.create(notfData, {transaction: trx})

    await trx.commit();
    return reqCreation
}

const getRequestByRequestNo = async(reqBody) => {
    return await db.request.findAll({where: {RequestNo: reqBody.requestNo}})
}

const getAllRequests = async() => {
    return await db.request.findAll()
}

const getRequestsForDashboard = async(reqParams) => {
    return await connection.query("SELECT agcr.UrgencyDesc AS URGENCY,CASE WHEN agcr.Urgency='RURGENT_VU' THEN '!!' WHEN agcr.Urgency='RURGENT_U'"+
        " THEN '!' ELSE '' END AS URGENCYMARK,agcr.Request_Id AS TASK_ID,'N' AS OPEN_DEFAULT_LAYOUT_ID,agcr.RequestTitle AS TASK_TITLE,"+
        "agcf.FileTitle AS FILE_TITLE,agcfr.FileReferenceNo_fk AS FILE_REF_NO,agcr.RequestNo AS REQUEST_ID,agcr.RequestCreatedDate AS DELIVERY_DATE,"+
        "agcr.RequestDueDate AS REQUEST_DUE_DATE,agcr.ExpResponseDate AS EXPECTED_RESPONSE_DATE,agcr.RequestStatusDesc AS TASK_STATUS,"+
        "agcr.RequestCreatedBy AS TASK_FROM,'' AS ASSIGNEE,agcf.FileType AS FILE_TYPE,CASE WHEN agcr.ExpResponseDate > curdate() THEN 'N' ELSE 'Y'"+
        " END AS SLA_BREACH,agcr.RequestTypeDesc AS REQUEST_TYPE,agcr.Request_Id AS ITEM_ID,'request' AS PROCESS_NAME FROM agc_requests agcr "+
        "INNER JOIN agc_file_request_maps agcfr ON agcfr.RequestNo_fk = agcr.RequestNo INNER JOIN agc_files agcf ON agcfr.FileReferenceNo_fk = agcf.ReferenceNo "+
        "WHERE agcr.RequestCreatedBy = :username;",
        {
            replacements: {username: reqParams.username},
            type: connection.QueryTypes.SELECT
        })
}

module.exports = {
    createRequest,
    getRequestByRequestNo,
    getAllRequests,
    getRequestsForDashboard
}