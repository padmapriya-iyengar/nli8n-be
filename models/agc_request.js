const {DataTypes} = require("sequelize")

module.exports = function(sequelize){
    const request = sequelize.define("agc_request", {
        Request_Id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        RequestTitle:{
            type: DataTypes.STRING,
            allowNull: false
        },
        RequestType:{
            type: DataTypes.STRING,
            allowNull: false
        },
        RequestStatus:{
            type: DataTypes.STRING,
            allowNull: false
        },
        LocalForeign:{
            type: DataTypes.STRING,
            allowNull: false
        },
        RequestingAgencyType:{
            type: DataTypes.STRING
        },
        RequestingAgencyName:{
            type: DataTypes.STRING
        },
        OtherAgency:{
            type: DataTypes.STRING
        },
        RequestingAgencyRefNo:{
            type: DataTypes.STRING
        },
        SecurityClassification:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Sensitivity:{
            type: DataTypes.STRING,
            allowNull: false
        },
        RequestReceivedMode:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Complexity:{
            type: DataTypes.STRING,
            allowNull: false
        },
        Urgency:{
            type: DataTypes.STRING,
            allowNull: false
        },
        ReceivedDate:{
            type: DataTypes.DATE,
            allowNull: false
        },
        RequestDueDate:{
            type: DataTypes.DATE,
            allowNull: false
        },
        ExpResponseDate:{
            type: DataTypes.DATE,
            allowNull: false
        },
        UserDivision:{
            type: DataTypes.STRING,
            allowNull: false
        },
        CountryForeignOrg:{
            type: DataTypes.STRING
        },
        ForeignAgencyType:{
            type: DataTypes.STRING
        },
        ForeignAgencyName:{
            type: DataTypes.STRING
        },
        OriginalDueDate:{
            type: DataTypes.DATE
        },
        Remarks:{
            type: DataTypes.STRING
        },
        RequestCreatedBy:{
            type: DataTypes.STRING
        },
        RequestCreatedDate:{
            type: DataTypes.DATE
        },
        RequestTypeDesc:{
            type: DataTypes.STRING
        },
        RequestStatusDesc:{
            type: DataTypes.STRING
        },
        LocalForeignDesc:{
            type: DataTypes.STRING
        },
        RequestingAgencyTypeDesc:{
            type: DataTypes.STRING
        },
        RequestingAgencyNameDesc:{
            type: DataTypes.STRING
        },
        CountryForeignOrgDesc:{
            type: DataTypes.STRING
        },
        ForeignAgencyTypeDesc:{
            type: DataTypes.STRING
        },
        ForeignAgencyNameDesc:{
            type: DataTypes.STRING
        },
        SecurityClassificationDesc:{
            type: DataTypes.STRING
        },
        RequestReceivedModeDesc:{
            type: DataTypes.STRING
        },
        ComplexityDesc:{
            type: DataTypes.STRING
        },
        UrgencyDesc:{
            type: DataTypes.STRING
        },
        InternalRequestingDivisionDesc:{
            type: DataTypes.STRING
        },
        OfficerEmailDesc:{
            type: DataTypes.STRING
        },
        OfficerNameDesc:{
            type: DataTypes.STRING
        },
        RequestNo:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: 'UNIQUE'
        }
    },
    {
        timestamps: false
    })
    return request
}