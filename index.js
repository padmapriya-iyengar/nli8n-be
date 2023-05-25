const express = require('express')
const app = express()
const port = 3010
const errHandle = require('./root/error')
const sequelize = require('./root/db_connect')

const morgan = require('morgan')
morgan.token('m-type', function(req,res) {return req.method})
morgan.token('m-request', function(req,res) {return req.body})
morgan.token('m-url', function(req,res) {return req.protocol + '://' + req.get('host') + req.originalUrl})
morgan.token('m-status', function(req,res) {return res.statusCode})
app.use(morgan('--Logger--\nType\: :m-type \nRequest\: :m-request \nURL\: :m-url \nStatus\: :m-status'))

const root = require('./controllers/common/agc');
app.use('/agc',root)

app.get('/',(req,res) => {
    console.log('AGC Node Explorations!!')
    res.status(200)
})

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
    app.listen(port,() => {
        console.log(`Listening to port ${port}`)
    })
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

 process.on('exit',function(){
    console.log('DB Connection Ended!!')
    sequelize.close();
})

app.use((err,req,res) => {
    if(err){
        let apiError = new errHandle('API Error',err.status,err.stack)
        console.log('Inside error handler!!')
        //throw apiError.getErrorObj()
        throw err.stack
    }
})