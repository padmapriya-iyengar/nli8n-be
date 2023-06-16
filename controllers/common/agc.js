const express = require('express')
const agc = express.Router({mergeParams: true})

const fileRouter = require('./file')
const requestRouter = require('./request')
const documentRouter = require('./document')
const migrationRouter = require('./migration')
const advisory = require('../advisory/advisory')
const db = require('../../services/common')
const config = require('../../root/config')
const masterServ = require('../../services/agc_master')
const notfServ = require('../../services/agc_notification')
const userServ = require('../../services/agc_user')
const userDivServ = require('../../services/agc_user_division')
const userPrfServ = require('../../services/agc_user_profile')
const seqServ = require('../../services/agc_sequence')
const fileServ = require('../../services/agc_file')
const reqServ = require('../../services/agc_request')

const rx = require('rxjs')

agc.use('/file',fileRouter)
agc.use('/request',requestRouter)
agc.use('/advisory',advisory)
agc.use('/document',documentRouter)
agc.use('/migration',migrationRouter)

agc.get('/',(req,res) => {
    logger.info('Inside root agc script!!')
    res.status(200)
})

agc.get('/master-data',(req,res) => {
    masterServ.getMasterData(req.query).then((rows)=>{
        res.status(200).json(rows)
    }).catch((err)=>setImmediate(()=>{throw err}));
})

agc.get('/notifications',(req,res) => {
    notfServ.getUserNotifications(req.query).then((rows)=>{
        res.status(200).json(rows)
    }).catch((err)=>setImmediate(()=>{throw err}));
})

agc.post('/notifications',(req,res) => {
    notfServ.updateUserNotifications(req.query,req.body).then((rows)=>{
        notfServ.getUserNotificationByID(req.query).then((rows)=>{
            res.status(200).json(rows)
        }).catch((err)=>setImmediate(()=>{throw err}));
    }).catch((err)=>setImmediate(()=>{throw err}));
})

agc.get('/user-divisions',(req,res) => {
    userDivServ.getUserDivisions(req.query).then((rows)=>{
        res.status(200).json(rows)
    }).catch((err)=>setImmediate(()=>{throw err}));
})

agc.get('/users',(req,res) => {
    userServ.getAllUsers().then((rows)=>{
        res.status(200).json(rows)
    }).catch((err)=>setImmediate(()=>{throw err}));
})

agc.get('/user-profile',(req,res) => {
    userPrfServ.getUserProfile(req.query).then((rows)=>{
        res.status(200).json(rows)
    }).catch((err)=>setImmediate(()=>{throw err}));
})

agc.get('/user-details',(req,res) => {
    userServ.getUserInfo(req.query).then((rows)=>{
        res.status(200).json(rows)
    }).catch((err)=>setImmediate(()=>{throw err}));
})

agc.post('/user-profile',(req,res) => {
    userPrfServ.updateUserProfile(req.query,req.body).then((rows)=>{
        userPrfServ.getUserProfile(req.query).then((rows)=>{
            res.status(200).json(rows)
        }).catch((err)=>setImmediate(()=>{throw err}));
    }).catch((err)=>setImmediate(()=>{throw err}));
})

agc.post('/sequence',(req,res) => {
    seqServ.generateSequence(req.query).then((rows)=>{
        seqServ.getSequence(req.query).then((rows)=>{
            res.status(200).json(rows)
        }).catch((err)=>setImmediate(()=>{throw err}));
    }).catch((err)=>setImmediate(()=>{throw err}));
})

agc.get('/sequence',(req,res) => {
    seqServ.getSequence(req.query).then((rows)=>{
        res.status(200).json(rows)
    }).catch((err)=>setImmediate(()=>{throw err}));
})

agc.get('/dashboard-files',(req,res) => {
    fileServ.getFilesForDashboard().then((rows)=>{
        res.status(200).json(rows)
    }).catch((err) => setImmediate(()=>{throw err;}))
})

agc.get('/dashboard-requests',(req,res) => {
    reqServ.getRequestsForDashboard().then((rows)=>{
        res.status(200).json(rows)
    }).catch((err) => setImmediate(()=>{throw err;}))
})

//finish the implementation and error handling
agc.post('/login',(req,res) => {
    let newData = req.body;
    res.status(200).json('Login successful!!')
})

module.exports = agc