const db = require('./common')
const util = require('../utilities')
const {Op} = require('sequelize')

const getMasterData = async(reqBody) => {
    if(reqBody.source == 'type'){
      return await db.master.findAll({where: {type: reqBody.identifier, status: 1}})
    } else if(reqBody.source == 'type_parent'){
      return await db.master.findAll({where: {type: reqBody.identifier, parent_code: reqBody.parent_code, status: 1}})
    } else if(reqBody.source == 'code'){
      return await db.master.findAll({where: {code: reqBody.identifier, status: 1}})
    } else if(reqBody.source == 'types'){
      let sourceTypes = reqBody.identifier.split(',')
      let queryTypes = [];
      sourceTypes.forEach((item) => {
        if(!util.isStringEmpty(item)){
          queryTypes[queryTypes.length]=item
        }
      })
      return await db.master.findAll({where: {type: {[Op.in]: queryTypes}}})
    } else if(reqBody.source == 'codes'){
      let sourceCodes = reqBody.identifier.split(',')
      let queryCodes = [];
      sourceCodes.forEach((item) => {
        if(!util.isStringEmpty(item)){
          queryCodes[queryCodes.length]=item
        }
      })
      return await db.master.findAll({where: {code: {[Op.in]: queryCodes}}})
    }
}

module.exports = {
    getMasterData
}