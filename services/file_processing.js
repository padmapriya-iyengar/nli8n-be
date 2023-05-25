const fs = require('fs')

const readFile = filePath => {
    return new Promise(function(resolve,reject) {
        fs.readFile(filePath,'utf-8',function(err,data){
            if(err) throw err
            return resolve(data)
        })
    })
}

module.exports = {
    readFile: readFile
}