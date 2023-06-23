const Sequelize = require('sequelize')
const config = require('./config')

const sequelize = new Sequelize(
  config.db.schema,
  config.db.username,
  config.db.password,
  {
    host:config.db.host,
    dialect:config.db.dialect,
    retry: {
      match: [/Deadlock/i],
      max: 3, // Maximum rety 3 times
      backoffBase: 1000, // Initial backoff duration in ms. Default: 100,
      backoffExponent: 1.5, // Exponent to increase backoff each try. Default: 1.1
    },
    time_zone:config.db.timezone,
    logging: false
  }
)

module.exports = sequelize