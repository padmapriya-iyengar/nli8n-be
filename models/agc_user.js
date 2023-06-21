const {DataTypes} = require('sequelize')

module.exports = function(sequelize) {
    const user = sequelize.define('agc_user', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
          },
        first_name: {
              type: DataTypes.STRING(100)
        },
        last_name: {
              type: DataTypes.STRING(100)
        },
        display_name: {
            type: DataTypes.STRING(200)
        },
        username: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: 'UNIQUE'
        },
        password: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        created_on: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        created_by: {
            type: DataTypes.STRING(100),
            defaultValue: 'SYSTEM'
        },
        updated_on: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        },
        updated_by: {
            type: DataTypes.STRING(100),
            defaultValue: 'SYSTEM'
        }
    },
    {
        timestamps: false
    })
    return user
}
