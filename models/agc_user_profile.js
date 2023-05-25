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
            type: DataTypes.INTEGER
        },
        ooo:{
            type: DataTypes.INTEGER
        },
        email:{
            type: DataTypes.STRING(100),
            validate: {
                isEmail: true
            }
        },
        inbox_preference:{
            type: DataTypes.JSON
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