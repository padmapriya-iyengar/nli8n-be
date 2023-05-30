const {DataTypes} = require('sequelize')

module.exports = function(sequelize){
    const file = sequelize.define("agc_file",{
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        I_Division: {
            type: DataTypes.STRING,
            allowNull: false   
        },
        I_Header1: {
            type: DataTypes.STRING,
            allowNull: false   
        },
        I_Header2: {
            type: DataTypes.STRING,
            allowNull: false   
        },
        I_Year: {
            type: DataTypes.STRING,
            allowNull: false   
        },
        I_SerialNo: {
            type: DataTypes.INTEGER,
            allowNull: false   
        },
        ReferenceNo: {
            type: DataTypes.STRING,
            allowNull: false   
        },
        FileTitle: {
            type: DataTypes.STRING,
            allowNull: false   
        },
        FileType: {
            type: DataTypes.STRING,
            allowNull: false   
        },
        SecurityClassification: {
            type: DataTypes.STRING,
            allowNull: false   
        },
        SecurityClassificationDesc: {
            type: DataTypes.STRING,
            allowNull: false   
        },
        Sensitivity: {
            type: DataTypes.STRING,
            allowNull: false   
        },
        LocalOrForeign: {
            type: DataTypes.STRING,
            allowNull: false   
        },
        LocalForeign: {
            type: DataTypes.STRING,
            allowNull: false   
        },
        LocalForeignDesc: {
            type: DataTypes.STRING,
            allowNull: false   
        },
        AgencyType: {
            type: DataTypes.STRING
        },
        AgencyTypeDesc: {
            type: DataTypes.STRING
        },
        AgencyName: {
            type: DataTypes.STRING
        },
        AgencyNameDesc: {
            type: DataTypes.STRING
        },
        ExtAgencyRefNo: {
            type: DataTypes.STRING
        },
        FileOwner: {
            type: DataTypes.STRING
        },
        CountryForeignOrg: {
            type: DataTypes.STRING
        },
        CountryForeignOrgDesc: {
            type: DataTypes.STRING
        },
        ForeignAgencyType: {
            type: DataTypes.STRING
        },
        FileForeignAgencyTypeDesc: {
            type: DataTypes.STRING
        },
        ForeignAgencyName: {
            type: DataTypes.STRING
        },
        ForeignAgencyNameDesc: {
            type: DataTypes.STRING
        },
        Remarks: {
            type: DataTypes.STRING
        },
        FileStatus: {
            type: DataTypes.STRING
        },
        FileStatusDesc: {
            type: DataTypes.STRING,
            allowNull: false   
        },
        MLACaseType: {
            type: DataTypes.STRING
        },
        MLACaseStatus: {
            type: DataTypes.STRING
        },
        MLACaseStatusDesc: {
            type: DataTypes.STRING
        },
        MLAComplexity: {
            type: DataTypes.STRING
        },
        MLAComplexityDesc: {
            type: DataTypes.STRING
        },
        MLAFATFPurpose: {
            type: DataTypes.STRING
        },
        MLAFATFPurposeDesc: {
            type: DataTypes.STRING
        },
        MLARequestedUnder: {
            type: DataTypes.STRING
        },
        MLARequestedUnderDesc: {
            type: DataTypes.STRING
        },
        MLASubType: {
            type: DataTypes.STRING
        },
        MLASubTypeDesc: {
            type: DataTypes.STRING
        },
        MLANovelLegalSensitiveIssue: {
            type: DataTypes.BOOLEAN
        },
        MLAPoliticalExposedPerson: {
            type: DataTypes.BOOLEAN
        },
        MLADualCriminality: {
            type: DataTypes.BOOLEAN
        },
        MLASovereignty: {
            type: DataTypes.BOOLEAN
        },
        MLAOffencePunishableByCaning: {
            type: DataTypes.BOOLEAN
        },
        MLASeniorGovtOfficial: {
            type: DataTypes.BOOLEAN
        },
        MLADeathPenalty: {
            type: DataTypes.BOOLEAN
        },
        MLAContentious: {
            type: DataTypes.BOOLEAN
        },
        MLAReceivedDate: {
            type: DataTypes.DATE,
        },
        MLAFileOpenDate: {
            type: DataTypes.DATE,
        },
        MLAOutgoingSentDate: {
            type: DataTypes.DATE,
        },
        MLARequestPerfectedDate: {
            type: DataTypes.DATE,
        },
        FileCreatedBy: {
            type: DataTypes.STRING
        },
        FileCreatedDate: {
            type: DataTypes.DATE
        }
    },
    {
        timestamps: false
    })
    return file;
}