const express = require('express')
const file = express.Router({mergeParams: true})

const fileServ = require('../../services/agc_file')

file.get('/',(req,res) => {
    logger.info('Inside agc file script!!')
    res.status(200)
})

file.get('/read-file',(req,res) => {
    fileServ.readFileByReference(req.query).then(function(rows){
        res.status(200).json(rows)
    }).catch((err) => setImmediate(()=>{throw err;}))
})

file.post('/create-file',(req,res) => {
    fileServ.createFile(req.body).then(function(rows){
        fileServ.readFileByReference({fileNo:req.body.data.ReferenceNo}).then(function(createRows){
            res.status(200).json(createRows)
        })
    }).catch((err) => setImmediate(()=>{throw err;}))
})
//finish the error handling
file.get('/requests/:file-no',(req,res) => {
    let response = {"GetRequestsResponse":{"GenericRequest":{"LastModifiedBy":{"Identity-id":{"Id":"164134917","ItemId":"F8B156E1037111E6E9CB0FBF3334FBBF.164134917"}},"CreatedBy":{"Identity-id":{"Id":"163971073","ItemId":"F8B156E1037111E6E9CB0FBF3334FBBF.163971073"}},"Tracking":{"LastModifiedDate":"2022-07-18T15:32:32Z","CreatedDate":"2022-07-18T15:30:18Z","LastModifiedBy":{"Identity-id":{"Id":"164134917","ItemId":"F8B156E1037111E6E9CB0FBF3334FBBF.164134917"}},"CreatedBy":{"Identity-id":{"Id":"163971073","ItemId":"F8B156E1037111E6E9CB0FBF3334FBBF.163971073"}}},"MainFile":{"GenericFile-id":{"Id":"2473999","ItemId":"002248573547A1EC9E9CF72B1B84A817.2473999"}},"Lifecycle":{"InstanceIdentifier":"00224857-3547-A1ED-81AB-A043B784E824","CurrentState":"Forward to Assignment / Assign within Division","CurrentStateId":"00224857-3547-A1EC-A2C8-46FBDBF22819","ParentState":"Forward to Assignment / Assign within Division","RootState":"Forward to Assignment / Assign within Division","PriorActivity":"SetFileToRequestRelation","PriorEvent":"All Activity Completion","PreviousState":"FA/ AD Procesing","PreviousStateId":"00224857-3547-A1EC-BC4F-D7459A1B2822","InstanceStatus":"In Progress"},"Title":{"Value":"ADV000000058"},"DateOfDispatch":null,"AssigningOfficer":null,"PostalCode":null,"DueDateChangeRemarks":null,"RequestReceivedModeDesc":"By Fax","IsMigrated":null,"DefaultDocumentsURL":null,"RequestReceivedMode":"RMODE_F","RequestCreatedBy":"iadro1","I_ReqCloseHandler_InstanceID":null,"InternalRequestingDivisionDesc":null,"I_AOUserDN":null,"MainOfficerExists":"true","OfficerEmail":null,"RevisedDueDate":null,"I_Current_AOTaskID":null,"ActionsDraft":"Assign within Division","ActionsClosureReason":"RCR_F","ExpResponseDate":"2022-07-19T12:00:00Z","RequestLocked":"false","CountryForeignOrgDesc":null,"ForeignAgencyType":null,"AllowAO_OOO":"false","ActionsMainOfficer":"false","IsSensitive":"false","RequestorName":"test","Internal":"false","RequestLockedBy":null,"I_ROUserDN":null,"ForeignAgencyTypeDesc":null,"RequestingAgencyRefNo":null,"RequestActions":null,"ActionsLO":"Return to Registry","ComplexityChangeRemarks":null,"ContactNo":null,"OfficerName":null,"DefaultLayoutID":"002248573547A1ECA970AD0E1EFC681B","SecurityClassification":"SCLASS_S","LO_OOO_Message":null,"LayoutID":"002248573547A1ECA2C9120D41FB2819","BlockOrHouseName":null,"ReceivedDate":"2022-07-18T08:59:58Z","RequestingAgencyNameDesc":"MINISTRY OF COMMUNITY DEVELOPMENT, YOUTH And SPORTS","LegisTags":null,"ActionsAssigningOfficer":null,"RequestingAgencyName":"MCYS","RequestingAgencyType":"EAT_GM","RequestTypeDesc":"Advisory","Email":"test@gmail.om","UserDivision":"LEGIS","RequestStatusDesc":"Assigned","OtherAgency":null,"InternalRequestingDivision":null,"CountryForeignOrg":null,"DocumentsURL":"/home/AGC/SIW/#/?source=Request&itemID=002248573547A1EC9F382DC3A9CD6817.2998276","BuildingName":null,"I_LOConsolidation_InstanceID":"00224857-3547-A1ED-81AB-AC35A082E824","AllowLO_OOO":"false","RequestStatus":"RSTAT_A","IsAO_OOO":"false","ComplexityDesc":"Extremely Complex","RequestDueDate":"2022-08-15T00:00:00Z","ActionsRO":null,"RequestClosedDate":null,"RequestCreatedDate":"2022-07-18T09:00:18Z","I_AOGroupDN":null,"ActionsOfficerName":"legislo2","RequestState":"Assign within Division","ForeignAgencyNameDesc":null,"DashboardURL":"/home/AGC/SIW/#/dashboard","UrgencyDesc":"Not Urgent","HistoryURL":"/home/AGC/SIW/#/?history&itemID=002248573547A1EC9F382DC3A9CD6817.2998276&source=Request","Complexity":"RCOMPLEX_EC","StreetName":null,"ActionRemarks":"remarks","RequestNo":"ADV000000058","ActionsAO":null,"I_Current_ROTaskID":null,"LocalForeignDesc":"Local","Remarks":null,"UnitNo":null,"LocalForeign":"ADDR_L","RevisedComplexity":null,"Sensitivity":"true","ForeignAgencyName":null,"CSPath":"AG/LEGIS/LEG/2022/000000002/ADV000000058","ActionsReturnToRegistryReason":"RCR_F","I_MainFileRefNo":"AG/LEGIS/LEG/B/2022/000000002","I_OfficersEmail":null,"LocalOrForeign":null,"SecurityClassificationDesc":"Secret","Urgency":"RURGENT_NU","TopicTags":null,"I_Edit":null,"RequestingAgencyTypeDesc":"Government Ministry","ClosureReasons":null,"OriginalDueDate":"2022-08-15T05:30:00Z","AO_OOO_Message":null,"E_RevisedDueDate":null,"RequestTitle":"Advisory Request LO","RequestType":"RTYPE_ADV","IsLO_OOO":"false","I_ROGroupDN":"","I_TargetTypeValue":"00224857-3547-A1EC-AC2D-A62398BA281B","RequestLockedTime":null,"GenericRequest-id":{"Id":"2998276","ItemId":"002248573547A1EC9F382DC3A9CD6817.2998276"}}}}
    res.status(200).json(response)
})
module.exports = file