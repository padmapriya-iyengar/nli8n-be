const express = require('express')
const mlaFileRouter = express.Router({mergeParams: true})

mlaFileRouter.get('/',(req,res) => {
    console.log('Inside mla file script!!')
    res.status(200)
})

module.exports = mlaFileRouter