const express = require('express')
const advisoryFileRouter = express.Router({mergeParams: true})

advisoryFileRouter.get('/',(req,res) => {
    console.log('Inside advisory file script!!')
    res.status(200)
})

module.exports = advisoryFileRouter