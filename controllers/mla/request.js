const express = require('express')
const mlaRequestRouter = express.Router({mergeParams: true})

mlaRequestRouter.get('/',(req,res) => {
    console.log('Inside mla request script!!')
    res.status(200)
})

module.exports = mlaRequestRouter