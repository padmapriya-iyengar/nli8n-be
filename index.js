const express = require('express')
const app = express()

global.agc_config = require('./root/config')
const port = process.env.PORT || global.agc_config.express_port

const errHandle = require('./root/error')
const logger = require('./root/logger')
const root = require('./controllers/common/agc');
const websocket = require('./websockets/ws');

const sequelize = require('./root/db_connect')

const morgan = require('morgan')
morgan.token('m-type', function(req,res) {return req.method})
morgan.token('m-request', function(req,res) {return req.method=='POST'?JSON.stringify(req.body):JSON.stringify(req.query)})
morgan.token('m-url', function(req,res) {return req.protocol + '://' + req.get('host') + req.originalUrl})
morgan.token('m-status', function(req,res) {return res.statusCode})
app.use(morgan('Type\: :m-type -- Request\: :m-request -- URL\: :m-url -- Status\: :m-status -- Response Time\: :response-time ms', {stream: {write: message => logger.info(message)}}))

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin',global.agc_config.header_options.origins);
    res.setHeader('Access-Control-Allow-Methods',global.agc_config.header_options.methods);
    res.setHeader('Access-Control-Allow-Headers',global.agc_config.header_options.headers);
    res.setHeader('Access-Control-Allow-Credentials',global.agc_config.header_options.credentials);
    next();
});

app.use('/agc',root)

app.use(express.static(process.cwd()+global.agc_config.app_path));
app.get('/', (req,res) => {
    res.sendFile(process.cwd()+global.agc_config.app_path+global.agc_config.root_app_file)  
});  
app.get('/',(req,res) => {
    logger.info('AGC Node Explorations!!')
    res.status(200)
})

sequelize.authenticate().then(() => {
     logger.info('Connection has been established successfully.')
     const server = app.listen(port,() => {
         logger.info(`Listening to port ${port}`)
     })
     websocket(server);
  }).catch((error) => {
     logger.error('Unable to connect to the database: ', error);
  });

 process.on('exit',function(){
    logger.info('DB Connection Ended!!')
    sequelize.close();
})

app.use((err,req,res) => {
    if(err){
        let apiError = new errHandle('API Error',err.status,err.stack)
        logger.info('Error details - '+err.stack)
        throw err.stack
    }
})

module.exports = app;