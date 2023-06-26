const websocket = require('ws')
const logger = require('../root/logger')
const notfServ = require('../services/agc_notification')

module.exports = async function(expressServer){
    let notificationCount = {};
    let delay = global.agc_config.wsDelay

    const wsServer = new websocket.Server({
        noServer: true,
        path: "/websockets",
    });

    expressServer.on("upgrade", (request, socket, head) => {
        wsServer.handleUpgrade(request, socket, head, (websocket) => {
            wsServer.emit("connection", websocket, request);
        });
    });

    wsServer.on(
        "connection",
        function connection(wsConnection, connectionReq) {
            wsConnection.isAlive = true;
            wsConnection.on('pong', () => {
                wsConnection.isAlive = true;
            });
            const [_path, params] = connectionReq?.url?.split("?");
            logger.info('Web socket logger - Connection - '+params)
    
            wsConnection.on("message", (message) => {
                logger.info('Web socket logger - Message - '+message)
                wsConnection.send(JSON.stringify({ message: message.toString() }));
            });

            setInterval(() => {
                notfServ.getAllNotifications().then((rows)=>{
                    wsConnection.send(JSON.stringify({ identifier:'NOTIFICATION_INFO', data: rows }));
                }).catch((err)=>setImmediate(()=>{wsConnection.send(JSON.stringify({ identifier:'NOTIFICATION_INFO', data: err })); throw err;}));
                
            }, delay);

            wsConnection.on("close", () =>{
                wsConnection.terminate();
            })
        }
    );

    return wsServer;
}