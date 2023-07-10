const {DataTypes} = require('sequelize')

module.exports = function(sequelize){
    let role = sequelize.define('agc_role', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        role_id: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: 'UNIQUE'
        },
        role_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        status: {
            type: DataTypes.INTEGER,
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
    return role
}