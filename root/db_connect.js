const Sequelize = require('sequelize')

const sequelize = new Sequelize(
  global.agc_config.db.schema,
  global.agc_config.db.username,
  global.agc_config.db.password,
  {
    host:global.agc_config.db.host,
    dialect:global.agc_config.db.dialect,
    retry: {
      match: [/Deadlock/i],
      max: 3, // Maximum rety 3 times
      backoffBase: 1000, // Initial backoff duration in ms. Default: 100,
      backoffExponent: 1.5, // Exponent to increase backoff each try. Default: 1.1
    },
    time_zone:global.agc_config.db.timezone,
    logging: false
  }
)

module.exports = sequelize