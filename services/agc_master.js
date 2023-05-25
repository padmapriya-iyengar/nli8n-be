const db = require('./common')

const getMasterData = async(reqBody) => {
    if(reqBody.source == 'type'){
      return await db.master.findAll({where: {type: reqBody.identifier, status: 1}})
    } else if(reqBody.source == 'type_parent'){
      return await db.master.findAll({where: {type: reqBody.identifier, parent_code: reqBody.parent_code, status: 1}})
    } else if(reqBody.source == 'code'){
      return await db.master.findAll({where: {code: reqBody.identifier, status: 1}})
    }
}

module.exports = {
    getMasterData
}