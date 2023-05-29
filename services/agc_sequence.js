const db = require('./common');
const logger = require('../root/logger')

const generateSequence = async(reqBody) => {
    let currentSeq = await db.sequence.findAll({where: {type: reqBody.type}})
    let currentCount = currentSeq[0].seq_count;
    let updatedCount = Number(currentCount)+1;
    return await db.sequence.update({seq_count: updatedCount},{where: {type: reqBody.type}})
}

const getSequence = async(reqBody) => {
    return await db.sequence.findAll({where : {type: reqBody.type}})
}

module.exports = {
    generateSequence,
    getSequence
}