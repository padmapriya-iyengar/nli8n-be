const {DataTypes} = require('sequelize')

module.exports = function(sequelize){
    let userRole = sequelize.define('agc_user_role', {
        map_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        status:{
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
    return userRole
}