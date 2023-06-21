const bcrypt = require("bcrypt")
const db = require("./common")

const hashPassword = async(reqBody) => {
    const salt = await bcrypt.genSalt(reqBody.saltrounds)
    return await bcrypt.hash(reqBody.password,salt)
}

const comparePassword = async (password, hash, callback) => {
    bcrypt.compare(password, hash, function(err, isPasswordMatch) {   
        return err == null ?
            callback(null, isPasswordMatch) :
            callback(err, false);
    });
}

module.exports = {
    hashPassword,
    comparePassword
}