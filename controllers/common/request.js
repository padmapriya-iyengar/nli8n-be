const express = require('express')
const request = express.Router({mergeParams: true})

const reqServ = require('../../services/agc_request')
const fileReqMapServ = require('../../services/agc_file_request_map')

request.get('/',(req,res) => {
    reqServ.getRequestByRequestNo(req.query).then((rows)=>{
        res.status(200).json(rows)
    }).catch((err) => setImmediate(()=>{throw err;}))
})

request.get('/details',(req,res) => {
    fileReqMapServ.readRequestByRequestNo(req.query).then((rows)=>{
        res.status(200).json(rows)
    }).catch((err) => setImmediate(()=>{throw err;}))
})

request.get('/requests-for-file',(req,res) => {
    fileReqMapServ.readRequestsByFileReferenceNo(req.query).then((rows)=>{
        res.status(200).json(rows)
    }).catch((err) => setImmediate(()=>{throw err;}))
})

request.get('/read-request',(req,res) => {
    fileReqMapServ.readRequestByRequestNo(req.query).then((rows)=>{
        res.status(200).json(rows)
    }).catch((err) => setImmediate(()=>{throw err;}))
})

request.post('/create-request',(req,res) => {
    reqServ.createRequest(req.query, req.body).then((rows)=>{
        res.status(200).json({RequestNo:rows.toJSON().RequestNo})
    }).catch((err) => setImmediate(()=>{throw err;}))
})

request.get('/requests',(req,res) => {
    reqServ.getAllRequests().then((rows)=>{
        res.status(200).json(rows)
    }).catch((err) => setImmediate(()=>{throw err;}))
})

module.exports = request