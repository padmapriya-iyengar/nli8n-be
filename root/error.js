let errName, httpCode = ''
let errDescription = {}

let APIError = class {
    constructor(errName, httpCode = '500', errDescription = 'internal server error') {
        this.errName = errName;
        this.httpCode = httpCode;
        this.errDescription = errDescription;
    }
    getErrorObj(){
        let errObj = {
            error_name: this.errName,
            http_code: this.httpCode,
            error_desc: this.errDescription
        }
        return `Error Details - ${JSON.stringify(errObj)}`
    }
}
 
module.exports = APIError;