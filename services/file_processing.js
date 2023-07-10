const fs = require('fs')

const readFile = filePath => {
    return new Promise(function(resolve,reject){
        if (fs.existsSync(filePath)){
            fs.readFile(filePath,'utf-8',function(err,data){
                if(err) throw err
                return resolve(data)
            })
        } else{
            return null
        }
    })
}

module.exports = {
    readFile: readFile
}