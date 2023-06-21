const {DataTypes} = require('sequelize')

module.exports = function(sequelize) {
    const divisions = sequelize.define('agc_user_division', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        is_child:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        is_division:{
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        },
        status:{
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        title:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        group_name:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        group_description:{
            type: DataTypes.STRING(500)
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
    return divisions
}