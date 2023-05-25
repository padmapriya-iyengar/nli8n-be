const express = require('express')
const advisory = express.Router({mergeParams: true})

const fileRouter = require('./file')
const requestRouter = require('./request')

advisory.use('/file',fileRouter)
advisory.use('/request',requestRouter)

advisory.get('/',(req,res) => {
    console.log('Inside advisory script!!')
    res.status(200)
})

module.exports = advisory