const configuration = {
    express_port: 3010,
    origins: 'http://localhost:4200',
    methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    headers: 'X-Requested-With,content-type',
    credentials: true,
    data_file_path: '/Users/kiranjoshi/Documents/Nandu/projects/agc-node-api/data/',
    enable_log: {
        success: false,
        error: false
    },
    log_config:{
        folder: './/logs//',
        file: 'agc-log-%DATE%.log'
    },
    wsDelay: 5000,
    db:{
        schema:'app_db',
        username:'appuser',
        password:'appuser@123',
        host:'localhost',
        dialect:'mysql',
        timezome:'+04:00'
    }
}

module.exports = configuration