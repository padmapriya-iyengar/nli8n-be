const {DataTypes} = require('sequelize')

module.exports = function(sequelize){
    let file_req_map = sequelize.define("agc_file_request_map", {
        Map_Id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        status: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1
        }
    },
    {
        timestamps: false
    })
    return file_req_map
}