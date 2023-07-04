const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const mocha = require('gulp-mocha')
const babel = require('babel-register')
const config = require('./root/config')

gulp.task('serve', function(){
    nodemon({
        script: 'index.js',
        ext: 'js',
        env: {
            NODE_ENV: 'dev',
            port: process.env.PORT || config.port
        },
        ignore: ['./node_modules/*']
    })
})

gulp.task('test', function(){
    return gulp.src(['src/test/*.js'])
    .pipe(mocha({
      compilers:babel
    }));
})

gulp.watch('src/*.js',gulp.series(['serve']))