const {DataTypes} = require('sequelize')

module.exports = function(sequelize) {
    const log = sequelize.define('agc_log',{
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        log_data:{
            type: DataTypes.JSON
        },
        status:{
            type: DataTypes.STRING(50)
        },
        created_by:{
            type: DataTypes.STRING(100),
            defaultValue: 'SYSTEM'
        },
        created_on: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
        }
    },{
        timestamps: false
    })
    return log
}