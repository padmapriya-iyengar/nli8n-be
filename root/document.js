const express = require('express')
const document = express.Router({mergeParams: true})

document.get('/',(req,res) => {
    console.log('Inside agc document script!!')
    res.status(200)
})
//Service Implementation and error handling
document.get('/file-versions/:file-or-request/:id/:file-name/:docid',(req,res) => {
    let response = {"tuple":{"old":{"AWP_DOCUMENT_VERSIONS":{"ID":"447","FILE_NAME":"CIRCULATION.xml","SERVICE_TYPE":"ADVISORY","DOCUMENT_URL":"AGC/IW/AG/LEGIS/LEG/2022/000000002/CIRCULATION.xml","CS_DOCUMENT_ID":"245707","REQUEST_ID":"","FILE_ID":"AG/LEGIS/LEG/B/2022/000000002","REMARKS":"ASDASD","DOCUMENT_DESCRIPTION":"ASD","DOCUMENT_DATE":"2022-08-01T11:34:43.0","DOCUMENT_VERSION":"1","SECURITY_CLASSIFICATION":"SCLASS_S","FILE_TYPE":"10","DOCUMENT_CLASS":"","CREATED_BY":"iadro1","CREATED_ON":"2022-08-18T06:04:50.190000000","LAST_MODIFIED_BY":null,"LAST_MODIFIED_ON":null,"AWP_DOC_ID":"368","MIME_TYPE":"text/xml","DOCUMENT_FORMAT":null,"OUTGOING":"","FILE_TYPE_DESC":"Egazette","SEC_CLASS_DESC":"Secret","LEGIS_TAGS":null,"TOPIC_TAGS":null,"KM_NOTES":null,"FILE_TYPE_NAME":"Test File Type","SECURITY_CLASSIFICATION_NAME":"Security Classification Name"}}}}
    res.status(200).json(response)
})
//Service Implementation and error handling
document.get('/download-document/:docid/:version-number',(req,res) => {
    let response = {"tuple":{"old":{"AWP_DOCUMENT_VERSIONS":{"ID":"447","FILE_NAME":"CIRCULATION.xml","SERVICE_TYPE":"ADVISORY","DOCUMENT_URL":"AGC/IW/AG/LEGIS/LEG/2022/000000002/CIRCULATION.xml","CS_DOCUMENT_ID":"245707","REQUEST_ID":"","FILE_ID":"AG/LEGIS/LEG/B/2022/000000002","REMARKS":"ASDASD","DOCUMENT_DESCRIPTION":"ASD","DOCUMENT_DATE":"2022-08-01T11:34:43.0","DOCUMENT_VERSION":"1","SECURITY_CLASSIFICATION":"SCLASS_S","FILE_TYPE":"10","DOCUMENT_CLASS":"","CREATED_BY":"iadro1","CREATED_ON":"2022-08-18T06:04:50.190000000","LAST_MODIFIED_BY":null,"LAST_MODIFIED_ON":null,"AWP_DOC_ID":"368","MIME_TYPE":"text/xml","DOCUMENT_FORMAT":null,"OUTGOING":"","FILE_TYPE_DESC":"Egazette","SEC_CLASS_DESC":"Secret","LEGIS_TAGS":null,"TOPIC_TAGS":null,"KM_NOTES":null,"FILE_TYPE_NAME":"Test File Type","SECURITY_CLASSIFICATION_NAME":"Security Classification Name"}}}}
    res.status(200).json(response)
})
//Service Implementation and error handling
document.get('/file/:fileid',(req,res) => {
    let response = {"tuple":[{"old":{"AWP_DOCUMENTS":{"ID":"300","FILE_NAME":"DateTimePicker.png","SERVICE_TYPE":"ADVISORY","DOCUMENT_URL":"AGC/IW/LEGIS/LEG/2022/000000002/DateTimePicker.png","CS_DOCUMENT_ID":"182136","REQUEST_ID":"","FILE_ID":"AG/LEGIS/LEG/B/2022/000000002","REMARKS":"asdasd","DOCUMENT_DESCRIPTION":"asdasd","DOCUMENT_DATE":"2022-06-07T01:16:59.0","DOCUMENT_VERSION":"1","SECURITY_CLASSIFICATION":"SCLASS_S","FILE_TYPE":"11","CREATED_BY":"iadro1","CREATED_ON":"2022-06-08T07:47:04.270000000","LAST_MODIFIED_BY":null,"LAST_MODIFIED_ON":null,"DOCUMENT_CLASS":"","MIME_TYPE":"image/png","DOCUMENT_FORMAT":"png","OUTGOING":"","FILE_TYPE_DESC":null,"SEC_CLASS_DESC":null,"LEGIS_TAGS":null,"TOPIC_TAGS":null,"KM_NOTES":null}}},{"old":{"AWP_DOCUMENTS":{"ID":"316","FILE_NAME":"ADVISORY_ADDED_FILES.xml","SERVICE_TYPE":"ADVISORY","DOCUMENT_URL":"AGC/IW/LEGIS/LEG/2022/000000002/ADVISORY_ADDED_FILES.xml","CS_DOCUMENT_ID":"218679","REQUEST_ID":"","FILE_ID":"AG/LEGIS/LEG/B/2022/000000002","REMARKS":"asd","DOCUMENT_DESCRIPTION":"asd","DOCUMENT_DATE":"2022-07-12T09:03:24.0","DOCUMENT_VERSION":"1","SECURITY_CLASSIFICATION":"SCLASS_S","FILE_TYPE":"10","CREATED_BY":"iadro1","CREATED_ON":"2022-07-15T03:33:28.907000000","LAST_MODIFIED_BY":null,"LAST_MODIFIED_ON":null,"DOCUMENT_CLASS":"","MIME_TYPE":"text/xml","DOCUMENT_FORMAT":"xml","OUTGOING":"","FILE_TYPE_DESC":null,"SEC_CLASS_DESC":null,"LEGIS_TAGS":null,"TOPIC_TAGS":null,"KM_NOTES":null}}},{"old":{"AWP_DOCUMENTS":{"ID":"337","FILE_NAME":"ADVISORY_ASSIGNMENT_CC.xml","SERVICE_TYPE":"ADVISORY","DOCUMENT_URL":"AGC/IW/LEGIS/LEG/2022/000000002/ADVISORY_ASSIGNMENT_CC.xml","CS_DOCUMENT_ID":"221911","REQUEST_ID":"","FILE_ID":"AG/LEGIS/LEG/B/2022/000000002","REMARKS":"asAS","DOCUMENT_DESCRIPTION":"asAS","DOCUMENT_DATE":"2022-07-24T09:26:56.0","DOCUMENT_VERSION":"1","SECURITY_CLASSIFICATION":"SCLASS_S","FILE_TYPE":"1","CREATED_BY":"iadro1","CREATED_ON":"2022-07-25T03:57:00.597000000","LAST_MODIFIED_BY":null,"LAST_MODIFIED_ON":null,"DOCUMENT_CLASS":"","MIME_TYPE":"text/xml","DOCUMENT_FORMAT":"xml","OUTGOING":"","FILE_TYPE_DESC":"Advice","SEC_CLASS_DESC":"Secret","LEGIS_TAGS":null,"TOPIC_TAGS":null,"KM_NOTES":null}}},{"old":{"AWP_DOCUMENTS":{"ID":"358","FILE_NAME":"ADVISORY_CIR_ROUTE.xml","SERVICE_TYPE":"ADVISORY","DOCUMENT_URL":"AGC/IW/AG/LEGIS/LEG/2022/000000002/ADVISORY_CIR_ROUTE.xml","CS_DOCUMENT_ID":"236758","REQUEST_ID":"","FILE_ID":"AG/LEGIS/LEG/B/2022/000000002","REMARKS":"asdasd","DOCUMENT_DESCRIPTION":"asda","DOCUMENT_DATE":"2022-08-01T09:58:49.0","DOCUMENT_VERSION":"1","SECURITY_CLASSIFICATION":"SCLASS_S","FILE_TYPE":"12","CREATED_BY":"iadro1","CREATED_ON":"2022-08-01T04:28:56.790000000","LAST_MODIFIED_BY":null,"LAST_MODIFIED_ON":null,"DOCUMENT_CLASS":"","MIME_TYPE":"text/xml","DOCUMENT_FORMAT":null,"OUTGOING":"","FILE_TYPE_DESC":"Gazette Notification","SEC_CLASS_DESC":"Secret","LEGIS_TAGS":null,"TOPIC_TAGS":null,"KM_NOTES":null}}},{"old":{"AWP_DOCUMENTS":{"ID":"359","FILE_NAME":"ADVISORY_CROSS_DIV_OFF.xml","SERVICE_TYPE":"ADVISORY","DOCUMENT_URL":"AGC/IW/AG/LEGIS/LEG/2022/000000002/ADVISORY_CROSS_DIV_OFF.xml","CS_DOCUMENT_ID":"236881","REQUEST_ID":"","FILE_ID":"AG/LEGIS/LEG/B/2022/000000002","REMARKS":"fghfghfg","DOCUMENT_DESCRIPTION":"hfgh","DOCUMENT_DATE":"2022-08-01T10:20:39.0","DOCUMENT_VERSION":"1","SECURITY_CLASSIFICATION":"SCLASS_S","FILE_TYPE":"11","CREATED_BY":"iadro1","CREATED_ON":"2022-08-01T04:50:50.063000000","LAST_MODIFIED_BY":null,"LAST_MODIFIED_ON":null,"DOCUMENT_CLASS":"","MIME_TYPE":"text/xml","DOCUMENT_FORMAT":null,"OUTGOING":"","FILE_TYPE_DESC":"File Note","SEC_CLASS_DESC":"Secret","LEGIS_TAGS":null,"TOPIC_TAGS":null,"KM_NOTES":null}}},{"old":{"AWP_DOCUMENTS":{"ID":"362","FILE_NAME":"ADVISORY_DISPATCH_DOC.xml","SERVICE_TYPE":"ADVISORY","DOCUMENT_URL":"AGC/IW/AG/LEGIS/LEG/2022/000000002/ADVISORY_DISPATCH_DOC.xml","CS_DOCUMENT_ID":"237330","REQUEST_ID":"","FILE_ID":"AG/LEGIS/LEG/B/2022/000000002","REMARKS":"Test document upload","DOCUMENT_DESCRIPTION":"Test document upload","DOCUMENT_DATE":"2022-08-01T02:51:20.0","DOCUMENT_VERSION":"1","SECURITY_CLASSIFICATION":"SCLASS_S","FILE_TYPE":"11","CREATED_BY":"iadro1","CREATED_ON":"2022-08-01T09:21:27.940000000","LAST_MODIFIED_BY":null,"LAST_MODIFIED_ON":null,"DOCUMENT_CLASS":"","MIME_TYPE":"text/xml","DOCUMENT_FORMAT":null,"OUTGOING":"","FILE_TYPE_DESC":"File Note","SEC_CLASS_DESC":"Secret","LEGIS_TAGS":null,"TOPIC_TAGS":null,"KM_NOTES":null}}},{"old":{"AWP_DOCUMENTS":{"ID":"366","FILE_NAME":"CIR_ROUTE_HISTORY.xml","SERVICE_TYPE":"ADVISORY","DOCUMENT_URL":"AGC/IW/AG/LEGIS/LEG/2022/000000002/CIR_ROUTE_HISTORY.xml","CS_DOCUMENT_ID":"246477","REQUEST_ID":"","FILE_ID":"AG/LEGIS/LEG/B/2022/000000002","REMARKS":"ASDASD","DOCUMENT_DESCRIPTION":"ASD","DOCUMENT_DATE":"2022-08-01T11:34:43.0","DOCUMENT_VERSION":"1","SECURITY_CLASSIFICATION":"SCLASS_S","FILE_TYPE":"10","CREATED_BY":"iadro1","CREATED_ON":"2022-08-18T06:04:49.283000000","LAST_MODIFIED_BY":null,"LAST_MODIFIED_ON":null,"DOCUMENT_CLASS":"","MIME_TYPE":"text/xml","DOCUMENT_FORMAT":null,"OUTGOING":"","FILE_TYPE_DESC":"Egazette","SEC_CLASS_DESC":"Secret","LEGIS_TAGS":null,"TOPIC_TAGS":null,"KM_NOTES":null}}},{"old":{"AWP_DOCUMENTS":{"ID":"367","FILE_NAME":"CIR_TIMELOG.xml","SERVICE_TYPE":"ADVISORY","DOCUMENT_URL":"AGC/IW/AG/LEGIS/LEG/2022/000000002/CIR_TIMELOG.xml","CS_DOCUMENT_ID":"246367","REQUEST_ID":"","FILE_ID":"AG/LEGIS/LEG/B/2022/000000002","REMARKS":"ASDASD","DOCUMENT_DESCRIPTION":"ASD","DOCUMENT_DATE":"2022-08-01T11:34:43.0","DOCUMENT_VERSION":"1","SECURITY_CLASSIFICATION":"SCLASS_S","FILE_TYPE":"10","CREATED_BY":"iadro1","CREATED_ON":"2022-08-18T06:04:49.297000000","LAST_MODIFIED_BY":null,"LAST_MODIFIED_ON":null,"DOCUMENT_CLASS":"","MIME_TYPE":"text/xml","DOCUMENT_FORMAT":null,"OUTGOING":"","FILE_TYPE_DESC":"Egazette","SEC_CLASS_DESC":"Secret","LEGIS_TAGS":null,"TOPIC_TAGS":null,"KM_NOTES":null}}},{"old":{"AWP_DOCUMENTS":{"ID":"368","FILE_NAME":"CIRCULATION.xml","SERVICE_TYPE":"ADVISORY","DOCUMENT_URL":"AGC/IW/AG/LEGIS/LEG/2022/000000002/CIRCULATION.xml","CS_DOCUMENT_ID":"245707","REQUEST_ID":"","FILE_ID":"AG/LEGIS/LEG/B/2022/000000002","REMARKS":"ASDASD","DOCUMENT_DESCRIPTION":"ASD","DOCUMENT_DATE":"2022-08-01T11:34:43.0","DOCUMENT_VERSION":"1","SECURITY_CLASSIFICATION":"SCLASS_S","FILE_TYPE":"10","CREATED_BY":"iadro1","CREATED_ON":"2022-08-18T06:04:49.360000000","LAST_MODIFIED_BY":null,"LAST_MODIFIED_ON":null,"DOCUMENT_CLASS":"","MIME_TYPE":"text/xml","DOCUMENT_FORMAT":null,"OUTGOING":"","FILE_TYPE_DESC":"Egazette","SEC_CLASS_DESC":"Secret","LEGIS_TAGS":null,"TOPIC_TAGS":null,"KM_NOTES":null}}}]}
    res.status(200).json(response)
})
//Service Implementation and error handling
document.get('/request/:requestno',(req,res) => {
    let response = {"@xmlns:SOAP":"http://schemas.xmlsoap.org/soap/envelope/","@xmlns":"http://schemas.agc.com/DocumentsServices"}
    res.status(200).json(response)
})
//Service Implementation and error handling
document.get('/all-files/:fileid',(req,res) => {
    let response = {"tuple":[{"old":{"AWP_DOCUMENTS":{"ID":"300","FILE_NAME":"DateTimePicker.png","SERVICE_TYPE":"ADVISORY","DOCUMENT_URL":"AGC/IW/LEGIS/LEG/2022/000000002/DateTimePicker.png","CS_DOCUMENT_ID":"182136","REQUEST_ID":"","FILE_ID":"AG/LEGIS/LEG/B/2022/000000002","REMARKS":"asdasd","DOCUMENT_DESCRIPTION":"asdasd","DOCUMENT_DATE":"2022-06-07T01:16:59.0","DOCUMENT_VERSION":"1","SECURITY_CLASSIFICATION":"SCLASS_S","FILE_TYPE":"11","CREATED_BY":"iadro1","CREATED_ON":"2022-06-08T07:47:04.270000000","LAST_MODIFIED_BY":null,"LAST_MODIFIED_ON":null,"DOCUMENT_CLASS":"","MIME_TYPE":"image/png","DOCUMENT_FORMAT":"png","OUTGOING":"","FILE_TYPE_DESC":null,"SEC_CLASS_DESC":null,"LEGIS_TAGS":null,"TOPIC_TAGS":null,"KM_NOTES":null}}},{"old":{"AWP_DOCUMENTS":{"ID":"316","FILE_NAME":"ADVISORY_ADDED_FILES.xml","SERVICE_TYPE":"ADVISORY","DOCUMENT_URL":"AGC/IW/LEGIS/LEG/2022/000000002/ADVISORY_ADDED_FILES.xml","CS_DOCUMENT_ID":"218679","REQUEST_ID":"","FILE_ID":"AG/LEGIS/LEG/B/2022/000000002","REMARKS":"asd","DOCUMENT_DESCRIPTION":"asd","DOCUMENT_DATE":"2022-07-12T09:03:24.0","DOCUMENT_VERSION":"1","SECURITY_CLASSIFICATION":"SCLASS_S","FILE_TYPE":"10","CREATED_BY":"iadro1","CREATED_ON":"2022-07-15T03:33:28.907000000","LAST_MODIFIED_BY":null,"LAST_MODIFIED_ON":null,"DOCUMENT_CLASS":"","MIME_TYPE":"text/xml","DOCUMENT_FORMAT":"xml","OUTGOING":"","FILE_TYPE_DESC":null,"SEC_CLASS_DESC":null,"LEGIS_TAGS":null,"TOPIC_TAGS":null,"KM_NOTES":null}}},{"old":{"AWP_DOCUMENTS":{"ID":"337","FILE_NAME":"ADVISORY_ASSIGNMENT_CC.xml","SERVICE_TYPE":"ADVISORY","DOCUMENT_URL":"AGC/IW/LEGIS/LEG/2022/000000002/ADVISORY_ASSIGNMENT_CC.xml","CS_DOCUMENT_ID":"221911","REQUEST_ID":"","FILE_ID":"AG/LEGIS/LEG/B/2022/000000002","REMARKS":"asAS","DOCUMENT_DESCRIPTION":"asAS","DOCUMENT_DATE":"2022-07-24T09:26:56.0","DOCUMENT_VERSION":"1","SECURITY_CLASSIFICATION":"SCLASS_S","FILE_TYPE":"1","CREATED_BY":"iadro1","CREATED_ON":"2022-07-25T03:57:00.597000000","LAST_MODIFIED_BY":null,"LAST_MODIFIED_ON":null,"DOCUMENT_CLASS":"","MIME_TYPE":"text/xml","DOCUMENT_FORMAT":"xml","OUTGOING":"","FILE_TYPE_DESC":"Advice","SEC_CLASS_DESC":"Secret","LEGIS_TAGS":null,"TOPIC_TAGS":null,"KM_NOTES":null}}},{"old":{"AWP_DOCUMENTS":{"ID":"358","FILE_NAME":"ADVISORY_CIR_ROUTE.xml","SERVICE_TYPE":"ADVISORY","DOCUMENT_URL":"AGC/IW/AG/LEGIS/LEG/2022/000000002/ADVISORY_CIR_ROUTE.xml","CS_DOCUMENT_ID":"236758","REQUEST_ID":"","FILE_ID":"AG/LEGIS/LEG/B/2022/000000002","REMARKS":"asdasd","DOCUMENT_DESCRIPTION":"asda","DOCUMENT_DATE":"2022-08-01T09:58:49.0","DOCUMENT_VERSION":"1","SECURITY_CLASSIFICATION":"SCLASS_S","FILE_TYPE":"12","CREATED_BY":"iadro1","CREATED_ON":"2022-08-01T04:28:56.790000000","LAST_MODIFIED_BY":null,"LAST_MODIFIED_ON":null,"DOCUMENT_CLASS":"","MIME_TYPE":"text/xml","DOCUMENT_FORMAT":null,"OUTGOING":"","FILE_TYPE_DESC":"Gazette Notification","SEC_CLASS_DESC":"Secret","LEGIS_TAGS":null,"TOPIC_TAGS":null,"KM_NOTES":null}}},{"old":{"AWP_DOCUMENTS":{"ID":"359","FILE_NAME":"ADVISORY_CROSS_DIV_OFF.xml","SERVICE_TYPE":"ADVISORY","DOCUMENT_URL":"AGC/IW/AG/LEGIS/LEG/2022/000000002/ADVISORY_CROSS_DIV_OFF.xml","CS_DOCUMENT_ID":"236881","REQUEST_ID":"","FILE_ID":"AG/LEGIS/LEG/B/2022/000000002","REMARKS":"fghfghfg","DOCUMENT_DESCRIPTION":"hfgh","DOCUMENT_DATE":"2022-08-01T10:20:39.0","DOCUMENT_VERSION":"1","SECURITY_CLASSIFICATION":"SCLASS_S","FILE_TYPE":"11","CREATED_BY":"iadro1","CREATED_ON":"2022-08-01T04:50:50.063000000","LAST_MODIFIED_BY":null,"LAST_MODIFIED_ON":null,"DOCUMENT_CLASS":"","MIME_TYPE":"text/xml","DOCUMENT_FORMAT":null,"OUTGOING":"","FILE_TYPE_DESC":"File Note","SEC_CLASS_DESC":"Secret","LEGIS_TAGS":null,"TOPIC_TAGS":null,"KM_NOTES":null}}},{"old":{"AWP_DOCUMENTS":{"ID":"362","FILE_NAME":"ADVISORY_DISPATCH_DOC.xml","SERVICE_TYPE":"ADVISORY","DOCUMENT_URL":"AGC/IW/AG/LEGIS/LEG/2022/000000002/ADVISORY_DISPATCH_DOC.xml","CS_DOCUMENT_ID":"237330","REQUEST_ID":"","FILE_ID":"AG/LEGIS/LEG/B/2022/000000002","REMARKS":"Test document upload","DOCUMENT_DESCRIPTION":"Test document upload","DOCUMENT_DATE":"2022-08-01T02:51:20.0","DOCUMENT_VERSION":"1","SECURITY_CLASSIFICATION":"SCLASS_S","FILE_TYPE":"11","CREATED_BY":"iadro1","CREATED_ON":"2022-08-01T09:21:27.940000000","LAST_MODIFIED_BY":null,"LAST_MODIFIED_ON":null,"DOCUMENT_CLASS":"","MIME_TYPE":"text/xml","DOCUMENT_FORMAT":null,"OUTGOING":"","FILE_TYPE_DESC":"File Note","SEC_CLASS_DESC":"Secret","LEGIS_TAGS":null,"TOPIC_TAGS":null,"KM_NOTES":null}}},{"old":{"AWP_DOCUMENTS":{"ID":"366","FILE_NAME":"CIR_ROUTE_HISTORY.xml","SERVICE_TYPE":"ADVISORY","DOCUMENT_URL":"AGC/IW/AG/LEGIS/LEG/2022/000000002/CIR_ROUTE_HISTORY.xml","CS_DOCUMENT_ID":"246477","REQUEST_ID":"","FILE_ID":"AG/LEGIS/LEG/B/2022/000000002","REMARKS":"ASDASD","DOCUMENT_DESCRIPTION":"ASD","DOCUMENT_DATE":"2022-08-01T11:34:43.0","DOCUMENT_VERSION":"1","SECURITY_CLASSIFICATION":"SCLASS_S","FILE_TYPE":"10","CREATED_BY":"iadro1","CREATED_ON":"2022-08-18T06:04:49.283000000","LAST_MODIFIED_BY":null,"LAST_MODIFIED_ON":null,"DOCUMENT_CLASS":"","MIME_TYPE":"text/xml","DOCUMENT_FORMAT":null,"OUTGOING":"","FILE_TYPE_DESC":"Egazette","SEC_CLASS_DESC":"Secret","LEGIS_TAGS":null,"TOPIC_TAGS":null,"KM_NOTES":null}}}]}
    res.status(200).json(response)
})
module.exports = document