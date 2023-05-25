const express = require('express')
const circulation = express.Router({mergeParams: true})

circulation.get('/',(req,res) => {
    console.log('Inside agc circulation script!!')
    res.status(200)
})

//finish the implementation and error handling
circulation.post('/create-participant',(req,res) => {
    let newData = req.body;
    res.status(200).json('Circulation participant created!!')
})

module.exports = circulation