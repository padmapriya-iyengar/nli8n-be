const configuration = {
    origins: 'http://localhost:4200',
    methods: 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    headers: 'X-Requested-With,content-type',
    credentials: true,
    data_file_path: '/Users/kiranjoshi/Documents/Nandu/projects/agc-node-api/data/',
    enable_log: {
        success: false,
        error: false
    }
}

module.exports = configuration