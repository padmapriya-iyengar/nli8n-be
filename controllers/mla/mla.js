const express = require('express')
const mla = express.Router({mergeParams: true})

const fileRouter = require('./file')
const requestRouter = require('./request')

mla.use('/file',fileRouter)
mla.use('/request',requestRouter)

mla.get('/',(req,res) => {
    logger.info('Inside mla script!!')
    res.status(200)
})

module.exports = mla