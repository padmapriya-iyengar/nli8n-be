const {DataTypes} = require("sequelize");

module.exports = function(sequelize) {
    const master = sequelize.define("agc_master", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        type: {
          type: DataTypes.STRING(100),
          allowNull: false,
          defaultValue: 'UNKNOWN_TYPE'
        },
        parent_code: {
            type: DataTypes.STRING(100)
        },
        code: {
            type: DataTypes.STRING(100),
            allowNull: false,
            defaultValue: 'UNKNOWN_CODE'
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'UNKNOWN_VALUE'
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 2
        },
        attribute_1: {
          type: DataTypes.STRING,
        },
        attribute_2: {
            type: DataTypes.JSON,
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
    });
    return master;
};