const {DataTypes} = require('sequelize')

module.exports = function(sequelize){
    const sequence = sequelize.define("agc_sequence", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prefix: {
            type: DataTypes.STRING
        },
        suffix: {
            type: DataTypes.STRING
        },
        seq_count: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 0
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
    return sequence
}