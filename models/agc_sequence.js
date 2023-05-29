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
        }
    },
    {
        timestamps: false
    })
    return sequence
}