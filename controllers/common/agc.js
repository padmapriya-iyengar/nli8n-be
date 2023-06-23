const express = require('express')
const agc = express.Router({mergeParams: true})
const logger = require('../../root/logger')

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
const loginServ = require('../../services/agc_login')
const message = require('../../root/message')

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
    fileServ.getFilesForDashboard(req.query).then((rows)=>{
        res.status(200).json(rows)
    }).catch((err) => setImmediate(()=>{throw err;}))
})

agc.get('/dashboard-requests',(req,res) => {
    reqServ.getRequestsForDashboard(req.query).then((rows)=>{
        res.status(200).json(rows)
    }).catch((err) => setImmediate(()=>{throw err;}))
})

agc.post('/login',async(req,res) => {
    const userData = await userServ.getUserInfo({username:req.body.data.username})
    if(userData.length != 0){
        loginServ.comparePassword(req.body.data.password,userData[0].password,function(err,isMatch){
            if(err || !isMatch)
                res.status(200).json({status: 'FAIL', message: message.responses.INVALID_PASSWORD_MESSAGE, details: message.responses.INVALID_PASSWORD_DETAILS})
            else if(isMatch)
                res.status(200).json({status: 'SUCCESS', message:'Success', details: message.responses.USER_LOGIN_SUCCESS})
        })
    }
    else
        res.status(200).json({status: 'NO_USER', message: message.responses.INVALID_USERNAME_MESSAGE, details: message.responses.INVALID_USERNAME_DETAILS})
})

agc.get('/hash',(req,res) => {
    loginServ.hashPassword(req.query).then((rows) => {
        res.status(200).json(rows)
    }).catch((err) => setImmediate(()=>{throw err;}))
})

agc.post('/create-user',(req,res) => {
    userServ.createUser(req.body.data).then((rows)=>{
        res.status(200).json({status: 'SUCCESS', message: rows.toJSON().display_name+message.responses.USER_CREATION_SUCCESS})
    }).catch((err) => setImmediate(()=>{throw err;}))
})

module.exports = agc