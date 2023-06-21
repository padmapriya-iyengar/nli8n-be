const db = require('./common')
const connection = require('../root/db_connect');
let trx, divTrx;

const getAllUsers = async() => {
    return await db.user.findAll()
}

const getUserInfo = async(reqBody) => {
  return await db.user.findAll({where: {username: reqBody.username}, include:[{model: db.userProfile, required: true}, {model: db.userDivision, required: false}]})
}

const createUser = async(reqBody) => {
  trx = await connection.transaction();
  divTrx = await connection.transaction();

  const userData = {
    first_name: reqBody.first_name,
    last_name: reqBody.last_name,
    display_name: reqBody.display_name,
    username: reqBody.username,
    password: reqBody.password
  }
  const userCreation = await db.user.create(userData, {transaction: trx})

  const profileData = {
    contact: reqBody.contact,
    department: reqBody.department,
    email: reqBody.email,
    username_fk: reqBody.username
  }
  await db.userProfile.create(profileData, {transaction: trx})
  await trx.commit();

  let division = {}
  for(let div of reqBody.divisions){
    division = {
      "title": div.value,
      "group_name": div.value,
      "group_description": div.label,
      "username_fk": reqBody.username
    }
    await db.userDivision.create(division, {transaction: divTrx})
  }
  divTrx.commit();
  
  return userCreation
}

module.exports = {
    getAllUsers,
    getUserInfo,
    createUser
}