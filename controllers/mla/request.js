const express = require('express')
const mlaRequestRouter = express.Router({mergeParams: true})

mlaRequestRouter.get('/',(req,res) => {
    logger.info('Inside mla request script!!')
    res.status(200)
})

module.exports = mlaRequestRouter