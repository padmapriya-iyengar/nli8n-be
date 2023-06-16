const {DataTypes} = require('sequelize')

module.exports = function(sequelize) {
    const notification = sequelize.define("agc_notification", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        status: {
          type: DataTypes.STRING(2),
          allowNull: false,
          defaultValue: 'A'
        },
        user_group: {
            type: DataTypes.STRING(100)
        },
        message_read_status: {
            type: DataTypes.STRING(10),
            defaultValue: 'NotRead'
        },
        actor: {
          type: DataTypes.STRING(10)
        },
        message_type: {
          type: DataTypes.STRING(100)
        },
        message_code: {
          type: DataTypes.STRING(100)
        },
        message: {
          type: DataTypes.STRING(500)
        },
        responder: {
          type: DataTypes.STRING(100)
        },
        source_item_id: {
          type: DataTypes.STRING(100),
          allowNull: false
        },
        request_state: {
          type: DataTypes.STRING(100)
        },
        RequestNo:{
          type: DataTypes.STRING
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
    return notification;
};