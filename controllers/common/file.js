const express = require('express')
const file = express.Router({mergeParams: true})

const fileServ = require('../../services/agc_file')
const fileReqMapServ = require('../../services/agc_file_request_map')
const logger = require('../../root/logger')

file.get('/',(req,res) => {
    fileServ.getFileByReference(req.query).then((rows)=>{
        res.status(200).json(rows)
    }).catch((err) => setImmediate(()=>{throw err;}))
})

file.get('/details',(req,res) => {
    fileReqMapServ.readFileByReference(req.query).then((rows)=>{
        res.status(200).json(rows)
    }).catch((err) => setImmediate(()=>{throw err;}))
})

file.get('/files-for-request',(req,res) => {
    fileReqMapServ.readFilesByRequestNo(req.query).then((rows)=>{
        res.status(200).json(rows)
    }).catch((err) => setImmediate(()=>{throw err;}))
})

file.get('/read-file',(req,res) => {
    fileServ.getFileByReference(req.query).then((rows)=>{
        res.status(200).json(rows)
    }).catch((err) => setImmediate(()=>{throw err;}))
})

file.post('/create-file',(req,res) => {
    fileServ.createFile(req.body).then((rows) => {
        res.status(200).json({ReferenceNo:rows.toJSON().ReferenceNo})
    }).catch((err) => setImmediate(()=>{throw err;}))
})

file.get('/files',(req,res) => {
    fileServ.getAllFiles().then((rows)=>{
        res.status(200).json(rows)
    }).catch((err) => setImmediate(()=>{throw err;}))
})

module.exports = file