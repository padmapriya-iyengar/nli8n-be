const {DataTypes} = require('sequelize')

module.exports = function(sequelize) {
    const profile = sequelize.define('agc_user_profile', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        contact:{
            type: DataTypes.STRING(50),
            validate:{
                checkLength(value){
                    if(value < 10){
                        throw new Error('Length must be 10!!')
                    }
                }
            }
        },
        ooo_message:{
            type: DataTypes.STRING(500)
        },
        ooo_date_from:{
            type: DataTypes.DATE
        },
        ooo_date_until:{
            type: DataTypes.DATE
        },
        department:{
            type: DataTypes.STRING(100)
        },
        email_notifications:{
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        ooo:{
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        email:{
            type: DataTypes.STRING(100),
            validate: {
                isEmail: true
            }
        },
        inbox_preference:{
            type: DataTypes.JSON,
            defaultValue: [{"type": "string", "field": "TASK_ACTION", "label": "Action", "display": true, "spanWidth": "1", "isSelected": true, "spanWidthPx": "100"}, {"type": "string", "field": "TASK_TITLE", "label": "Title", "display": true, "spanWidth": "2", "isSelected": true, "spanWidthPx": "200"}, {"type": "string", "field": "FILE_TITLE", "label": "File Title", "display": true, "spanWidth": "1", "isSelected": true, "spanWidthPx": "200"}, {"type": "string", "field": "FILE_REF_NO", "label": "Ref No.", "display": true, "spanWidth": "1", "isSelected": true, "spanWidthPx": "200"}, {"type": "string", "field": "REQUEST_ID", "label": "Req ID", "display": true, "spanWidth": "1", "isSelected": true, "spanWidthPx": "100"}, {"type": "datetime", "field": "DELIVERY_DATE", "label": "Received Date", "display": true, "spanWidth": "2", "isSelected": true, "spanWidthPx": "200"}, {"type": "string", "field": "CIRCULATION_ID", "label": "Circulation ID", "display": true, "spanWidth": "2", "isSelected": true, "spanWidthPx": "200"}, {"type": "date", "field": "REQUEST_DUE_DATE", "label": "Due Date", "display": true, "spanWidth": "2", "isSelected": true, "spanWidthPx": "200"}, {"type": "date", "field": "EXPECTED_RESPONSE_DATE", "label": "Expected Response Date", "display": true, "spanWidth": "2", "isSelected": true, "spanWidthPx": "200"}, {"type": "string", "field": "TASK_STATUS", "label": "Status", "display": true, "spanWidth": "1", "isSelected": true, "spanWidthPx": "100"}, {"type": "string", "field": "TASK_FROM", "label": "From", "display": true, "spanWidth": "1", "isSelected": true, "spanWidthPx": "100"}]
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
    return profile;
}