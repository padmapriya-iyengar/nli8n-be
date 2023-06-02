const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const config = require('./root/config')

gulp.task('serve', function(){
    nodemon({
        script: 'index.js',
        ext: 'js',
        env: {
            NODE_ENV: 'dev',
            port: process.env.PORT || config.port
        },
        ignore: ['./node_modules/**']
    })
})