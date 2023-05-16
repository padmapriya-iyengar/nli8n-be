const express = require('express')
const advisoryRequestRouter = express.Router({mergeParams: true})

advisoryRequestRouter.get('/',(req,res) => {
    console.log('Inside advisory request script!!')
    res.status(200)
})

module.exports = advisoryRequestRouter