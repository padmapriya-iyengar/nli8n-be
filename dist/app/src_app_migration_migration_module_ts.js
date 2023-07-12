"use strict";
(self["webpackChunkDevCenterHouseDemo"] = self["webpackChunkDevCenterHouseDemo"] || []).push([["src_app_migration_migration_module_ts"],{

/***/ 9128:
/*!*******************************************************!*\
  !*** ./src/app/commons/services/migration.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MigrationService": () => (/* binding */ MigrationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class MigrationService {
  constructor() {}
  getMigrationEntities(successCallBack, errorCallBack, context) {
    let response = {
      "tuple": {
        "old": {
          "entities": {
            "entity": [{
              "entityName": "IW_USER",
              "entityDescription": "User"
            }, {
              "entityName": "IW_GROUP",
              "entityDescription": "Group"
            }, {
              "entityName": "IW_ROLE",
              "entityDescription": "Role"
            }, {
              "entityName": "IW_GROUP_MEMBER",
              "entityDescription": "Group Member"
            }, {
              "entityName": "IW_GROUP_ROLE",
              "entityDescription": "Group Role"
            }, {
              "entityName": "IW_ROLE_GROUP_USER",
              "entityDescription": "Role Group User"
            }, {
              "entityName": "CIR_ROUTE",
              "entityDescription": "Circulation Route"
            }, {
              "entityName": "CIR_CC",
              "entityDescription": "Circulation CC"
            }, {
              "entityName": "CIR_DOCUMENTS",
              "entityDescription": "Circulation Documents"
            }, {
              "entityName": "CIR_HISTORY",
              "entityDescription": "Circulation History"
            }, {
              "entityName": "GENERIC_CIR_DOC",
              "entityDescription": "Generic Circulation Documents"
            }, {
              "entityName": "GENERIC_CIR_CC",
              "entityDescription": "Generic Circulation CC"
            }, {
              "entityName": "GENERIC_ACTIVITY_LOG",
              "entityDescription": "Generic ActivityLog"
            }, {
              "entityName": "GENERIC_TIMELOG",
              "entityDescription": "Generic TimeLog"
            }, {
              "entityName": "GENERIC_ASSIGNEDUSER",
              "entityDescription": "Generic Assigned User"
            }, {
              "entityName": "GENERIC_CROSS_DIV_OFF",
              "entityDescription": "Generic Cross Div Off"
            }, {
              "entityName": "GENERIC_CROSS_DIV_DOC",
              "entityDescription": "Generic Cross Div Documents"
            }, {
              "entityName": "GENERIC_DISPATCH_DOC",
              "entityDescription": "Generic Dispatch Documents"
            }, {
              "entityName": "GENERIC_BACKCAPTURE_KIV",
              "entityDescription": "Generic BackCapture KIV"
            }, {
              "entityName": "CROSS_DIV_WORKFLOW",
              "entityDescription": "Cross Divisional Workflow"
            }]
          }
        },
        "@lastModified": "1667408871462",
        "@key": "com/agc/migration/entities.xml",
        "@level": "organization",
        "@name": "entities.xml",
        "@original": "/com/agc/migration/entities.xml"
      }
    };
    let resp = response.tuple.old.entities;
    successCallBack(resp, context);
  }
  getConsolidatedReport(successCallBack, errorCallBack, context) {
    let response = {
      "tuple": [{
        "old": {
          "SIW_ENTITIES": {
            "ENTITY_ID": "35bd7ac1-cc74-425a-aee3-863740cd32b2",
            "ENTITY_NAME": "TB_LEGISTAG",
            "ENTITY_DESCRIPTION": "Legis Tag",
            "TOTAL_COUNT": "126",
            "UPLOAD_SUCCESS_COUNT": "0",
            "VALIDATE_SUCCESS_COUNT": "1",
            "VALIDATE_ERROR_COUNT": "125",
            "MIGRATE_SUCCESS_COUNT": "0",
            "MIGRATE_ERROR_COUNT": "0",
            "STATUS": "Uploaded",
            "UPLOADED_BY": "iadro1",
            "UPLOADED_ON": "2022-11-02T15:42:03.0",
            "COMPLETED_ON": "2022-11-02T15:42:03.460000000"
          }
        }
      }, {
        "old": {
          "SIW_ENTITIES": {
            "ENTITY_ID": "61ba9f84-083b-44cf-a601-f43e44800c73",
            "ENTITY_NAME": "TB_CODE",
            "ENTITY_DESCRIPTION": "Code",
            "TOTAL_COUNT": "86",
            "UPLOAD_SUCCESS_COUNT": "0",
            "VALIDATE_SUCCESS_COUNT": "0",
            "VALIDATE_ERROR_COUNT": "0",
            "MIGRATE_SUCCESS_COUNT": "86",
            "MIGRATE_ERROR_COUNT": "0",
            "STATUS": "Uploaded",
            "UPLOADED_BY": "iadro1",
            "UPLOADED_ON": "2022-11-02T15:36:14.0",
            "COMPLETED_ON": "2022-11-02T15:36:15.007000000"
          }
        }
      }, {
        "old": {
          "SIW_ENTITIES": {
            "ENTITY_ID": "7901f6ca-79b2-467f-ba3a-984e6f4dea40",
            "ENTITY_NAME": "TB_PRACTICE_GROUP",
            "ENTITY_DESCRIPTION": "Practice Group",
            "TOTAL_COUNT": "68",
            "UPLOAD_SUCCESS_COUNT": "0",
            "VALIDATE_SUCCESS_COUNT": "58",
            "VALIDATE_ERROR_COUNT": "10",
            "MIGRATE_SUCCESS_COUNT": "0",
            "MIGRATE_ERROR_COUNT": "0",
            "STATUS": "Uploaded",
            "UPLOADED_BY": "iadro1",
            "UPLOADED_ON": "2022-11-02T15:42:44.0",
            "COMPLETED_ON": "2022-11-02T15:42:44.437000000"
          }
        }
      }, {
        "old": {
          "SIW_ENTITIES": {
            "ENTITY_ID": "8117faa8-e8d0-4f92-b0da-ee4ba2c6668b",
            "ENTITY_NAME": "TB_DOC_TYPES",
            "ENTITY_DESCRIPTION": "Document Types",
            "TOTAL_COUNT": "60",
            "UPLOAD_SUCCESS_COUNT": "0",
            "VALIDATE_SUCCESS_COUNT": "0",
            "VALIDATE_ERROR_COUNT": "0",
            "MIGRATE_SUCCESS_COUNT": "60",
            "MIGRATE_ERROR_COUNT": "0",
            "STATUS": "Uploaded",
            "UPLOADED_BY": "iadro1",
            "UPLOADED_ON": "2022-11-02T11:05:08.0",
            "COMPLETED_ON": "2022-11-03T02:05:29.140000000"
          }
        }
      }, {
        "old": {
          "SIW_ENTITIES": {
            "ENTITY_ID": "8a496b7a-4c00-4a76-b744-4db4de68662a",
            "ENTITY_NAME": "TB_CODE_EXTAGENCY",
            "ENTITY_DESCRIPTION": "Code External Agency",
            "TOTAL_COUNT": "23",
            "UPLOAD_SUCCESS_COUNT": "0",
            "VALIDATE_SUCCESS_COUNT": "23",
            "VALIDATE_ERROR_COUNT": "0",
            "MIGRATE_SUCCESS_COUNT": "0",
            "MIGRATE_ERROR_COUNT": "0",
            "STATUS": "Uploaded",
            "UPLOADED_BY": "iadro1",
            "UPLOADED_ON": "2022-11-02T15:34:51.0",
            "COMPLETED_ON": "2022-11-02T15:34:52.340000000"
          }
        }
      }, {
        "old": {
          "SIW_ENTITIES": {
            "ENTITY_ID": "906c05a9-da73-4f14-9eb6-64550017333b",
            "ENTITY_NAME": "TB_FILEREFNOFORMAT",
            "ENTITY_DESCRIPTION": "File Reference No Format",
            "TOTAL_COUNT": "403",
            "UPLOAD_SUCCESS_COUNT": "0",
            "VALIDATE_SUCCESS_COUNT": "403",
            "VALIDATE_ERROR_COUNT": "0",
            "MIGRATE_SUCCESS_COUNT": "0",
            "MIGRATE_ERROR_COUNT": "0",
            "STATUS": "Uploaded",
            "UPLOADED_BY": "iadro1",
            "UPLOADED_ON": "2022-11-02T15:38:03.0",
            "COMPLETED_ON": "2022-11-02T15:38:04.103000000"
          }
        }
      }, {
        "old": {
          "SIW_ENTITIES": {
            "ENTITY_ID": "955144ce-73d1-4d16-a140-2bb8a4fc0729",
            "ENTITY_NAME": "TB_AGENCY",
            "ENTITY_DESCRIPTION": "Agency",
            "TOTAL_COUNT": "18",
            "UPLOAD_SUCCESS_COUNT": "0",
            "VALIDATE_SUCCESS_COUNT": "0",
            "VALIDATE_ERROR_COUNT": "0",
            "MIGRATE_SUCCESS_COUNT": "18",
            "MIGRATE_ERROR_COUNT": "0",
            "STATUS": "Uploaded",
            "UPLOADED_BY": "iadro1",
            "UPLOADED_ON": "2022-11-02T15:27:59.0",
            "COMPLETED_ON": "2022-11-02T15:28:00.130000000"
          }
        }
      }, {
        "old": {
          "SIW_ENTITIES": {
            "ENTITY_ID": "c3cd5b8f-d906-45c8-938e-c7b458f59f49",
            "ENTITY_NAME": "TB_PRAC_GP_USER",
            "ENTITY_DESCRIPTION": "Practice Group User",
            "TOTAL_COUNT": "578",
            "UPLOAD_SUCCESS_COUNT": "0",
            "VALIDATE_SUCCESS_COUNT": "578",
            "VALIDATE_ERROR_COUNT": "0",
            "MIGRATE_SUCCESS_COUNT": "0",
            "MIGRATE_ERROR_COUNT": "0",
            "STATUS": "Uploaded",
            "UPLOADED_BY": "iadro1",
            "UPLOADED_ON": "2022-11-02T15:43:05.0",
            "COMPLETED_ON": "2022-11-02T15:43:05.853000000"
          }
        }
      }, {
        "old": {
          "SIW_ENTITIES": {
            "ENTITY_ID": "d0c7e59f-f53b-446f-807b-08bdd47700ee",
            "ENTITY_NAME": "TB_FILETYPE",
            "ENTITY_DESCRIPTION": "File Type",
            "TOTAL_COUNT": "700",
            "UPLOAD_SUCCESS_COUNT": "0",
            "VALIDATE_SUCCESS_COUNT": "700",
            "VALIDATE_ERROR_COUNT": "0",
            "MIGRATE_SUCCESS_COUNT": "0",
            "MIGRATE_ERROR_COUNT": "0",
            "STATUS": "Uploaded",
            "UPLOADED_BY": "iadro1",
            "UPLOADED_ON": "2022-11-02T15:40:46.0",
            "COMPLETED_ON": "2022-11-02T15:40:47.737000000"
          }
        }
      }, {
        "old": {
          "SIW_ENTITIES": {
            "ENTITY_ID": "dcc8fa93-8336-4c56-8c50-2e3c86a348e4",
            "ENTITY_NAME": "TB_TOPICTAG",
            "ENTITY_DESCRIPTION": "Topic Tag",
            "TOTAL_COUNT": "43",
            "UPLOAD_SUCCESS_COUNT": "0",
            "VALIDATE_SUCCESS_COUNT": "43",
            "VALIDATE_ERROR_COUNT": "0",
            "MIGRATE_SUCCESS_COUNT": "0",
            "MIGRATE_ERROR_COUNT": "0",
            "STATUS": "Uploaded",
            "UPLOADED_BY": "iadro1",
            "UPLOADED_ON": "2022-11-02T15:42:25.0",
            "COMPLETED_ON": "2022-11-02T15:42:25.890000000"
          }
        }
      }, {
        "old": {
          "SIW_ENTITIES": {
            "ENTITY_ID": "e2911c6c-c5c3-48c8-a774-b9f86ef6cdbb",
            "ENTITY_NAME": "TB_TAGS_MAPPING",
            "ENTITY_DESCRIPTION": "Tags Mapping",
            "TOTAL_COUNT": "11",
            "UPLOAD_SUCCESS_COUNT": "0",
            "VALIDATE_SUCCESS_COUNT": "0",
            "VALIDATE_ERROR_COUNT": "11",
            "MIGRATE_SUCCESS_COUNT": "0",
            "MIGRATE_ERROR_COUNT": "0",
            "STATUS": "Uploaded",
            "UPLOADED_BY": "iadro1",
            "UPLOADED_ON": "2022-11-02T15:43:33.0",
            "COMPLETED_ON": "2022-11-02T15:43:34.080000000"
          }
        }
      }]
    };
    let resp = response;
    successCallBack(resp, context);
  }
  getReportDetails(reportType, successCallBack, errorCallBack, context) {
    let response = {
      "tuple": [{
        "old": {
          "SIW_JOB_FILES": {
            "JOB_FILES_ID": "247bcd4e-8676-472a-b986-006e52276c6a",
            "JOB_ID": "11eeb6bd-898e-4300-89c1-12b57a995032",
            "ENTITY": "TB_DOC_TYPES",
            "ENTITY_DESCRIPTION": "Document Types",
            "FILE_NAME": "Doc_Types_20220913_122750498_1667441120663.xml",
            "FILE_DESCRIPTION": "Doc_Types_20220913_122750498_1667441120663.xml",
            "FILE_TYPE": "XML",
            "FILE_LOCATION": "E:\\\\MigrationData\\\\Processed_Migration_Dump\\\\TB_DOC_TYPES\\\\Doc_Types_20220913_122750498_1667441120663.xml",
            "TOTAL_COUNT": "60",
            "UPLOAD_SUCCESS_COUNT": "0",
            "UPLOAD_ERROR_COUNT": "0",
            "UPLOAD_DUPLICATE_COUNT": "60",
            "VALIDATE_SUCCESS_COUNT": "0",
            "VALIDATE_ERROR_COUNT": "0",
            "MIGRATE_SUCCESS_COUNT": "60",
            "MIGRATE_ERROR_COUNT": "0",
            "FILE_STATUS": "Migrated",
            "UPLOADED_BY": "iadro1",
            "UPLOADED_ON": "2022-11-03T02:05:28.0",
            "COMPLETED_ON": "2022-11-03T02:05:29.0"
          }
        }
      }, {
        "old": {
          "SIW_JOB_FILES": {
            "JOB_FILES_ID": "0e6b4ce8-6144-4ef3-a7f7-d1a22ff1afef",
            "JOB_ID": "8ee866a5-cbcb-45ed-9460-abcad0e71056",
            "ENTITY": "TB_CODE",
            "ENTITY_DESCRIPTION": "Code",
            "FILE_NAME": "Code_20220913_1667403371717.xml",
            "FILE_DESCRIPTION": "Code_20220913_1667403371717.xml",
            "FILE_TYPE": "XML",
            "FILE_LOCATION": "E:\\\\MigrationData\\\\Processed_Migration_Dump\\\\TB_CODE\\\\Code_20220913_1667403371717.xml",
            "TOTAL_COUNT": "86",
            "UPLOAD_SUCCESS_COUNT": "0",
            "UPLOAD_ERROR_COUNT": "0",
            "UPLOAD_DUPLICATE_COUNT": "0",
            "VALIDATE_SUCCESS_COUNT": "0",
            "VALIDATE_ERROR_COUNT": "0",
            "MIGRATE_SUCCESS_COUNT": "86",
            "MIGRATE_ERROR_COUNT": "0",
            "FILE_STATUS": "Migrated",
            "UPLOADED_BY": "iadro1",
            "UPLOADED_ON": "2022-11-02T15:36:14.0",
            "COMPLETED_ON": "2022-11-02T15:36:15.0"
          }
        }
      }, {
        "old": {
          "SIW_JOB_FILES": {
            "JOB_FILES_ID": "779ca59a-7f33-4e4e-8983-5590eda65797",
            "JOB_ID": "2778fe3a-6e76-43c8-9b16-d9e582d113bf",
            "ENTITY": "TB_AGENCY",
            "ENTITY_DESCRIPTION": "Agency",
            "FILE_NAME": "Agency_20220913_1667402874149.xml",
            "FILE_DESCRIPTION": "Agency_20220913_1667402874149.xml",
            "FILE_TYPE": "XML",
            "FILE_LOCATION": "E:\\\\MigrationData\\\\Processed_Migration_Dump\\\\TB_AGENCY\\\\Agency_20220913_1667402874149.xml",
            "TOTAL_COUNT": "18",
            "UPLOAD_SUCCESS_COUNT": "0",
            "UPLOAD_ERROR_COUNT": "0",
            "UPLOAD_DUPLICATE_COUNT": "0",
            "VALIDATE_SUCCESS_COUNT": "0",
            "VALIDATE_ERROR_COUNT": "0",
            "MIGRATE_SUCCESS_COUNT": "18",
            "MIGRATE_ERROR_COUNT": "0",
            "FILE_STATUS": "Migrated",
            "UPLOADED_BY": "iadro1",
            "UPLOADED_ON": "2022-11-02T15:27:59.0",
            "COMPLETED_ON": "2022-11-02T15:28:00.0"
          }
        }
      }, {
        "old": {
          "SIW_JOB_FILES": {
            "JOB_FILES_ID": "defc0fdb-8841-4240-afe7-d4d8d45c5802",
            "JOB_ID": "52913bc9-d5cd-48c7-ae2b-21e112ddd697",
            "ENTITY": "TB_DOC_TYPES",
            "ENTITY_DESCRIPTION": "Document Types",
            "FILE_NAME": "Doc_Types_20220913_122750498_1667387101915.xml",
            "FILE_DESCRIPTION": "Doc_Types_20220913_122750498_1667387101915.xml",
            "FILE_TYPE": "XML",
            "FILE_LOCATION": "E:\\\\MigrationData\\\\Processed_Migration_Dump\\\\TB_DOC_TYPES\\\\Doc_Types_20220913_122750498_1667387101915.xml",
            "TOTAL_COUNT": "60",
            "UPLOAD_SUCCESS_COUNT": "0",
            "UPLOAD_ERROR_COUNT": "0",
            "UPLOAD_DUPLICATE_COUNT": "0",
            "VALIDATE_SUCCESS_COUNT": "0",
            "VALIDATE_ERROR_COUNT": "0",
            "MIGRATE_SUCCESS_COUNT": "60",
            "MIGRATE_ERROR_COUNT": "0",
            "FILE_STATUS": "Migrated",
            "UPLOADED_BY": "iadro1",
            "UPLOADED_ON": "2022-11-02T11:05:08.0",
            "COMPLETED_ON": "2022-11-02T11:05:09.0"
          }
        }
      }]
    };
    let resp = response;
    successCallBack(resp, context);
  }
  getFilteredReportDetails(reportType, filterParams, successCallBack, errorCallBack, context) {
    let response = {
      "tuple": [{
        "old": {
          "SIW_JOB_FILES": {
            "JOB_FILES_ID": "247bcd4e-8676-472a-b986-006e52276c6a",
            "JOB_ID": "11eeb6bd-898e-4300-89c1-12b57a995032",
            "ENTITY": "TB_DOC_TYPES",
            "ENTITY_DESCRIPTION": "Document Types",
            "FILE_NAME": "Doc_Types_20220913_122750498_1667441120663.xml",
            "FILE_DESCRIPTION": "Doc_Types_20220913_122750498_1667441120663.xml",
            "FILE_TYPE": "XML",
            "FILE_LOCATION": "E:\\\\MigrationData\\\\Processed_Migration_Dump\\\\TB_DOC_TYPES\\\\Doc_Types_20220913_122750498_1667441120663.xml",
            "TOTAL_COUNT": "60",
            "UPLOAD_SUCCESS_COUNT": "0",
            "UPLOAD_ERROR_COUNT": "0",
            "UPLOAD_DUPLICATE_COUNT": "60",
            "VALIDATE_SUCCESS_COUNT": "0",
            "VALIDATE_ERROR_COUNT": "0",
            "MIGRATE_SUCCESS_COUNT": "60",
            "MIGRATE_ERROR_COUNT": "0",
            "FILE_STATUS": "Migrated",
            "UPLOADED_BY": "iadro1",
            "UPLOADED_ON": "2022-11-03T02:05:28.0",
            "COMPLETED_ON": "2022-11-03T02:05:29.0"
          }
        }
      }, {
        "old": {
          "SIW_JOB_FILES": {
            "JOB_FILES_ID": "defc0fdb-8841-4240-afe7-d4d8d45c5802",
            "JOB_ID": "52913bc9-d5cd-48c7-ae2b-21e112ddd697",
            "ENTITY": "TB_DOC_TYPES",
            "ENTITY_DESCRIPTION": "Document Types",
            "FILE_NAME": "Doc_Types_20220913_122750498_1667387101915.xml",
            "FILE_DESCRIPTION": "Doc_Types_20220913_122750498_1667387101915.xml",
            "FILE_TYPE": "XML",
            "FILE_LOCATION": "E:\\\\MigrationData\\\\Processed_Migration_Dump\\\\TB_DOC_TYPES\\\\Doc_Types_20220913_122750498_1667387101915.xml",
            "TOTAL_COUNT": "60",
            "UPLOAD_SUCCESS_COUNT": "0",
            "UPLOAD_ERROR_COUNT": "0",
            "UPLOAD_DUPLICATE_COUNT": "0",
            "VALIDATE_SUCCESS_COUNT": "0",
            "VALIDATE_ERROR_COUNT": "0",
            "MIGRATE_SUCCESS_COUNT": "60",
            "MIGRATE_ERROR_COUNT": "0",
            "FILE_STATUS": "Migrated",
            "UPLOADED_BY": "iadro1",
            "UPLOADED_ON": "2022-11-02T11:05:08.0",
            "COMPLETED_ON": "2022-11-02T11:05:09.0"
          }
        }
      }]
    };
    let resp = response;
    successCallBack(resp, context);
  }
  getMigrationAdminUsers(successCallBack, errorCallBack, context) {
    let response = {
      "tuple": {
        "old": {
          "getMigrationAdminUsers": {
            "getMigrationAdminUsers": {
              "USERS": {
                "USER_DETAILS": [{
                  "USER_NAME": "Priya",
                  "USER_ID": "priya"
                }, {
                  "USER_NAME": "Rohit Narvekar",
                  "USER_ID": "rohit"
                }, {
                  "USER_NAME": "Harsha",
                  "USER_ID": "harsha"
                }, {
                  "USER_NAME": "IAD_RO_1",
                  "USER_ID": "iadro1"
                }, {
                  "USER_NAME": "Jyothi",
                  "USER_ID": "jyothi"
                }, {
                  "USER_NAME": "Rajesh",
                  "USER_ID": "rajesh"
                }, {
                  "USER_NAME": "Subash",
                  "USER_ID": "subash"
                }]
              }
            }
          }
        }
      }
    };
    let resp = response.tuple.old.getMigrationAdminUsers.getMigrationAdminUsers.USERS;
    successCallBack(resp, context);
  }
  getSharedFilePath(successCallBack, errorCallBack, context) {
    let response = {
      "AGCConfiguration": {
        "Status": "A",
        "Value": "E:\\\\MigrationData\\\\Migration_Dump",
        "CreatedBy": "Priya",
        "ConfigurationType": "NONE",
        "Code": "MIG_SHARED_FILES_ROOT_LOCATION",
        "Description": "Shared path for migration files",
        "Type": "NONE",
        "AGCConfiguration-id": {
          "Id": "147459",
          "ItemId": "002248573547A1ECADBD90AE86DC281D.147459"
        }
      }
    };
    let resp = response.AGCConfiguration;
    successCallBack(resp, context);
  }
  getSharedFiles(entityName, baseLocation, successCallBack, errorCallBack, context) {
    let response = {
      "tuple": {
        "old": {
          "getSharedFiles": {
            "getSharedFiles": {
              "FILES": {
                "FILE_DETAILS": [{
                  "FileName": "Group.xml",
                  "FilePath": "E:\\\\MigrationData\\\\Migration_Dump\\\\IW_GROUP",
                  "FileType": "XML",
                  "FileDate": "2022-06-27T03:43:58.221758Z",
                  "FileSize": "950"
                }, {
                  "FileName": "Group12.xml",
                  "FilePath": "E:\\\\MigrationData\\\\Migration_Dump\\\\IW_GROUP",
                  "FileType": "XML",
                  "FileDate": "2022-06-27T03:58:20.428834Z",
                  "FileSize": "950"
                }, {
                  "FileName": "Group123.xml",
                  "FilePath": "E:\\\\MigrationData\\\\Migration_Dump\\\\IW_GROUP",
                  "FileType": "XML",
                  "FileDate": "2022-06-27T03:54:31.31744Z",
                  "FileSize": "950"
                }, {
                  "FileName": "Group_1644.xml",
                  "FilePath": "E:\\\\MigrationData\\\\Migration_Dump\\\\IW_GROUP",
                  "FileType": "XML",
                  "FileDate": "2022-06-27T04:20:29.69334Z",
                  "FileSize": "2777"
                }, {
                  "FileName": "Group_1655.xml",
                  "FilePath": "E:\\\\MigrationData\\\\Migration_Dump\\\\IW_GROUP",
                  "FileType": "XML",
                  "FileDate": "2022-06-27T04:12:49.478707Z",
                  "FileSize": "2761"
                }]
              }
            }
          }
        }
      }
    };
    let resp = response.tuple.old.getSharedFiles.getSharedFiles.FILES;
    successCallBack(resp, context);
  }
  uploadSharedFile(request, successCallBack, errorCallBack, context) {
    let response = {
      Response: {}
    };
    let resp = response;
    successCallBack(resp, context);
  }
  uploadFile(request, successCallBack, errorCallBack, context) {
    let response = {
      Response: {}
    };
    let resp = response;
    successCallBack(resp, context);
  }
  readMigrationDataObject(request, successCallBack, errorCallBack, context) {
    let response = {
      "tuple": {
        "old": {
          "TB_DOC_TYPES": {
            "TableId": "100f9aa5-c170-4186-aee6-5ff366169368",
            "DMStatus": "Migrated",
            "Id": "105",
            "DocType": "Advice",
            "IsActive": "A",
            "JobFileId": "247bcd4e-8676-472a-b986-006e52276c6a",
            "DMIngestionStatus": "Ingested",
            "DMIngestionMessage": "Ingested Successfully",
            "DMValidationStatus": "Validated",
            "DMValidationMessage": "Validated Successfully",
            "DMMigrationStatus": "Migrated",
            "DMMigrationMessage": "Migration Successful",
            "DMFileId": "1",
            "DMValidationType": null,
            "ItemId": "002248573547A1ECA3C27994E0F4681A.163842"
          }
        }
      }
    };
    let resp = response.tuple.old;
    successCallBack(resp, context);
  }
  updateMigrationObject(request, successCallBack, errorCallBack, context) {
    let response = {
      tuple: {
        old: {}
      }
    };
    let resp = response;
    successCallBack(resp, context);
  }
  readMigrationDataForFileId(startIndex, rowsCount, request, successCallBack, errorCallBack, context) {
    request.cursor['@numRows'] = rowsCount;
    request.cursor['@position'] = startIndex;
    let response = {
      "cursor": {
        "@numRows": "8",
        "@position": "0"
      },
      "response": {
        "data": {
          "tuple": [{
            "old": {
              "TB_FILEREFNOFORMAT": {
                "TableId": "068b1847-76ea-48d1-a090-d72d43cb46e9",
                "DMFileId": "1",
                "DMStatus": "Validated",
                "DMIngestionStatus": "Ingested",
                "DMIngestionMessage": "Ingested Successfully",
                "DMValidationStatus": "Validated",
                "DMValidationType": null,
                "DMValidationMessage": "Validated Successfully",
                "DMMigrationStatus": null,
                "DMMigrationMessage": null
              }
            }
          }, {
            "old": {
              "TB_FILEREFNOFORMAT": {
                "TableId": "603025cb-aa9e-4ce2-b62a-c81e5d187e96",
                "DMFileId": "2",
                "DMStatus": "Validated",
                "DMIngestionStatus": "Ingested",
                "DMIngestionMessage": "Ingested Successfully",
                "DMValidationStatus": "Validated",
                "DMValidationType": null,
                "DMValidationMessage": "Validated Successfully",
                "DMMigrationStatus": null,
                "DMMigrationMessage": null
              }
            }
          }, {
            "old": {
              "TB_FILEREFNOFORMAT": {
                "TableId": "33782e70-d864-49ff-957a-e1a8530e33c1",
                "DMFileId": "3",
                "DMStatus": "Validated",
                "DMIngestionStatus": "Ingested",
                "DMIngestionMessage": "Ingested Successfully",
                "DMValidationStatus": "Validated",
                "DMValidationType": null,
                "DMValidationMessage": "Validated Successfully",
                "DMMigrationStatus": null,
                "DMMigrationMessage": null
              }
            }
          }, {
            "old": {
              "TB_FILEREFNOFORMAT": {
                "TableId": "76fc15fc-dc74-454c-8e22-1b98d1b71b2b",
                "DMFileId": "4",
                "DMStatus": "Validated",
                "DMIngestionStatus": "Ingested",
                "DMIngestionMessage": "Ingested Successfully",
                "DMValidationStatus": "Validated",
                "DMValidationType": null,
                "DMValidationMessage": "Validated Successfully",
                "DMMigrationStatus": null,
                "DMMigrationMessage": null
              }
            }
          }, {
            "old": {
              "TB_FILEREFNOFORMAT": {
                "TableId": "f4bb08cd-9ecf-4cdb-bb08-76ff9566ebef",
                "DMFileId": "5",
                "DMStatus": "Validated",
                "DMIngestionStatus": "Ingested",
                "DMIngestionMessage": "Ingested Successfully",
                "DMValidationStatus": "Validated",
                "DMValidationType": null,
                "DMValidationMessage": "Validated Successfully",
                "DMMigrationStatus": null,
                "DMMigrationMessage": null
              }
            }
          }, {
            "old": {
              "TB_FILEREFNOFORMAT": {
                "TableId": "a8a5369b-eb0b-421f-9cb8-a5dee0170174",
                "DMFileId": "6",
                "DMStatus": "Validated",
                "DMIngestionStatus": "Ingested",
                "DMIngestionMessage": "Ingested Successfully",
                "DMValidationStatus": "Validated",
                "DMValidationType": null,
                "DMValidationMessage": "Validated Successfully",
                "DMMigrationStatus": null,
                "DMMigrationMessage": null
              }
            }
          }, {
            "old": {
              "TB_FILEREFNOFORMAT": {
                "TableId": "d9e531f0-d9e9-4cf8-b3b6-aaff98ed5184",
                "DMFileId": "7",
                "DMStatus": "Validated",
                "DMIngestionStatus": "Ingested",
                "DMIngestionMessage": "Ingested Successfully",
                "DMValidationStatus": "Validated",
                "DMValidationType": null,
                "DMValidationMessage": "Validated Successfully",
                "DMMigrationStatus": null,
                "DMMigrationMessage": null
              }
            }
          }, {
            "old": {
              "TB_FILEREFNOFORMAT": {
                "TableId": "1cdb8854-d037-49c0-bad6-fb57423a32ce",
                "DMFileId": "8",
                "DMStatus": "Validated",
                "DMIngestionStatus": "Ingested",
                "DMIngestionMessage": "Ingested Successfully",
                "DMValidationStatus": "Validated",
                "DMValidationType": null,
                "DMValidationMessage": "Validated Successfully",
                "DMMigrationStatus": null,
                "DMMigrationMessage": null
              }
            }
          }]
        },
        "file": {
          "UPLOAD_SUCCESS_COUNT": "0",
          "UPLOAD_ERROR_COUNT": "0",
          "UPLOAD_DUPLICATE_COUNT": "0",
          "VALIDATE_SUCCESS_COUNT": "403",
          "VALIDATE_ERROR_COUNT": "0",
          "MIGRATE_SUCCESS_COUNT": "0",
          "MIGRATE_ERROR_COUNT": "0",
          "TOTAL_COUNT": "403"
        }
      }
    };
    let resp = response;
    successCallBack(resp, context);
  }
  validateData(req, successCallBack, errorCallBack, context) {
    let response = {
      tuple: {
        old: {
          validateMigrationDataForFileId: {
            validateMigrationDataForFileId: {}
          }
        }
      }
    };
    let resp = response;
    successCallBack(resp, context);
  }
  migrateData(req, successCallBack, errorCallBack, context) {
    let response = {
      data: {
        instance_id: {}
      }
    };
    let resp = response;
    successCallBack(resp, context);
  }
  deleteData(req, successCallBack, errorCallBack, context) {
    let response = {
      tuple: {
        old: {
          deleteMigrationDataForFileId: {
            deleteMigrationDataForFileId: {}
          }
        }
      }
    };
    let resp = response;
    successCallBack(resp, context);
  }
}
MigrationService.ɵfac = function MigrationService_Factory(t) {
  return new (t || MigrationService)();
};
MigrationService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: MigrationService,
  factory: MigrationService.ɵfac
});

/***/ }),

/***/ 322:
/*!****************************************************************!*\
  !*** ./src/app/migration/file-report/file-report.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileReportComponent": () => (/* binding */ FileReportComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commons/services/utilities.service */ 5810);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _commons_services_migration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../commons/services/migration.service */ 9128);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/progressspinner */ 2901);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/tag */ 3042);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/panel */ 4266);

















const _c0 = ["migrationData"];
function FileReportComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "div", 35)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.tableHeading);
  }
}
function FileReportComponent_p_tag_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-tag", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FileReportComponent_p_tag_44_Template_p_tag_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r8.filterReport("UPLOAD_FAILURE", "upfTag"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("value", "Upload Failure: ", ctx_r5.fileCount.uploadFailure, "");
  }
}
function FileReportComponent_p_progressSpinner_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-progressSpinner", 37);
  }
}
function FileReportComponent_p_scrollPanel_53_ng_template_3_span_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 61)(1, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FileReportComponent_p_scrollPanel_53_ng_template_3_span_11_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.validateEntry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function FileReportComponent_p_scrollPanel_53_ng_template_3_span_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 61)(1, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FileReportComponent_p_scrollPanel_53_ng_template_3_span_12_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.migrateEntry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
const _c1 = function (a0) {
  return {
    "width": a0
  };
};
function FileReportComponent_p_scrollPanel_53_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 53)(1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 56, 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function FileReportComponent_p_scrollPanel_53_ng_template_3_Template_input_input_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);
      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r10.filterGlobal(_r14.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 59)(8, "i", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FileReportComponent_p_scrollPanel_53_ng_template_3_Template_i_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r23.refreshData(0, "TOTAL"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 61)(10, "i", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FileReportComponent_p_scrollPanel_53_ng_template_3_Template_i_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r22);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r24.deleteEntry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, FileReportComponent_p_scrollPanel_53_ng_template_3_span_11_Template, 2, 0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, FileReportComponent_p_scrollPanel_53_ng_template_3_span_12_Template, 2, 0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Total Records: ", ctx_r11.filteredRecordCount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, ctx_r11.showTotalRecords || ctx_r11.showUploadFailureRecords || ctx_r11.showValidateFailureRecords || ctx_r11.showMigrateSuccessRecords || ctx_r11.showMigrateFailureRecords ? "53%" : "51%"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.showUploadSuccessRecords);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.showValidateSuccessRecords);
  }
}
function FileReportComponent_p_scrollPanel_53_ng_template_4_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-sortIcon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSortableColumn", col_r27.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r27.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", col_r27.field);
  }
}
function FileReportComponent_p_scrollPanel_53_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "th", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FileReportComponent_p_scrollPanel_53_ng_template_4_th_2_Template, 3, 3, "th", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columns_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", columns_r25);
  }
}
function FileReportComponent_p_scrollPanel_53_ng_template_5_ng_template_3_td_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const rowData_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("pTooltip", col_r32.type == "datetime" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 2, rowData_r28[col_r32.field], "dd/MM/yyyy h:mm:ss") : col_r32.type == "date" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 5, rowData_r28[col_r32.field], "dd/MM/yyyy") : rowData_r28[col_r32.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r32.type == "date" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 8, rowData_r28[col_r32.field], "dd/MM/yyyy") : rowData_r28[col_r32.field], " ");
  }
}
function FileReportComponent_p_scrollPanel_53_ng_template_5_ng_template_3_td_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FileReportComponent_p_scrollPanel_53_ng_template_5_ng_template_3_td_1_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40);
      const rowData_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r38.viewRowData(rowData_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const rowData_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("pTooltip", "", rowData_r28[col_r32.field], " - Click to open row data");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", rowData_r28[col_r32.field], " ");
  }
}
function FileReportComponent_p_scrollPanel_53_ng_template_5_ng_template_3_td_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const rowData_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("pTooltip", rowData_r28[col_r32.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", rowData_r28[col_r32.field], " ");
  }
}
function FileReportComponent_p_scrollPanel_53_ng_template_5_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, FileReportComponent_p_scrollPanel_53_ng_template_5_ng_template_3_td_0_Template, 5, 11, "td", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, FileReportComponent_p_scrollPanel_53_ng_template_5_ng_template_3_td_1_Template, 2, 2, "td", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, FileReportComponent_p_scrollPanel_53_ng_template_5_ng_template_3_td_2_Template, 2, 2, "td", 75);
  }
  if (rf & 2) {
    const col_r32 = ctx.$implicit;
    const rowData_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", col_r32.field != "DataRow");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", col_r32.field == "DataRow" && rowData_r28["DMStatus"] != "Ingestion Failed" && rowData_r28["DMStatus"] != "Migrated");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", col_r32.field == "DataRow" && (rowData_r28["DMStatus"] == "Ingestion Failed" || rowData_r28["DMStatus"] == "Migrated"));
  }
}
function FileReportComponent_p_scrollPanel_53_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 70)(1, "td", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-tableRadioButton", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, FileReportComponent_p_scrollPanel_53_ng_template_5_ng_template_3_Template, 3, 3, "ng-template", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rowData_r28 = ctx.$implicit;
    const columns_r29 = ctx.columns;
    const i_r30 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", rowData_r28)("index", i_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", columns_r29);
  }
}
const _c2 = function () {
  return {
    width: "100%",
    height: "422px"
  };
};
const _c3 = function () {
  return {
    width: "100%"
  };
};
const _c4 = function () {
  return ["DataRow", "DMIngestionStatus", "DMIngestionMessage", "DMValidationStatus", "DMValidationMessage", "DMMigrationStatus", "DMMigrationMessage", "DMValidationType", "DMStatus"];
};
function FileReportComponent_p_scrollPanel_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-scrollPanel", 38)(1, "p-table", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onRowSelect", function FileReportComponent_p_scrollPanel_53_Template_p_table_onRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r46.onRowSelected($event));
    })("onRowUnselect", function FileReportComponent_p_scrollPanel_53_Template_p_table_onRowUnselect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r47);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r48.onRowUnselected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, FileReportComponent_p_scrollPanel_53_ng_template_3_Template, 13, 6, "ng-template", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, FileReportComponent_p_scrollPanel_53_ng_template_4_Template, 3, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, FileReportComponent_p_scrollPanel_53_ng_template_5_Template, 4, 3, "ng-template", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 11)(7, "div", 7)(8, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 44)(11, "div", 10)(12, "p-button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FileReportComponent_p_scrollPanel_53_Template_p_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r47);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r49.onPagination("DOUBLE_BACKWARD"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 44)(14, "div", 10)(15, "p-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FileReportComponent_p_scrollPanel_53_Template_p_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r47);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r50.onPagination("BACKWARD"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 47)(17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "p-button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 44)(20, "div", 10)(21, "p-button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FileReportComponent_p_scrollPanel_53_Template_p_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r47);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r51.onPagination("FORWARD"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 50)(23, "div", 10)(24, "p-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FileReportComponent_p_scrollPanel_53_Template_p_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r47);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r52.onPagination("DOUBLE_FORWARD"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](16, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](17, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r7.filteredRecords)("columns", ctx_r7.dataRecordCols)("paginator", false)("rows", ctx_r7.tableRowCount)("responsive", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](18, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r7.isBackDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r7.isBackDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("label", ctx_r7.currentPageNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r7.isFrontDisabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r7.isFrontDisabled);
  }
}
const _c5 = function () {
  return {
    "required": false,
    "read-only": true
  };
};
class FileReportComponent {
  constructor(utilService, modalService, migService) {
    this.utilService = utilService;
    this.modalService = modalService;
    this.migService = migService;
    this.dataEntityName = "TB_FILEREFNOFORMAT";
    this.entityNames = [];
    this.fileName = "";
    this.usersList = [];
    this.uploadedBy = "";
    this.fileStatus = "";
    this.fileCount = {};
    this.showTotalRecords = true;
    this.showUploadSuccessRecords = false;
    this.showUploadFailureRecords = false;
    this.showValidateSuccessRecords = false;
    this.showValidateFailureRecords = false;
    this.showMigrateSuccessRecords = false;
    this.showMigrateFailureRecords = false;
    this.dataRecords = [];
    this.dataRecordCols = [];
    this.tableHeading = "File Report - Total";
    this.selectedIndex = -1;
    this.isCollapsed = false;
    this.tableRowCount = 8;
    this.rowDetails = {};
    this.rowModalHeader = "";
    this.filteredRecords = [];
    this.currentPageNumber = 1;
    this.isBackDisabled = true;
    this.isFrontDisabled = true;
    this.totalRecordCount = 0;
    this.filteredRecordCount = 0;
    this.filterType = "";
    this.showSpinner = false;
  }
  ngOnInit() {
    if (this.fileDetails) {
      this.fileName = this.fileDetails.fileData.FILE_NAME;
      this.fileStatus = this.fileDetails.fileData.FILE_STATUS;
    }
    this.loadEntities();
    this.loadUsersList();
    this.dataRecordCols = [{
      field: "DataRow",
      label: "Data Row",
      type: "string"
    }, {
      field: "DMIngestionStatus",
      label: "Upload Status",
      type: "string"
    }, {
      field: "DMIngestionMessage",
      label: "Upload Message",
      type: "string"
    }, {
      field: "DMValidationStatus",
      label: "Validation Status",
      type: "string"
    }, {
      field: "DMValidationMessage",
      label: "Validation Message",
      type: "string"
    }, {
      field: "DMMigrationStatus",
      label: "Migration Status",
      type: "string"
    }, {
      field: "DMMigrationMessage",
      label: "Migration Message",
      type: "string"
    }];
    this.utilService.pageNo.subscribe(page => {
      if (page.cPage == 1) {
        this.isBackDisabled = true;
        this.isFrontDisabled = false;
      }
      if (page.cPage == Math.ceil(this.totalRecordCount / this.tableRowCount)) {
        this.isFrontDisabled = true;
        this.isBackDisabled = false;
      }
      if (this.totalRecordCount < this.tableRowCount || this.totalRecordCount == this.tableRowCount) {
        this.isBackDisabled = true;
        this.isFrontDisabled = true;
      }
      if (page.cPage != 1 && page.cPage != Math.ceil(this.totalRecordCount / this.tableRowCount) && this.totalRecordCount > this.tableRowCount) {
        this.isBackDisabled = false;
        this.isFrontDisabled = false;
      }
    });
  }
  loadEntities() {
    this.migService.getMigrationEntities(this.getEntitiesSuccessHandler, this.errorHandler, this);
  }
  getEntitiesSuccessHandler(data, prms) {
    if (!data.entity.length) {
      prms.entityNames.push({
        label: data.entity.entityDescription,
        value: lodash__WEBPACK_IMPORTED_MODULE_0__.toUpper(data.entity.entityName)
      });
    } else if (data.entity.length > 0) {
      data.entity.forEach(ent => {
        prms.entityNames.push({
          label: ent.entityDescription,
          value: lodash__WEBPACK_IMPORTED_MODULE_0__.toUpper(ent.entityName)
        });
      });
    }
    //prms.dataEntityName = _.toUpper(prms.fileDetails.fileData.ENTITY)
    prms.resetPage();
  }
  loadUsersList() {
    this.migService.getMigrationAdminUsers(this.getMigrationAdminUsersSuccessHandler, this.errorHandler, this);
  }
  getMigrationAdminUsersSuccessHandler(data, prms) {
    prms.usersList = [];
    if (data.USER_DETAILS) {
      if (!data.USER_DETAILS.length) {
        prms.usersList.push({
          label: data.USER_DETAILS.USER_NAME,
          value: data.USER_DETAILS.USER_ID
        });
      } else if (data.USER_DETAILS.length > 0) {
        data.USER_DETAILS.forEach(user => {
          prms.usersList.push({
            label: user.USER_NAME,
            value: user.USER_ID
          });
        });
      }
      prms.uploadedBy = prms.fileDetails?.fileData.UPLOADED_BY;
    }
  }
  filterReport(type, domId) {
    this.resetTableVisibility();
    this.dataRecordCols = [];
    this.filteredRecords = [];
    if (!this.utilService.isEmpty(domId)) {
      this.resetTagStyles();
      let domObj = document.getElementById(domId);
      domObj?.classList.remove('custom-report-tag');
      domObj?.classList.add("custom-report-tag-selected");
    }
    this.refreshData(0, type);
  }
  resetTableVisibility() {
    this.showTotalRecords = false;
    this.showUploadSuccessRecords = false;
    this.showUploadFailureRecords = false;
    this.showValidateSuccessRecords = false;
    this.showValidateFailureRecords = false;
    this.showMigrateSuccessRecords = false;
    this.showMigrateFailureRecords = false;
  }
  onRowSelected(selectedDoc) {
    this.selectedIndex = selectedDoc.index;
  }
  onRowUnselected(unselectedDoc) {
    this.selectedIndex = -1;
  }
  refreshData(position, filter) {
    this.dataRecords = [];
    this.dataEntityName = "TB_FILEREFNOFORMAT";
    this.getReport(position, filter);
  }
  getReport(position, filter) {
    this.showSpinner = true;
    this.filterType = filter;
    this.setTableInfo();
    let req = {
      cursor: {},
      entityName: this.dataEntityName,
      jobFileId: this.fileDetails?.fileData.JOB_FILES_ID,
      dmStatus: filter == 'UPLOAD_SUCCESS' ? 'Ingested' : filter == 'VALIDATE_SUCCESS' ? 'Validated' : filter == 'VALIDATE_FAILURE' ? 'Validation Failed' : filter == 'MIGRATE_SUCCESS' ? 'Migrated' : filter == 'MIGRATE_FAILURE' ? 'Migration Failed' : ''
    };
    this.migService.readMigrationDataForFileId(position, this.tableRowCount, req, this.migrationFileDataSuccessHandler, this.errorHandler, this);
  }
  migrationFileDataSuccessHandler(data, prms) {
    if (data.response) {
      if (data.response.data) {
        let resp = data.response.data;
        prms.dataRecords = [];
        prms.filteredRecords = [];
        if (!resp.tuple.length) {
          resp.tuple.old[prms.dataEntityName]['DataRow'] = 'Element ' + resp.tuple.old[prms.dataEntityName]['DMFileId'];
          prms.dataRecords.push(resp.tuple.old[prms.dataEntityName]);
        } else if (resp.tuple.length > 0) {
          resp.tuple.forEach(tp => {
            tp.old[prms.dataEntityName]['DataRow'] = 'Element ' + tp.old[prms.dataEntityName]['DMFileId'];
            prms.dataRecords.push(tp.old[prms.dataEntityName]);
          });
        }
        prms.filteredRecords = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(prms.dataRecords);
        if (prms.migrationData) prms.migrationData.reset();
      }
      if (data.response.file) {
        prms.getRecordCountInfo(data.response.file);
      }
    }
  }
  setTableInfo() {
    this.dataRecordCols = [];
    if (this.filterType == 'TOTAL') {
      this.showTotalRecords = true;
      this.tableHeading = "File Report - Total";
      this.dataRecordCols = [{
        field: "DataRow",
        label: "Data Row",
        type: "string"
      }, {
        field: "DMIngestionStatus",
        label: "Upload Status",
        type: "string"
      }, {
        field: "DMIngestionMessage",
        label: "Upload Message",
        type: "string"
      }, {
        field: "DMValidationStatus",
        label: "Validation Status",
        type: "string"
      }, {
        field: "DMValidationMessage",
        label: "Validation Message",
        type: "string"
      }, {
        field: "DMMigrationStatus",
        label: "Migration Status",
        type: "string"
      }, {
        field: "DMMigrationMessage",
        label: "Migration Message",
        type: "string"
      }, {
        field: "DMStatus",
        label: "Row Status",
        type: "string"
      }];
    } else if (this.filterType == 'UPLOAD_SUCCESS' || this.filterType == 'UPLOAD_FAILURE') {
      if (this.filterType == 'UPLOAD_SUCCESS') {
        this.showUploadSuccessRecords = true;
        this.tableHeading = "File Report - Upload Success";
      } else if (this.filterType == 'UPLOAD_FAILURE') {
        this.showUploadFailureRecords = true;
        this.tableHeading = "File Report - Upload Failed";
      }
      this.dataRecordCols = [{
        field: "DataRow",
        label: "Data Row",
        type: "string"
      }, {
        field: "DMIngestionMessage",
        label: "Upload Message",
        type: "string"
      }, {
        field: "DMIngestionStatus",
        label: "Upload Status",
        type: "string"
      }, {
        field: "DMStatus",
        label: "Row Status",
        type: "string"
      }];
    } else if (this.filterType == 'VALIDATE_SUCCESS' || this.filterType == 'VALIDATE_FAILURE') {
      if (this.filterType == 'VALIDATE_SUCCESS') {
        this.showValidateSuccessRecords = true;
        this.tableHeading = "File Report - Validation Success";
      } else if (this.filterType == 'VALIDATE_FAILURE') {
        this.showValidateFailureRecords = true;
        this.tableHeading = "File Report - Validation Failed";
      }
      this.dataRecordCols = [{
        field: "DataRow",
        label: "Data Row",
        type: "string"
      }, {
        field: "DMValidationType",
        label: "Validation Type",
        type: "string"
      }, {
        field: "DMValidationStatus",
        label: "Validation Status",
        type: "string"
      }, {
        field: "DMValidationMessage",
        label: "Validation Message",
        type: "string"
      }, {
        field: "DMStatus",
        label: "Row Status",
        type: "string"
      }];
    } else if (this.filterType == 'MIGRATE_SUCCESS' || this.filterType == 'MIGRATE_FAILURE') {
      if (this.filterType == 'MIGRATE_SUCCESS') {
        this.showMigrateSuccessRecords = true;
        this.tableHeading = "File Report - Migration Success";
      } else if (this.filterType == 'MIGRATE_FAILURE') {
        this.showMigrateFailureRecords = true;
        this.tableHeading = "File Report - Migration Failed";
      }
      this.dataRecordCols = [{
        field: "DataRow",
        label: "Data Row",
        type: "string"
      }, {
        field: "DMMigrationMessage",
        label: "Migration Message",
        type: "string"
      }, {
        field: "DMMigrationStatus",
        label: "Migration Status",
        type: "string"
      }, {
        field: "DMStatus",
        label: "Row Status",
        type: "string"
      }];
    }
  }
  getRecordCountInfo(fileObj) {
    this.totalRecordCount = fileObj.TOTAL_COUNT;
    this.fileCount.total = fileObj.TOTAL_COUNT;
    this.fileCount.uploadSuccess = fileObj.UPLOAD_SUCCESS_COUNT;
    this.fileCount.uploadFailure = fileObj.UPLOAD_ERROR_COUNT;
    this.fileCount.validateSuccess = fileObj.VALIDATE_SUCCESS_COUNT;
    this.fileCount.validateFailure = fileObj.VALIDATE_ERROR_COUNT;
    this.fileCount.migrateSuccess = fileObj.MIGRATE_SUCCESS_COUNT;
    this.fileCount.migrateFailure = fileObj.MIGRATE_ERROR_COUNT;
    this.filteredRecordCount = this.filterType == 'UPLOAD_SUCCESS' ? fileObj.UPLOAD_SUCCESS_COUNT : this.filterType == 'UPLOAD_FAILURE' ? fileObj.UPLOAD_ERROR_COUNT : this.filterType == 'VALIDATE_SUCCESS' ? fileObj.VALIDATE_SUCCESS_COUNT : this.filterType == 'VALIDATE_FAILURE' ? fileObj.VALIDATE_ERROR_COUNT : this.filterType == 'MIGRATE_SUCCESS' ? fileObj.MIGRATE_SUCCESS_COUNT : this.filterType == 'MIGRATE_FAILURE' ? fileObj.MIGRATE_ERROR_COUNT : fileObj.TOTAL_COUNT;
    this.utilService.changeCurrentPageNumber(this.currentPageNumber);
    this.showSpinner = false;
  }
  deleteEntry() {
    if (this.selectedIndex != -1) {
      let req = {
        entityName: this.fileDetails.fileData.ENTITY,
        jobFileId: this.fileDetails.fileData.JOB_FILES_ID,
        tableId: this.dataRecords[this.selectedIndex]['TableId']
      };
    } else {
      this.utilService.alert('error', 'Error', 'Please select an entry to delete!!', false);
    }
  }
  migrateEntry() {
    if (this.selectedIndex != -1) {
      let req = {
        EntityName: this.fileDetails.fileData.ENTITY,
        JobFileId: this.fileDetails.fileData.JOB_FILES_ID,
        TableId: this.dataRecords[this.selectedIndex]['TableId']
      };
    } else {
      this.utilService.alert('error', 'Error', 'Please select an entry to migrate!!', false);
    }
  }
  migrateDataSuccessHandler(data, prms) {
    if (data) {
      prms.utilService.alert("success", "Success", "Migration initiated, please refresh for updates!!");
      prms.refreshData();
    }
  }
  validateEntry() {
    if (this.selectedIndex != -1) {
      let req = {
        entityName: this.fileDetails.fileData.ENTITY,
        jobFileId: this.fileDetails.fileData.JOB_FILES_ID,
        tableId: this.dataRecords[this.selectedIndex]['TableId']
      };
    } else {
      this.utilService.alert('error', 'Error', 'Please select an entry to validate!!', false);
    }
  }
  validateDataSuccessHandler(data, prms) {
    if (data) {
      prms.utilService.alert("success", "Success", "Validation initiated, please check data validation report for updates!!");
      prms.resetPage();
    }
  }
  deleteDataSuccessHandler(data, prms) {
    if (data) {
      prms.utilService.alert("success", "Success", "Element data deleted successfully!!");
      prms.resetPage();
    }
  }
  viewRowData(data) {
    this.rowDetails = data;
    this.rowModalHeader = data.DataRow;
    let currentBreadCrumb = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.utilService.BREADCRUMB);
    if (currentBreadCrumb.length > 2) currentBreadCrumb.splice(currentBreadCrumb.length - 1, 1);
    this.utilService.clearBreadcrumb();
    this.utilService.transferRowData(data);
    currentBreadCrumb.forEach(menu => {
      let styleClass = 'custom-menu';
      this.utilService.pushToBreadcrumb(menu.label, menu.icon, menu.routerLink, menu.queryParams, menu.commandType, menu.commandDesc, styleClass);
    });
    this.utilService.pushToBreadcrumb(this.rowModalHeader, 'fa fa-th-list', '', null, 'DASHBOARD_RELOAD', 'ROW_REPORT', 'custom-active-menu');
  }
  onToggle(data) {
    this.isCollapsed = data.collapsed;
    let domObj = document.getElementById('reportPanel');
    domObj?.classList.remove("file-report-scroll");
    domObj?.classList.remove("file-report-scroll-toggle");
    if (this.isCollapsed) {
      this.tableRowCount = 12;
      domObj?.classList.add("file-report-scroll-toggle");
    } else {
      this.tableRowCount = 8;
      domObj?.classList.add("file-report-scroll");
    }
    if (this.migrationData) this.migrationData.reset();
  }
  resetTagStyles() {
    document.getElementById('totalTag')?.classList.remove("custom-report-tag");
    document.getElementById('upsTag')?.classList.remove("custom-report-tag");
    document.getElementById('upfTag')?.classList.remove("custom-report-tag");
    document.getElementById('vsTag')?.classList.remove("custom-report-tag");
    document.getElementById('vfTag')?.classList.remove("custom-report-tag");
    document.getElementById('msTag')?.classList.remove("custom-report-tag");
    document.getElementById('mfTag')?.classList.remove("custom-report-tag");
    document.getElementById('totalTag')?.classList.remove("custom-report-tag-selected");
    document.getElementById('upsTag')?.classList.remove("custom-report-tag-selected");
    document.getElementById('upfTag')?.classList.remove("custom-report-tag-selected");
    document.getElementById('vsTag')?.classList.remove("custom-report-tag-selected");
    document.getElementById('vfTag')?.classList.remove("custom-report-tag-selected");
    document.getElementById('msTag')?.classList.remove("custom-report-tag-selected");
    document.getElementById('mfTag')?.classList.remove("custom-report-tag-selected");
    document.getElementById('totalTag')?.classList.add("custom-report-tag");
    document.getElementById('upsTag')?.classList.add("custom-report-tag");
    document.getElementById('upfTag')?.classList.add("custom-report-tag");
    document.getElementById('vsTag')?.classList.add("custom-report-tag");
    document.getElementById('vfTag')?.classList.add("custom-report-tag");
    document.getElementById('msTag')?.classList.add("custom-report-tag");
    document.getElementById('mfTag')?.classList.add("custom-report-tag");
  }
  openModal(template, cssClass) {
    this.modalRef = this.modalService.show(template, {
      class: cssClass,
      keyboard: false,
      backdrop: true,
      ignoreBackdropClick: true
    });
  }
  hideModal() {
    this.isReqSubmitted = false;
    this.modalRef.hide();
  }
  saveRecordData() {
    this.isReqSubmitted = true;
  }
  onRequestSubmit(data) {
    if (data.status == 'SUCCESS') {
      this.hideModal();
      this.isReqSubmitted = false;
    } else {
      setTimeout(() => {
        this.isReqSubmitted = false;
      });
    }
  }
  serviceErrorHandler(response, status, errorText, prms) {
    prms.curComp.utilService.alert('error', 'Error', 'Service error, please contact administrator!!', false);
  }
  errorHandler(response, prms) {
    prms.utilService.alert('error', 'Error', 'Service error, please contact administrator!!', false);
  }
  onPagination(buttonType) {
    if (!this.isBackDisabled && buttonType == 'DOUBLE_BACKWARD') {
      this.currentPageNumber = 1;
      this.refreshData(0, this.filterType);
    } else if (!this.isBackDisabled && buttonType == 'BACKWARD') {
      this.currentPageNumber = this.currentPageNumber - 1;
      if (this.currentPageNumber == 1) {
        this.refreshData(0, this.filterType);
      } else {
        this.refreshData((this.currentPageNumber - 1) * this.tableRowCount, this.filterType);
      }
    } else if (!this.isFrontDisabled && buttonType == 'FORWARD') {
      this.currentPageNumber = this.currentPageNumber + 1;
      this.refreshData((this.currentPageNumber - 1) * this.tableRowCount, this.filterType);
    } else if (!this.isFrontDisabled && buttonType == 'DOUBLE_FORWARD') {
      this.currentPageNumber = Math.ceil(this.totalRecordCount / this.tableRowCount);
      this.refreshData((this.currentPageNumber - 1) * this.tableRowCount, this.filterType);
    }
  }
  resetPage() {
    this.resetTableVisibility();
    this.resetTagStyles();
    let domObj = {};
    if (this.source == 'INGESTION_REPORT') {
      this.filterType = 'UPLOAD_SUCCESS';
      domObj = document.getElementById('upsTag');
    } else if (this.source == 'VALIDATION_REPORT') {
      this.filterType = 'VALIDATE_SUCCESS';
      domObj = document.getElementById('vsTag');
    } else if (this.source == 'MIGRATION_REPORT') {
      this.filterType = 'MIGRATE_SUCCESS';
      domObj = document.getElementById('msTag');
    }
    this.setTableInfo();
    this.refreshData(0, this.filterType);
    domObj?.classList?.remove('custom-report-tag');
    domObj?.classList?.add("custom-report-tag-selected");
  }
}
FileReportComponent.ɵfac = function FileReportComponent_Factory(t) {
  return new (t || FileReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_commons_services_migration_service__WEBPACK_IMPORTED_MODULE_2__.MigrationService));
};
FileReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: FileReportComponent,
  selectors: [["file-report"]],
  viewQuery: function FileReportComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.migrationData = _t.first);
    }
  },
  inputs: {
    fileDetails: "fileDetails",
    source: "source"
  },
  decls: 54,
  vars: 28,
  consts: [[1, "container-fluid", "no-left-padding", "no-right-padding"], [1, "row", "xsm-padding", "no-top-padding"], [1, "col-lg-12", "sm-padding", "no-top-padding", "no-bottom-padding"], [1, "xsm-padding", "lg-card-height", "pm-lt-bk"], [1, "custom-panel", 3, "toggleable", "onAfterToggle"], ["pTemplate", "header"], [1, "col-lg-12", "xsm-padding", "no-left-padding", "no-right-padding"], [1, "row", "xsm-padding"], [1, "col-lg-3"], [1, "col-lg-12", "sm-padding", "no-padding", 3, "ngClass"], [1, "sm-padding", "form-field-header", "no-bottom-padding", "no-top-padding"], [1, "col-lg-12", "xsm-padding"], [1, "xsm-padding"], ["appendTo", "body", "name", "entityName", 1, "custom-search-dropdown", 3, "options", "ngModel", "disabled", "ngModelChange"], ["entityName", "ngModel"], [1, "col-lg-3", "no-left-padding"], ["type", "text", "pInputText", "", "name", "fName", 2, "font-size", "13px !important", 3, "ngModel", "disabled", "ngModelChange"], ["fName", "ngModel"], ["appendTo", "body", "name", "uplBy", 1, "custom-search-dropdown", 3, "options", "ngModel", "disabled", "ngModelChange"], ["uplBy", "ngModel"], ["type", "text", "pInputText", "", "name", "fStatus", 2, "font-size", "13px !important", 3, "ngModel", "disabled", "ngModelChange"], ["fStatus", "ngModel"], [1, "row", "xsm-padding", 2, "padding-left", "15px !important"], ["id", "totalTag", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "bottom", "pTooltip", "Click to get all records", 1, "custom-report-tag", 3, "value", "click"], ["id", "upsTag", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "bottom", "pTooltip", "Click to get upload successful records", 1, "custom-report-tag", 3, "value", "click"], ["id", "upfTag", "class", "custom-report-tag", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "bottom", "pTooltip", "Click to get upload failure records", 3, "value", "click", 4, "ngIf"], ["id", "vsTag", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "bottom", "pTooltip", "Click to get validation successful records", 1, "custom-report-tag", 3, "value", "click"], ["id", "vfTag", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "bottom", "pTooltip", "Click to get validation failure records", 1, "custom-report-tag", 3, "value", "click"], ["id", "msTag", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "bottom", "pTooltip", "Click to get migration successful records", 1, "custom-report-tag", 3, "value", "click"], ["id", "mfTag", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "bottom", "pTooltip", "Click to get migration failure records", 1, "custom-report-tag", 3, "value", "click"], [1, "col-lg-12", "sm-padding", "no-top-padding"], ["class", "file-report-spinner", "strokeWidth", "7", 4, "ngIf"], ["id", "reportPanel", "class", "file-report-scroll", 3, "style", 4, "ngIf"], [1, "col-lg-11", "xsm-padding", "no-left-padding", "no-right-padding"], [1, "row", "custom-blk-text", "sm-height", "sm-font"], [1, "col-lg-12"], ["id", "upfTag", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "bottom", "pTooltip", "Click to get upload failure records", 1, "custom-report-tag", 3, "value", "click"], ["strokeWidth", "7", 1, "file-report-spinner"], ["id", "reportPanel", 1, "file-report-scroll"], [1, "custom-table", 3, "value", "columns", "paginator", "rows", "responsive", "globalFilterFields", "onRowSelect", "onRowUnselect"], ["migrationData", ""], ["pTemplate", "caption"], ["pTemplate", "body"], [1, "col-lg-5", "sm-padding", "no-padding"], [1, "col-lg-1", "sm-padding", "no-padding", 2, "width", "45px !important"], ["type", "button", "icon", "pi pi-angle-double-left", 1, "pagination-buttons", 3, "disabled", "click"], ["type", "button", "icon", "pi pi-chevron-left", 1, "pagination-buttons", 3, "disabled", "click"], [1, "col-lg-2", "sm-padding", "no-padding", 2, "width", "50px !important"], ["type", "button", 1, "pagination-buttons", 3, "label", "disabled"], ["type", "button", "icon", "pi pi-chevron-right", 1, "pagination-buttons", 3, "disabled", "click"], [1, "col-lg-1", "sm-padding", "no-padding"], ["type", "button", "icon", "pi pi-angle-double-right", 1, "pagination-buttons", 3, "disabled", "click"], [1, "col-lg-4", "sm-padding", "no-padding"], [1, "table-header", 2, "text-align", "left"], [1, "p-input-icon-right", 2, "width", "30%"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search", 1, "xsm-pm-border", "sm-font", 2, "width", "100%", "height", "30px", "font-size", "12px !important", 3, "input"], ["textInput", ""], [2, "width", "50%", "padding-left", "40px", "font-size", "14px !important", "font-weight", "bold !important"], [1, "xsm-margin-bottom", "p-input-icon-right", "pointer", 3, "ngStyle"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to refresh data", 1, "fa", "fa-refresh", 3, "click"], [1, "xsm-margin-bottom", "p-input-icon-right", "pointer", 2, "width", "2%"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to delete", 1, "fa", "fa-trash", 3, "click"], ["style", "width: 2%;", "class", "xsm-margin-bottom p-input-icon-right pointer", 4, "ngIf"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to validate", 1, "fa", "fa-check-circle", 3, "click"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to migrate", 1, "fa", "fa-arrow-circle-up", 3, "click"], [2, "width", "50px !important"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [1, "pointer"], [1, "custom-radio-btn", 3, "value", "index"], ["ngFor", "", 3, "ngForOf"], ["style", "text-align:center;", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", 3, "pTooltip", 4, "ngIf"], ["class", "custom-warn-text", "style", "text-decoration: underline !important; cursor: pointer !important; text-align: center;", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "right", 3, "pTooltip", "click", 4, "ngIf"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "right", "style", "text-align: center;", 3, "pTooltip", 4, "ngIf"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", 2, "text-align", "center", 3, "pTooltip"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "right", 1, "custom-warn-text", 2, "text-decoration", "underline !important", "cursor", "pointer !important", "text-align", "center", 3, "pTooltip", "click"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "right", 2, "text-align", "center", 3, "pTooltip"]],
  template: function FileReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p-panel", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onAfterToggle", function FileReportComponent_Template_p_panel_onAfterToggle_4_listener($event) {
        return ctx.onToggle($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, FileReportComponent_ng_template_5_Template, 5, 1, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Entity Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11)(13, "div", 12)(14, "p-dropdown", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FileReportComponent_Template_p_dropdown_ngModelChange_14_listener($event) {
        return ctx.dataEntityName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 15)(17, "div", 9)(18, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " File Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 11)(21, "div", 12)(22, "input", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FileReportComponent_Template_input_ngModelChange_22_listener($event) {
        return ctx.fileName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 15)(25, "div", 9)(26, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Uploaded By ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 11)(29, "div", 12)(30, "p-dropdown", 18, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FileReportComponent_Template_p_dropdown_ngModelChange_30_listener($event) {
        return ctx.uploadedBy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 15)(33, "div", 9)(34, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " File Status ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 11)(37, "div", 12)(38, "input", 20, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function FileReportComponent_Template_input_ngModelChange_38_listener($event) {
        return ctx.fileStatus = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 22)(41, "div", 11)(42, "p-tag", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FileReportComponent_Template_p_tag_click_42_listener() {
        return ctx.filterReport("TOTAL", "totalTag");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "p-tag", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FileReportComponent_Template_p_tag_click_43_listener() {
        return ctx.filterReport("UPLOAD_SUCCESS", "upsTag");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, FileReportComponent_p_tag_44_Template, 1, 1, "p-tag", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "p-tag", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FileReportComponent_Template_p_tag_click_45_listener() {
        return ctx.filterReport("VALIDATE_SUCCESS", "vsTag");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "p-tag", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FileReportComponent_Template_p_tag_click_46_listener() {
        return ctx.filterReport("VALIDATE_FAILURE", "vfTag");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "p-tag", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FileReportComponent_Template_p_tag_click_47_listener() {
        return ctx.filterReport("MIGRATE_SUCCESS", "msTag");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "p-tag", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FileReportComponent_Template_p_tag_click_48_listener() {
        return ctx.filterReport("MIGRATE_FAILURE", "mfTag");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 1)(50, "div", 30)(51, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, FileReportComponent_p_progressSpinner_52_Template, 1, 0, "p-progressSpinner", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, FileReportComponent_p_scrollPanel_53_Template, 27, 19, "p-scrollPanel", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("toggleable", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](24, _c5));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.entityNames)("ngModel", ctx.dataEntityName)("disabled", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](25, _c5));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.fileName)("disabled", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](26, _c5));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.usersList)("ngModel", ctx.uploadedBy)("disabled", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](27, _c5));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.fileStatus)("disabled", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("value", "Total: ", ctx.fileCount.total, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("value", "Upload Success: ", ctx.fileCount.uploadSuccess, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", false);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("value", "Validate Success: ", ctx.fileCount.validateSuccess, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("value", "Validate Failure: ", ctx.fileCount.validateFailure, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("value", "Migration Success: ", ctx.fileCount.migrateSuccess, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("value", "Migration Failure: ", ctx.fileCount.migrateFailure, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.showSpinner);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_9__.TableRadioButton, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_10__.ScrollPanel, primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__.Tooltip, primeng_dropdown__WEBPACK_IMPORTED_MODULE_12__.Dropdown, primeng_inputtext__WEBPACK_IMPORTED_MODULE_13__.InputText, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_14__.ProgressSpinner, primeng_tag__WEBPACK_IMPORTED_MODULE_15__.Tag, primeng_panel__WEBPACK_IMPORTED_MODULE_16__.Panel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2920:
/*!**************************************************************************!*\
  !*** ./src/app/migration/ingestion-report/ingestion-report.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngestionReportComponent": () => (/* binding */ IngestionReportComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commons/services/utilities.service */ 5810);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _commons_services_migration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../commons/services/migration.service */ 9128);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/progressspinner */ 2901);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/sidebar */ 4179);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tag */ 3042);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/panel */ 4266);




















const _c0 = ["columnFilterModal"];
const _c1 = ["ingestionData"];
function IngestionReportComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Search Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function IngestionReportComponent_p_progressSpinner_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-progressSpinner", 27);
  }
}
function IngestionReportComponent_p_scrollPanel_30_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 33)(1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function IngestionReportComponent_p_scrollPanel_30_ng_template_3_Template_input_input_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r10.filterGlobal(_r14.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 39)(8, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IngestionReportComponent_p_scrollPanel_30_ng_template_3_Template_i_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.refreshData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 41)(10, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IngestionReportComponent_p_scrollPanel_30_ng_template_3_Template_i_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.deleteEntry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 41)(12, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IngestionReportComponent_p_scrollPanel_30_ng_template_3_Template_i_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.validateEntry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 41)(14, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IngestionReportComponent_p_scrollPanel_30_ng_template_3_Template_i_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.openSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 41)(16, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IngestionReportComponent_p_scrollPanel_30_ng_template_3_Template_i_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](32);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.openModal(_r8, "md-modal"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Total Records: ", ctx_r11.igtData.length, " ");
  }
}
function IngestionReportComponent_p_scrollPanel_30_ng_template_4_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-sortIcon", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSortableColumn", col_r24.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r24.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", col_r24.field);
  }
}
function IngestionReportComponent_p_scrollPanel_30_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "th", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, IngestionReportComponent_p_scrollPanel_30_ng_template_4_th_2_Template, 3, 3, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columns_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", columns_r22);
  }
}
function IngestionReportComponent_p_scrollPanel_30_ng_template_5_ng_template_3_td_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const rowData_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("pTooltip", col_r29.type == "datetime" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 2, rowData_r25[col_r29.field], "dd/MM/yyyy h:mm:ss") : col_r29.type == "date" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 5, rowData_r25[col_r29.field], "dd/MM/yyyy") : rowData_r25[col_r29.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r29.type == "date" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 8, rowData_r25[col_r29.field], "dd/MM/yyyy") : rowData_r25[col_r29.field], " ");
  }
}
function IngestionReportComponent_p_scrollPanel_30_ng_template_5_ng_template_3_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-tag", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const rowData_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("pTooltip", col_r29.type == "datetime" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 2, rowData_r25[col_r29.field], "dd/MM/yyyy h:mm:ss") : col_r29.type == "date" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 5, rowData_r25[col_r29.field], "dd/MM/yyyy") : rowData_r25[col_r29.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", rowData_r25[col_r29.field]);
  }
}
function IngestionReportComponent_p_scrollPanel_30_ng_template_5_ng_template_3_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IngestionReportComponent_p_scrollPanel_30_ng_template_5_ng_template_3_td_2_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39);
      const rowData_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r37.viewFileReport(rowData_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const rowData_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("pTooltip", "", rowData_r25[col_r29.field], " - Click to open total file report");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", rowData_r25[col_r29.field], " ");
  }
}
function IngestionReportComponent_p_scrollPanel_30_ng_template_5_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, IngestionReportComponent_p_scrollPanel_30_ng_template_5_ng_template_3_td_0_Template, 5, 11, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, IngestionReportComponent_p_scrollPanel_30_ng_template_5_ng_template_3_td_1_Template, 4, 8, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, IngestionReportComponent_p_scrollPanel_30_ng_template_5_ng_template_3_td_2_Template, 2, 2, "td", 55);
  }
  if (rf & 2) {
    const col_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", col_r29.field != "FILE_NAME" && col_r29.field != "ENTITY_DESCRIPTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", col_r29.field == "ENTITY_DESCRIPTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", col_r29.field == "FILE_NAME");
  }
}
function IngestionReportComponent_p_scrollPanel_30_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 50)(1, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-tableRadioButton", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, IngestionReportComponent_p_scrollPanel_30_ng_template_5_ng_template_3_Template, 3, 3, "ng-template", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rowData_r25 = ctx.$implicit;
    const columns_r26 = ctx.columns;
    const i_r27 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", rowData_r25)("index", i_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", columns_r26);
  }
}
const _c2 = function () {
  return {
    width: "100%",
    height: "625px"
  };
};
const _c3 = function () {
  return {
    width: "100%"
  };
};
const _c4 = function () {
  return ["ENTITY_DESCRIPTION", "FILE_NAME", "UPLOADED_BY", "FILE_STATUS", "TOTAL_COUNT", "UPLOAD_SUCCESS_COUNT", "UPLOAD_ERROR_COUNT", "UPLOAD_DUPLICATE_COUNT"];
};
function IngestionReportComponent_p_scrollPanel_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-scrollPanel", 28)(1, "p-table", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onRowSelect", function IngestionReportComponent_p_scrollPanel_30_Template_p_table_onRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r42.onRowSelected($event));
    })("onRowUnselect", function IngestionReportComponent_p_scrollPanel_30_Template_p_table_onRowUnselect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r43);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r44.onRowUnselected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, IngestionReportComponent_p_scrollPanel_30_ng_template_3_Template, 17, 1, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, IngestionReportComponent_p_scrollPanel_30_ng_template_4_Template, 3, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, IngestionReportComponent_p_scrollPanel_30_ng_template_5_Template, 4, 3, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r7.igtData)("columns", ctx_r7.igtDataCols)("paginator", true)("rows", 14)("responsive", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c4));
  }
}
function IngestionReportComponent_ng_template_31_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 72)(1, "div", 62)(2, "div", 73)(3, "div", 74)(4, "p-checkbox", 75, 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function IngestionReportComponent_ng_template_31_ng_template_11_Template_p_checkbox_onChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50);
      const oColumn_r46 = restoredCtx.$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r49.onOtherColumnSelect($event, oColumn_r46));
    })("ngModelChange", function IngestionReportComponent_ng_template_31_ng_template_11_Template_p_checkbox_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r50);
      const oColumn_r46 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](oColumn_r46.isSelected = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 77)(7, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const oColumn_r46 = ctx.$implicit;
    const i_r47 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "allColumn_", i_r47, "")("name", "allColumnName_", i_r47, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("binary", true)("ngModel", oColumn_r46.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", oColumn_r46.label, " ");
  }
}
const _c5 = function () {
  return {
    width: "100%",
    height: "250px"
  };
};
function IngestionReportComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60)(1, "div", 61)(2, "div", 62)(3, "div", 63)(4, "p", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Column Chooser");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 65)(7, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IngestionReportComponent_ng_template_31_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r52.hideModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 67)(9, "p-scrollPanel", 68)(10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, IngestionReportComponent_ng_template_31_ng_template_11_Template, 9, 5, "ng-template", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 69)(13, "p-button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IngestionReportComponent_ng_template_31_Template_p_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r54.addNewColumns());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p-button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IngestionReportComponent_ng_template_31_Template_p_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r53);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r55.hideModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r9.otherColumns);
  }
}
class IngestionReportComponent {
  constructor(utilService, modalService, migService, datePipe) {
    this.utilService = utilService;
    this.modalService = modalService;
    this.migService = migService;
    this.datePipe = datePipe;
    this.igtData = [];
    this.igtDataCols = [];
    this.displayFilters = false;
    this.filterEntityName = "";
    this.entityNames = [];
    this.todaysDate = new Date();
    this.usersList = [];
    this.filterUploadedBy = "";
    this.filterFileName = "";
    this.selectedIndex = -1;
    this.otherColumns = [];
    this.otherColumnsData = [];
    this.showSpinner = false;
  }
  ngOnInit() {
    if (this.clearMenu) this.utilService.clearBreadcrumb();
    this.resetTableCols();
    this.otherColumns = [{
      field: "FILE_STATUS",
      label: "Status",
      type: "string",
      isSelected: false
    }, {
      field: "UPLOAD_DUPLICATE_COUNT",
      label: "Duplicates",
      type: "string",
      isSelected: false
    }];
    this.refreshData();
  }
  refreshData() {
    this.utilService.clearBreadcrumb();
    this.showSpinner = true;
    this.migService.getReportDetails('INGESTION', this.getReportSuccessHandler, this.errorHandler, this);
  }
  getReportSuccessHandler(data, prms) {
    prms.igtData = [];
    if (data.tuple) {
      if (!data.tuple.length) {
        prms.igtData.push(data.tuple.old.SIW_JOB_FILES);
      } else if (data.tuple.length > 0) {
        data.tuple.forEach(tp => {
          prms.igtData.push(tp.old.SIW_JOB_FILES);
        });
      }
    }
    prms.showSpinner = false;
  }
  openSearch() {
    this.displayFilters = true;
    this.loadEntities();
    this.loadUsersList();
  }
  loadEntities() {
    this.migService.getMigrationEntities(this.getEntitiesSuccessHandler, this.errorHandler, this);
  }
  getEntitiesSuccessHandler(data, prms) {
    if (!data.entity.length) {
      prms.entityNames.push({
        label: data.entity.entityDescription,
        value: lodash__WEBPACK_IMPORTED_MODULE_0__.toUpper(data.entity.entityName)
      });
    } else if (data.entity.length > 0) {
      data.entity.forEach(ent => {
        prms.entityNames.push({
          label: ent.entityDescription,
          value: lodash__WEBPACK_IMPORTED_MODULE_0__.toUpper(ent.entityName)
        });
      });
    }
  }
  loadUsersList() {
    this.migService.getMigrationAdminUsers(this.getMigrationAdminUsersSuccessHandler, this.errorHandler, this);
  }
  getMigrationAdminUsersSuccessHandler(data, prms) {
    prms.usersList = [];
    if (data.USER_DETAILS) {
      if (!data.USER_DETAILS.length) {
        prms.usersList.push({
          label: data.USER_DETAILS.USER_NAME,
          value: data.USER_DETAILS.USER_ID
        });
      } else if (data.USER_DETAILS.length > 0) {
        data.USER_DETAILS.forEach(user => {
          prms.usersList.push({
            label: user.USER_NAME,
            value: user.USER_ID
          });
        });
      }
    }
  }
  getFilteredSearch() {
    this.displayFilters = false;
    this.showSpinner = true;
    let FILTER_PARAMS = [];
    let param = {};
    if (!this.utilService.isEmpty(this.filterEntityName)) {
      param = {
        FILTER_PARAM: {
          PARAM_NAME: 'EntityName',
          PARAM_VALUE: "'" + this.filterEntityName + "'",
          PARAM_OP: 'EQ'
        }
      };
      FILTER_PARAMS.push(param);
    }
    if (!this.utilService.isEmpty(this.filterFileName)) {
      param = {
        FILTER_PARAM: {
          PARAM_NAME: 'FileName',
          PARAM_VALUE: "'" + this.filterFileName + "'",
          PARAM_OP: 'EQ'
        }
      };
      FILTER_PARAMS.push(param);
    }
    if (!this.utilService.isEmpty(this.filterUploadedBy)) {
      param = {
        FILTER_PARAM: {
          PARAM_NAME: 'UploadedBy',
          PARAM_VALUE: "'" + this.filterUploadedBy + "'",
          PARAM_OP: 'EQ'
        }
      };
      FILTER_PARAMS.push(param);
    }
    if (!this.utilService.isEmpty(this.filterFromDate)) {
      param = {
        FILTER_PARAM: {
          PARAM_NAME: 'FromDate',
          PARAM_VALUE: "CAST('" + this.datePipe.transform(this.filterFromDate, "yyyy-MM-dd") + "' AS DATE)",
          PARAM_OP: 'GTEQ'
        }
      };
      FILTER_PARAMS.push(param);
    }
    if (!this.utilService.isEmpty(this.filterToDate)) {
      let newToDate = new Date(this.filterToDate);
      newToDate.setDate(newToDate.getDate() + 1);
      param = {
        FILTER_PARAM: {
          PARAM_NAME: 'ToDate',
          PARAM_VALUE: "CAST('" + this.datePipe.transform(newToDate, "yyyy-MM-dd") + "' AS DATE)",
          PARAM_OP: 'LT'
        }
      };
      FILTER_PARAMS.push(param);
    }
    this.migService.getFilteredReportDetails('INGESTION', FILTER_PARAMS, this.getReportSuccessHandler, this.errorHandler, this);
  }
  onRowSelected(selectedDoc) {
    this.selectedIndex = selectedDoc.index;
  }
  onRowUnselected(unselectedDoc) {
    this.selectedIndex = -1;
  }
  deleteEntry() {
    if (this.selectedIndex != -1) {
      let req = {
        entityName: this.igtData[this.selectedIndex].ENTITY,
        jobFileId: this.igtData[this.selectedIndex].JOB_FILES_ID,
        tableId: ''
      };
    } else {
      this.utilService.alert('error', 'Error', 'Please select a file to delete!!', false);
    }
  }
  validateEntry() {
    if (this.selectedIndex != -1) {
      let req = {
        entityName: this.igtData[this.selectedIndex].ENTITY,
        jobFileId: this.igtData[this.selectedIndex].JOB_FILES_ID,
        tableId: ''
      };
    } else {
      this.utilService.alert('error', 'Error', 'Please select a file to validate!!', false);
    }
  }
  validateDataSuccessHandler(data, prms) {
    if (data) {
      prms.utilService.alert("success", "Success", "Validation initiated, please check data validation report for updates!!");
      prms.refreshData();
    }
  }
  deleteDataSuccessHandler(data, prms) {
    if (data) {
      prms.utilService.alert("success", "Success", "File data deleted successfully!!");
      prms.refreshData();
    }
  }
  viewFileReport(data) {
    let fileName = "";
    if (data.FILE_NAME.length > 60) {
      fileName = data.FILE_NAME.substring(0, 60) + "...";
    } else {
      fileName = data.FILE_NAME;
    }
    this.utilService.clearBreadcrumb();
    this.utilService.transferFileData(data);
    this.utilService.setFileReportSource('INGESTION_REPORT');
    this.utilService.pushToBreadcrumb('Ingestion Report', 'fa fa-database', '', null, 'PUSH_TO_MENU', 'INGESTION_REPORT', 'custom-menu');
    this.utilService.pushToBreadcrumb(fileName, 'fa fa-files-o', '', null, 'DASHBOARD_RELOAD', 'FILE_REPORT', 'custom-active-menu');
  }
  openModal(template, cssClass) {
    this.modalRef = this.modalService.show(template, {
      class: cssClass,
      keyboard: false,
      backdrop: true,
      ignoreBackdropClick: true
    });
  }
  hideModal() {
    this.modalRef.hide();
  }
  onOtherColumnSelect(selectData, rowData) {
    if (selectData.checked) {
      let cIndex = lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.otherColumnsData, function (col) {
        return col.field == rowData.field;
      });
      if (cIndex == -1) {
        this.otherColumnsData.push(rowData);
      }
    } else {
      let cIndex = lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.otherColumnsData, function (col) {
        return col.field == rowData.field;
      });
      if (cIndex != -1) {
        this.otherColumnsData.splice(cIndex, 1);
      }
    }
  }
  addNewColumns() {
    this.hideModal();
    this.resetTableCols();
    this.otherColumnsData.forEach(oCol => {
      let cIndex = lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.igtDataCols, function (col) {
        return col.field == oCol.field;
      });
      if (cIndex == -1) {
        this.igtDataCols.push(oCol);
      }
    });
  }
  resetTableCols() {
    this.igtDataCols = [{
      field: "ENTITY_DESCRIPTION",
      label: "Entity Name",
      type: "string"
    }, {
      field: "FILE_NAME",
      label: "File Name",
      type: "string"
    }, {
      field: "UPLOADED_BY",
      label: "Uploaded By",
      type: "string"
    }, {
      field: "UPLOADED_ON",
      label: "Uploaded On",
      type: "date"
    }, {
      field: "UPLOAD_SUCCESS_COUNT",
      label: "Upload Success",
      type: "string"
    }, {
      field: "TOTAL_COUNT",
      label: "Total Count",
      type: "string"
    }];
  }
  serviceErrorHandler(response, status, errorText, prms) {
    prms.curComp.utilService.alert('error', 'Error', 'Service error, please contact administrator!!', false);
  }
  errorHandler(response, prms) {
    prms.utilService.alert('error', 'Error', 'Service error, please contact administrator!!', false);
  }
}
IngestionReportComponent.ɵfac = function IngestionReportComponent_Factory(t) {
  return new (t || IngestionReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_commons_services_migration_service__WEBPACK_IMPORTED_MODULE_2__.MigrationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe));
};
IngestionReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: IngestionReportComponent,
  selectors: [["ingestion-report"]],
  viewQuery: function IngestionReportComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.columnFilterModal = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.ingestionData = _t.first);
    }
  },
  inputs: {
    clearMenu: "clearMenu"
  },
  decls: 33,
  vars: 14,
  consts: [[1, "container-fluid", "no-left-padding", "no-right-padding"], ["position", "right", 1, "custom-right-sidebar", 3, "visible", "visibleChange"], [1, "row", "no-left-padding", "no-right-padding", "no-top-padding"], [1, "col-lg-12", "xsm-padding", 2, "padding-left", "2px !important"], [1, "custom-search-panel"], ["pTemplate", "header"], [1, "row", "xsm-padding"], [1, "col-lg-5", "xsm-padding", "xsm-margin"], ["appendTo", "body", "placeholder", "Entity Name", "name", "entityName", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose entity", 1, "custom-search-dropdown", 3, "options", "ngModel", "ngModelChange"], ["entityName", "ngModel"], [1, "col-lg-6", "xsm-padding", "xsm-margin"], ["label", "Search", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "right", "pTooltip", "Click to get search results", "styleClass", "p-button-sm", 1, "custom-sr-btn", 3, "click"], ["type", "text", "pInputText", "", "name", "fName", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter file name", "tooltipPosition", "bottom", "placeholder", "File Name", 2, "font-size", "13px !important", 3, "ngModel", "ngModelChange"], ["fName", "ngModel"], ["appendTo", "body", "placeholder", "Uploaded By", "name", "uploadedBy", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose uploaded by", 1, "custom-search-dropdown", 3, "options", "ngModel", "ngModelChange"], ["uploadedBy", "ngModel"], ["inputId", "icon", "dateFormat", "dd/mm/yy", "name", "ftFromDate", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter from date", "placeholder", "From Date", 1, "custom-calendar", 3, "ngModel", "showIcon", "maxDate", "ngModelChange"], ["ftFromDate", "ngModel"], ["inputId", "icon", "dateFormat", "dd/mm/yy", "name", "ftToDate", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter to date", "placeholder", "To Date", 1, "custom-calendar", 3, "ngModel", "showIcon", "maxDate", "ngModelChange"], ["ftToDate", "ngModel"], [1, "row", "sm-padding"], [1, "col-lg-12", "sm-padding", "no-left-padding", "no-right-padding", "no-top-padding"], [1, "xsm-padding", "lg-card-height", "pm-lt-bk"], ["class", "dashboard-spinner", "strokeWidth", "7", 4, "ngIf"], ["class", "custom-scroll", 3, "style", 4, "ngIf"], ["columnFilterModal", ""], [1, "col-lg-2", "xsm-padding", "no-left-padding", "no-right-padding", "form-field-header"], ["strokeWidth", "7", 1, "dashboard-spinner"], [1, "custom-scroll"], [1, "custom-table", 3, "value", "columns", "paginator", "rows", "responsive", "globalFilterFields", "onRowSelect", "onRowUnselect"], ["ingestionData", ""], ["pTemplate", "caption"], ["pTemplate", "body"], [1, "table-header", 2, "text-align", "left"], [1, "p-input-icon-right", 2, "width", "30%"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search", 1, "xsm-pm-border", "sm-font", 2, "width", "100%", "height", "30px", "font-size", "12px !important", 3, "input"], ["textInput", ""], [2, "width", "50%", "padding-left", "40px", "font-size", "14px !important", "font-weight", "bold !important"], [1, "xsm-margin-bottom", "p-input-icon-right", "pointer", 2, "width", "46%"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to refresh data", 1, "fa", "fa-refresh", 2, "padding-right", "20px !important", 3, "click"], [1, "xsm-margin-bottom", "p-input-icon-right", "pointer", 2, "width", "2%"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to delete", 1, "fa", "fa-trash", 2, "padding-right", "15px !important", 3, "click"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to validate", 1, "fa", "fa-check-circle", 2, "padding-right", "10px !important", 3, "click"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to open search", 1, "fa", "fa-search-plus", 2, "padding-right", "5px !important", 3, "click"], ["tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose columns", "tooltipPosition", "left", 1, "fa", "fa-cogs", 3, "click"], [2, "width", "50px !important"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [1, "pointer"], [1, "custom-radio-btn", 3, "value", "index"], ["ngFor", "", 3, "ngForOf"], ["style", "text-align:center;", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", 3, "pTooltip", 4, "ngIf"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", 3, "pTooltip", 4, "ngIf"], ["class", "custom-warn-text", "style", "text-decoration: underline !important; cursor: pointer !important;", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "right", 3, "pTooltip", "click", 4, "ngIf"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", 2, "text-align", "center", 3, "pTooltip"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", 3, "pTooltip"], [1, "custom-tag-user", 3, "value"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "right", 1, "custom-warn-text", 2, "text-decoration", "underline !important", "cursor", "pointer !important", 3, "pTooltip", "click"], [1, "app-card"], [1, "modal-action-bar", "right-align"], [1, "row"], [1, "col-lg-10", "modal-header"], [1, "custom-modal-heading"], [1, "col-lg-2", "modal-header"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", 3, "click"], [1, "custom-modl-content"], [1, "custom-scroll", "sm-padding"], [1, "modal-footer"], ["label", "Ok", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to add columns", "styleClass", "p-button-sm", 1, "custom-tertiary-btn", 3, "click"], ["label", "Cancel", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to cancel", "styleClass", "p-button-sm", 1, "custom-tertiary-btn", 3, "click"], [1, "col-lg-12"], [1, "col-lg-1"], [1, "p-field-radiobutton"], [1, "custom-checkbox", 3, "id", "binary", "name", "ngModel", "onChange", "ngModelChange"], ["allColumn", "ngModel"], [1, "col-lg-10", 2, "padding-top", "3px"], [1, "no-padding", "form-field-header"]],
  template: function IngestionReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "p-sidebar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibleChange", function IngestionReportComponent_Template_p_sidebar_visibleChange_1_listener($event) {
        return ctx.displayFilters = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "p-panel", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, IngestionReportComponent_ng_template_5_Template, 2, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "p-dropdown", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function IngestionReportComponent_Template_p_dropdown_ngModelChange_8_listener($event) {
        return ctx.filterEntityName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10)(11, "p-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IngestionReportComponent_Template_p_button_click_11_listener() {
        return ctx.getFilteredSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6)(13, "div", 7)(14, "input", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function IngestionReportComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.filterFileName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 7)(17, "p-dropdown", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function IngestionReportComponent_Template_p_dropdown_ngModelChange_17_listener($event) {
        return ctx.filterUploadedBy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 6)(20, "div", 7)(21, "p-calendar", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function IngestionReportComponent_Template_p_calendar_ngModelChange_21_listener($event) {
        return ctx.filterFromDate = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 7)(24, "p-calendar", 18, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function IngestionReportComponent_Template_p_calendar_ngModelChange_24_listener($event) {
        return ctx.filterToDate = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 20)(27, "div", 21)(28, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, IngestionReportComponent_p_progressSpinner_29_Template, 1, 0, "p-progressSpinner", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, IngestionReportComponent_p_scrollPanel_30_Template, 6, 13, "p-scrollPanel", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, IngestionReportComponent_ng_template_31_Template, 15, 4, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.displayFilters);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.entityNames)("ngModel", ctx.filterEntityName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filterFileName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.usersList)("ngModel", ctx.filterUploadedBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filterFromDate)("showIcon", true)("maxDate", ctx.todaysDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filterToDate)("showIcon", true)("maxDate", ctx.todaysDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.showSpinner);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_9__.TableRadioButton, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_10__.ScrollPanel, primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__.Tooltip, primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__.Checkbox, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.Dropdown, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_calendar__WEBPACK_IMPORTED_MODULE_15__.Calendar, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__.ProgressSpinner, primeng_sidebar__WEBPACK_IMPORTED_MODULE_17__.Sidebar, primeng_tag__WEBPACK_IMPORTED_MODULE_18__.Tag, primeng_panel__WEBPACK_IMPORTED_MODULE_19__.Panel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7111:
/*!****************************************************************************************!*\
  !*** ./src/app/migration/mig-consolidated-report/mig-consolidated-report.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MigConsolidatedReportComponent": () => (/* binding */ MigConsolidatedReportComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commons/services/utilities.service */ 5810);
/* harmony import */ var _commons_services_migration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../commons/services/migration.service */ 9128);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/progressspinner */ 2901);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/sidebar */ 4179);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/tag */ 3042);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/panel */ 4266);


















const _c0 = ["migConsData"];
function MigConsolidatedReportComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Search Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function MigConsolidatedReportComponent_p_progressSpinner_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-progressSpinner", 22);
  }
}
function MigConsolidatedReportComponent_p_scrollPanel_23_ng_template_3_span_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 38)(1, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MigConsolidatedReportComponent_p_scrollPanel_23_ng_template_3_span_9_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.openSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function MigConsolidatedReportComponent_p_scrollPanel_23_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29)(1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function MigConsolidatedReportComponent_p_scrollPanel_23_ng_template_3_Template_input_input_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r6.filterGlobal(_r11.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 35)(8, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MigConsolidatedReportComponent_p_scrollPanel_23_ng_template_3_Template_i_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.refreshData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, MigConsolidatedReportComponent_p_scrollPanel_23_ng_template_3_span_9_Template, 2, 0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Total Records: ", ctx_r7.migratedData.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", false);
  }
}
function MigConsolidatedReportComponent_p_scrollPanel_23_ng_template_4_th_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-sortIcon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSortableColumn", col_r20.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", col_r20.spanWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r20.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", col_r20.field);
  }
}
function MigConsolidatedReportComponent_p_scrollPanel_23_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MigConsolidatedReportComponent_p_scrollPanel_23_ng_template_4_th_1_Template, 3, 4, "th", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columns_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", columns_r18);
  }
}
function MigConsolidatedReportComponent_p_scrollPanel_23_ng_template_5_ng_template_1_td_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const rowData_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("pTooltip", col_r25.type == "datetime" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 3, rowData_r21[col_r25.field], "dd/MM/yyyy h:mm:ss") : col_r25.type == "date" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 6, rowData_r21[col_r25.field], "dd/MM/yyyy") : rowData_r21[col_r25.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", col_r25.spanWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r25.type == "date" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 9, rowData_r21[col_r25.field], "dd/MM/yyyy") : rowData_r21[col_r25.field], " ");
  }
}
function MigConsolidatedReportComponent_p_scrollPanel_23_ng_template_5_ng_template_1_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p-tag", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const rowData_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("pTooltip", rowData_r21[col_r25.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("colspan", col_r25.spanWidth);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", rowData_r21[col_r25.field]);
  }
}
function MigConsolidatedReportComponent_p_scrollPanel_23_ng_template_5_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MigConsolidatedReportComponent_p_scrollPanel_23_ng_template_5_ng_template_1_td_0_Template, 5, 12, "td", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MigConsolidatedReportComponent_p_scrollPanel_23_ng_template_5_ng_template_1_td_1_Template, 2, 3, "td", 46);
  }
  if (rf & 2) {
    const col_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", col_r25.field != "ENTITY_DESCRIPTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", col_r25.field == "ENTITY_DESCRIPTION");
  }
}
function MigConsolidatedReportComponent_p_scrollPanel_23_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MigConsolidatedReportComponent_p_scrollPanel_23_ng_template_5_ng_template_1_Template, 2, 2, "ng-template", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columns_r22 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", columns_r22);
  }
}
function MigConsolidatedReportComponent_p_scrollPanel_23_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " No data available!!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
const _c1 = function () {
  return {
    width: "100%",
    height: "635px"
  };
};
const _c2 = function () {
  return {
    width: "100%"
  };
};
const _c3 = function () {
  return ["ENTITY_DESCRIPTION", "TOTAL_COUNT", "UPLOAD_SUCCESS_COUNT", "UPLOAD_ERROR_COUNT", "VALIDATE_SUCCESS_COUNT", "VALIDATE_ERROR_COUNT", "MIGRATE_SUCCESS_COUNT", "MIGRATE_ERROR_COUNT"];
};
function MigConsolidatedReportComponent_p_scrollPanel_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-scrollPanel", 23)(1, "p-table", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MigConsolidatedReportComponent_p_scrollPanel_23_ng_template_3_Template, 10, 2, "ng-template", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MigConsolidatedReportComponent_p_scrollPanel_23_ng_template_4_Template, 2, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MigConsolidatedReportComponent_p_scrollPanel_23_ng_template_5_Template, 2, 1, "ng-template", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MigConsolidatedReportComponent_p_scrollPanel_23_ng_template_6_Template, 3, 0, "ng-template", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r5.migratedData)("columns", ctx_r5.migratedDataCols)("paginator", true)("rows", 14)("responsive", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c3));
  }
}
class MigConsolidatedReportComponent {
  constructor(utilService, migService) {
    this.utilService = utilService;
    this.migService = migService;
    this.migratedData = [];
    this.migratedDataCols = [];
    this.displayFilters = false;
    this.filterEntityName = "";
    this.entityNames = [];
    this.todaysDate = new Date();
    this.showSpinner = false;
  }
  ngOnInit() {
    this.utilService.clearBreadcrumb();
    this.migratedDataCols = [{
      field: "ENTITY_DESCRIPTION",
      label: "Entity Name",
      type: "string",
      spanWidth: "2"
    }, {
      field: "TOTAL_COUNT",
      label: "Total Records",
      type: "string",
      spanWidth: "1"
    }, {
      field: "UPLOAD_SUCCESS_COUNT",
      label: "Upload Success",
      type: "string",
      spanWidth: "1"
    }, {
      field: "VALIDATE_SUCCESS_COUNT",
      label: "Validation Success",
      type: "string",
      spanWidth: "1"
    }, {
      field: "VALIDATE_ERROR_COUNT",
      label: "Validation Fail",
      type: "string",
      spanWidth: "1"
    }, {
      field: "MIGRATE_SUCCESS_COUNT",
      label: "Migration Success",
      type: "string",
      spanWidth: "1"
    }, {
      field: "MIGRATE_ERROR_COUNT",
      label: "Migration Fail",
      type: "string",
      spanWidth: "1"
    }];
    this.refreshData();
  }
  refreshData() {
    this.showSpinner = true;
    this.migService.getConsolidatedReport(this.getConsolidatedReportSuccessHandler, this.errorHandler, this);
  }
  openSearch() {
    this.displayFilters = true;
    this.loadEntities();
  }
  loadEntities() {
    this.migService.getMigrationEntities(this.getEntitiesSuccessHandler, this.errorHandler, this);
  }
  getEntitiesSuccessHandler(data, prms) {
    if (!data.entity.length) {
      prms.entityNames.push({
        label: data.entity.entityDescription,
        value: lodash__WEBPACK_IMPORTED_MODULE_0__.toUpper(data.entity.entityName)
      });
    } else if (data.entity.length > 0) {
      data.entity.forEach(ent => {
        prms.entityNames.push({
          label: ent.entityDescription,
          value: lodash__WEBPACK_IMPORTED_MODULE_0__.toUpper(ent.entityName)
        });
      });
    }
  }
  getConsolidatedReportSuccessHandler(data, prms) {
    prms.migratedData = [];
    if (data.tuple) {
      if (!data.tuple.length) {
        prms.migratedData.push(data.tuple.old.SIW_ENTITIES);
      } else if (data.tuple.length > 0) {
        data.tuple.forEach(tp => {
          prms.migratedData.push(tp.old.SIW_ENTITIES);
        });
      }
    }
    prms.showSpinner = false;
  }
  getFilteredSearch() {
    this.displayFilters = false;
  }
  serviceErrorHandler(response, status, errorText, prms) {
    prms.curComp.utilService.alert('error', 'Error', 'Service error, please contact administrator!!', false);
  }
  errorHandler(response, prms) {
    prms.utilService.alert('error', 'Error', 'Service error, please contact administrator!!', false);
  }
}
MigConsolidatedReportComponent.ɵfac = function MigConsolidatedReportComponent_Factory(t) {
  return new (t || MigConsolidatedReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_commons_services_migration_service__WEBPACK_IMPORTED_MODULE_2__.MigrationService));
};
MigConsolidatedReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MigConsolidatedReportComponent,
  selectors: [["mig-consolidated-report"]],
  viewQuery: function MigConsolidatedReportComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.migConsData = _t.first);
    }
  },
  decls: 24,
  vars: 11,
  consts: [[1, "container-fluid", "no-left-padding", "no-right-padding"], ["position", "right", 1, "custom-right-sidebar", 3, "visible", "visibleChange"], [1, "row", "no-left-padding", "no-right-padding", "no-top-padding"], [1, "col-lg-12", "xsm-padding", 2, "padding-left", "2px !important"], [1, "custom-search-panel"], ["pTemplate", "header"], [1, "row", "xsm-padding"], [1, "col-lg-5", "xsm-padding", "xsm-margin"], ["appendTo", "body", "placeholder", "Entity Name", "name", "entityName", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose entity", 1, "custom-search-dropdown", 3, "options", "ngModel", "ngModelChange"], ["entityName", "ngModel"], [1, "col-lg-6", "xsm-padding", "xsm-margin"], ["label", "Search", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "right", "pTooltip", "Click to get search results", "styleClass", "p-button-sm", 1, "custom-sr-btn", 3, "click"], ["inputId", "icon", "dateFormat", "dd/mm/yy", "name", "ftFromDate", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter from date", "placeholder", "From Date", 1, "custom-calendar", 3, "ngModel", "showIcon", "maxDate", "ngModelChange"], ["ftFromDate", "ngModel"], ["inputId", "icon", "dateFormat", "dd/mm/yy", "name", "ftToDate", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter to date", "placeholder", "To Date", 1, "custom-calendar", 3, "ngModel", "showIcon", "maxDate", "ngModelChange"], ["ftToDate", "ngModel"], [1, "row", "sm-padding"], [1, "col-lg-12", "sm-padding", "no-left-padding", "no-right-padding", "no-top-padding"], [1, "xsm-padding", "lg-card-height", "pm-lt-bk"], ["class", "dashboard-spinner", "strokeWidth", "7", 4, "ngIf"], ["class", "custom-scroll", 3, "style", 4, "ngIf"], [1, "col-lg-2", "xsm-padding", "no-left-padding", "no-right-padding", "form-field-header"], ["strokeWidth", "7", 1, "dashboard-spinner"], [1, "custom-scroll"], [1, "custom-table", 3, "value", "columns", "paginator", "rows", "responsive", "globalFilterFields"], ["migConsData", ""], ["pTemplate", "caption"], ["pTemplate", "body"], ["pTemplate", "emptymessage"], [1, "table-header", 2, "text-align", "left"], [1, "p-input-icon-right", 2, "width", "30%"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search", 1, "xsm-pm-border", "sm-font", 2, "width", "100%", "height", "30px", "font-size", "12px !important", 3, "input"], ["textInput", ""], [2, "width", "50%", "padding-left", "40px", "font-size", "14px !important", "font-weight", "bold !important"], [1, "xsm-margin-bottom", "p-input-icon-right", "pointer", 2, "width", "54%"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to refresh data", 1, "fa", "fa-refresh", 2, "padding-right", "5px !important", 3, "click"], ["style", "width: 2%;", "class", "xsm-margin-bottom p-input-icon-right pointer", 4, "ngIf"], [1, "xsm-margin-bottom", "p-input-icon-right", "pointer", 2, "width", "2%"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to open search", 1, "fa", "fa-search-plus", 3, "click"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [1, "pointer"], ["ngFor", "", 3, "ngForOf"], ["style", "text-align:center;", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", 3, "pTooltip", 4, "ngIf"], ["style", "padding-left: 20px !important;", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "right", 3, "pTooltip", 4, "ngIf"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", 2, "text-align", "center", 3, "pTooltip"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "right", 2, "padding-left", "20px !important", 3, "pTooltip"], [1, "custom-tag-user", 3, "value"], ["colspan", "8", 1, "custom-info-text", 2, "text-align", "center !important", "font-size", "14px !important"]],
  template: function MigConsolidatedReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "p-sidebar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibleChange", function MigConsolidatedReportComponent_Template_p_sidebar_visibleChange_1_listener($event) {
        return ctx.displayFilters = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "p-panel", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MigConsolidatedReportComponent_ng_template_5_Template, 2, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "p-dropdown", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MigConsolidatedReportComponent_Template_p_dropdown_ngModelChange_8_listener($event) {
        return ctx.filterEntityName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10)(11, "p-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MigConsolidatedReportComponent_Template_p_button_click_11_listener() {
        return ctx.getFilteredSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6)(13, "div", 7)(14, "p-calendar", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MigConsolidatedReportComponent_Template_p_calendar_ngModelChange_14_listener($event) {
        return ctx.filterFromDate = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 7)(17, "p-calendar", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MigConsolidatedReportComponent_Template_p_calendar_ngModelChange_17_listener($event) {
        return ctx.filterToDate = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 16)(20, "div", 17)(21, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, MigConsolidatedReportComponent_p_progressSpinner_22_Template, 1, 0, "p-progressSpinner", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, MigConsolidatedReportComponent_p_scrollPanel_23_Template, 7, 13, "p-scrollPanel", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.displayFilters);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.entityNames)("ngModel", ctx.filterEntityName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filterFromDate)("showIcon", true)("maxDate", ctx.todaysDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filterToDate)("showIcon", true)("maxDate", ctx.todaysDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.showSpinner);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_6__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortIcon, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_9__.ScrollPanel, primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__.Tooltip, primeng_dropdown__WEBPACK_IMPORTED_MODULE_11__.Dropdown, primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputText, primeng_calendar__WEBPACK_IMPORTED_MODULE_13__.Calendar, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_14__.ProgressSpinner, primeng_sidebar__WEBPACK_IMPORTED_MODULE_15__.Sidebar, primeng_tag__WEBPACK_IMPORTED_MODULE_16__.Tag, primeng_panel__WEBPACK_IMPORTED_MODULE_17__.Panel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5578:
/*!********************************************************************************!*\
  !*** ./src/app/migration/migration-dashboard/migration-dashboard.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MigrationDashboardComponent": () => (/* binding */ MigrationDashboardComponent)
/* harmony export */ });
/* harmony import */ var _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../commons/services/utilities.service */ 5810);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ 9129);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/accordion */ 9854);
/* harmony import */ var primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/confirmdialog */ 97);
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/breadcrumb */ 7298);
/* harmony import */ var _migration_data_upload_migration_data_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../migration-data-upload/migration-data-upload.component */ 9221);
/* harmony import */ var _file_report_file_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../file-report/file-report.component */ 322);
/* harmony import */ var _ingestion_report_ingestion_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ingestion-report/ingestion-report.component */ 2920);
/* harmony import */ var _mig_consolidated_report_mig_consolidated_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mig-consolidated-report/mig-consolidated-report.component */ 7111);
/* harmony import */ var _migration_report_migration_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../migration-report/migration-report.component */ 2291);
/* harmony import */ var _record_data_record_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../record-data/record-data.component */ 4409);
/* harmony import */ var _validation_report_validation_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../validation-report/validation-report.component */ 5431);




















function MigrationDashboardComponent_div_2_ng_template_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "div", 20)(2, "div", 1)(3, "div", 21)(4, "p-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MigrationDashboardComponent_div_2_ng_template_4_ng_template_1_Template_p_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r17);
      const childServ_r15 = restoredCtx.$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r16.loadService(childServ_r15));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const childServ_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](childServ_r15.StyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("label", childServ_r15.ServiceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("pTooltip", childServ_r15.Tooltip);
  }
}
function MigrationDashboardComponent_div_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "p-accordionTab", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, MigrationDashboardComponent_div_2_ng_template_4_ng_template_1_Template, 6, 5, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const accServ_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("header", accServ_r13.ServiceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("selected", accServ_r13.SERVICE_SELECTED);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("pTooltip", accServ_r13.Tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", accServ_r13.ChildServices);
  }
}
function MigrationDashboardComponent_div_2_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 1)(1, "div", 20)(2, "div", 1)(3, "div", 24)(4, "p-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MigrationDashboardComponent_div_2_ng_template_5_Template_p_button_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r20);
      const btnServ_r18 = restoredCtx.$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r19.loadService(btnServ_r18));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const btnServ_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](btnServ_r18.StyleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("label", btnServ_r18.ServiceName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("pTooltip", btnServ_r18.Tooltip);
  }
}
const _c0 = function () {
  return {
    width: "100%",
    height: "891px"
  };
};
function MigrationDashboardComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "p-scrollPanel", 16)(3, "p-accordion", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, MigrationDashboardComponent_div_2_ng_template_4_Template, 2, 4, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, MigrationDashboardComponent_div_2_ng_template_5_Template, 6, 5, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.accordionServiceList);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.buttonServiceList);
  }
}
function MigrationDashboardComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "p-breadcrumb", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onItemClick", function MigrationDashboardComponent_div_4_Template_p_breadcrumb_onItemClick_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r21.onMenuClick($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("model", ctx_r1.breadcrumbMenu);
  }
}
function MigrationDashboardComponent_migration_data_upload_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "migration-data-upload");
  }
}
function MigrationDashboardComponent_ingestion_report_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "ingestion-report", 29);
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("clearMenu", ctx_r3.clearMenu);
  }
}
function MigrationDashboardComponent_file_report_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "file-report", 30);
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("fileDetails", ctx_r4.fileDetails)("source", ctx_r4.fileSource);
  }
}
function MigrationDashboardComponent_mig_consolidated_report_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "mig-consolidated-report");
  }
}
function MigrationDashboardComponent_migration_report_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "migration-report", 29);
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("clearMenu", ctx_r6.clearMenu);
  }
}
function MigrationDashboardComponent_record_data_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "record-data", 31);
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("fileDetails", ctx_r7.fileDetails)("rowDetails", ctx_r7.rowDetails);
  }
}
function MigrationDashboardComponent_validation_report_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "validation-report", 29);
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("clearMenu", ctx_r8.clearMenu);
  }
}
function MigrationDashboardComponent_ng_template_16_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 42)(1, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MigrationDashboardComponent_ng_template_16_div_6_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r24.hideModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }
}
const _c1 = function () {
  return {
    width: "100%",
    height: "530px"
  };
};
function MigrationDashboardComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "div", 1)(3, "div", 34)(4, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, MigrationDashboardComponent_ng_template_16_div_6_Template, 2, 0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "p-scrollPanel", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 39)(10, "p-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MigrationDashboardComponent_ng_template_16_Template_p_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r26.createServiceRequest());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "p-button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function MigrationDashboardComponent_ng_template_16_Template_p_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵresetView"](ctx_r28.hideRequestModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r10.serviceTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](4, _c1));
  }
}
const _c2 = function (a0) {
  return {
    "height": a0
  };
};
const _c3 = function () {
  return {
    width: "35vw"
  };
};
class MigrationDashboardComponent {
  constructor(utilService, datePipe, confirmationService) {
    this.utilService = utilService;
    this.datePipe = datePipe;
    this.confirmationService = confirmationService;
    this.servIdentifier = 'CONSOLIDATED_REPORT';
    this.allServiceList = [];
    this.accordionServiceList = [];
    this.buttonServiceList = [];
    this.servicesPresent = true;
    this.breadcrumbMenu = [];
    this.fileDetails = {};
    this.rowDetails = {};
    this.clearMenu = false;
    this.fileSource = "";
  }
  ngOnInit() {
    this.getLoggedInUserDetails();
    this.getMenuConfig();
    this.utilService.dashboardServ.subscribe(serv => {
      this.servIdentifier = serv;
    });
    this.utilService.pushToMenu.subscribe(menuInfo => {
      this.pushToBreadcrumb(menuInfo.label, menuInfo.icon, menuInfo.routerLink, menuInfo.queryParams, menuInfo.commandType, menuInfo.commandDesc, menuInfo.styleClass);
    });
    this.utilService.clearMenu.subscribe(info => {
      this.breadcrumbMenu = [];
    });
    this.utilService.fileDetails.subscribe(fileInfo => {
      this.fileDetails = fileInfo;
    });
    this.utilService.rowDetails.subscribe(rowInfo => {
      this.rowDetails = rowInfo;
    });
    this.utilService.fileSource.subscribe(source => {
      this.fileSource = source.FILE_SOURCE;
    });
  }
  loadUserProfile() {
    if (!_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.IS_USER_PROFILE_TRIGGERED) {
      //Service Implementation
      let response = {
        "UserProfile": {
          "InboxPreference": "[]",
          "ContactNumber": {
            "@nil": "true"
          },
          "DisplayName": "Priya",
          "OutOfOfficeMessage": {
            "@nil": "true"
          },
          "Name": "priya",
          "DateFrom": {
            "@nil": "true"
          },
          "DepartmentName": "IAD",
          "ReceiveEmailNotifications": "false",
          "OutOfOffice": "false",
          "LastUpdatedBy": "priya",
          "LastUpdatedOn": "2022-05-24T17:15:48Z",
          "UserID": "priya",
          "DateUntil": {
            "@nil": "true"
          },
          "Email": {
            "@nil": "true"
          },
          "UserProfile-id": {
            "Id": "213008",
            "ItemId": "002248573547A1ECA6E5D79B37C2E81A.213008"
          }
        },
        "FunctionalGroup": [{
          "FunctionalGroup-id": {
            "Id": "49155",
            "ItemId": "002248573547A1ECA0C26352C534A817.49155"
          },
          "GroupName": "IAD",
          "GroupCreatedInOTDS": "Yes",
          "IsDivision": "true",
          "IsChild": "No",
          "GroupDescription": "International Affairs Division",
          "GroupType": "Functional",
          "UserLinkedToGroup": {
            "@nil": "true"
          },
          "Status": "A",
          "Title": {
            "Value": "IAD"
          }
        }, {
          "FunctionalGroup-id": {
            "Id": "180226",
            "ItemId": "002248573547A1ECA0C26352C534A817.180226"
          },
          "GroupName": "Migration Data Admin",
          "GroupCreatedInOTDS": "No",
          "IsDivision": "false",
          "IsChild": "Yes",
          "GroupDescription": "Migration Data Admin",
          "GroupType": "Functional",
          "UserLinkedToGroup": "No",
          "Status": "A",
          "Title": {
            "Value": "Migration Data Admin"
          }
        }, {
          "FunctionalGroup-id": {
            "Id": "1",
            "ItemId": "002248573547A1ECA0C26352C534A817.1"
          },
          "GroupName": "AGC",
          "GroupCreatedInOTDS": "Yes",
          "IsDivision": "false",
          "IsChild": "No",
          "GroupDescription": "Attorney General Chambers",
          "GroupType": "Functional",
          "UserLinkedToGroup": {
            "@nil": "true"
          },
          "Status": "A",
          "Title": {
            "Value": "AGC"
          }
        }, {
          "FunctionalGroup-id": {
            "Id": "49156",
            "ItemId": "002248573547A1ECA0C26352C534A817.49156"
          },
          "GroupName": "REGISTRY (IAD)",
          "GroupCreatedInOTDS": "Yes",
          "IsDivision": "false",
          "IsChild": "Yes",
          "GroupDescription": "Registry team of IAD",
          "GroupType": "Functional",
          "UserLinkedToGroup": {
            "@nil": "true"
          },
          "Status": "A",
          "Title": {
            "Value": "REGISTRY (IAD)"
          }
        }]
      };
      let resp = response.UserProfile;
      _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.CURRENT_USER_ITEM_ID = resp['UserProfile-id']['ItemId'];
      _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.CURRENT_USER_INBOX_PREF = {
        "field": "TASK_ACTION",
        "label": "Action",
        "type": "string",
        "spanWidth": "1",
        "isSelected": true,
        "display": true,
        "spanWidthPx": "100"
      }, {
        "field": "TASK_TITLE",
        "label": "Title",
        "type": "string",
        "spanWidth": "2",
        "isSelected": true,
        "display": true,
        "spanWidthPx": "200"
      }, {
        "field": "FILE_TITLE",
        "label": "File Title",
        "type": "string",
        "spanWidth": "1",
        "isSelected": true,
        "display": true,
        "spanWidthPx": "200"
      }, {
        "field": "FILE_REF_NO",
        "label": "Ref No.",
        "type": "string",
        "spanWidth": "1",
        "isSelected": true,
        "display": true,
        "spanWidthPx": "200"
      }, {
        "field": "REQUEST_ID",
        "label": "Req ID",
        "type": "string",
        "spanWidth": "1",
        "isSelected": true,
        "display": true,
        "spanWidthPx": "100"
      }, {
        "field": "DELIVERY_DATE",
        "label": "Received Date",
        "type": "datetime",
        "spanWidth": "2",
        "isSelected": true,
        "display": true,
        "spanWidthPx": "200"
      }, {
        "field": "CIRCULATION_ID",
        "label": "Circulation ID",
        "type": "string",
        "spanWidth": "2",
        "isSelected": true,
        "display": true,
        "spanWidthPx": "200"
      }, {
        "field": "REQUEST_DUE_DATE",
        "label": "Due Date",
        "type": "date",
        "spanWidth": "2",
        "isSelected": true,
        "display": true,
        "spanWidthPx": "200"
      }, {
        "field": "EXPECTED_RESPONSE_DATE",
        "label": "Expected Response Date",
        "type": "date",
        "spanWidth": "2",
        "isSelected": true,
        "display": true,
        "spanWidthPx": "200"
      }, {
        "field": "TASK_STATUS",
        "label": "Status",
        "type": "string",
        "spanWidth": "1",
        "isSelected": true,
        "display": true,
        "spanWidthPx": "100"
      }, {
        "field": "TASK_FROM",
        "label": "From",
        "type": "string",
        "spanWidth": "1",
        "isSelected": true,
        "display": true,
        "spanWidthPx": "100"
      }, {
        "field": "ACTION_OFFICER",
        "label": "Action Officer",
        "type": "string",
        "spanWidth": "1",
        "isSelected": true,
        "display": true,
        "spanWidthPx": "100"
      }, {
        "field": "ASSIGNEE",
        "label": "Locked By",
        "type": "string",
        "spanWidth": "1",
        "isSelected": true,
        "display": true,
        "spanWidthPx": "100"
      }, {
        "field": "LOCKED_TIME",
        "label": "Locked Time",
        "type": "string",
        "spanWidth": "1",
        "isSelected": true,
        "display": true,
        "spanWidthPx": "100"
      }, {
        "field": "REGISTRATION_NO",
        "label": "Registration Number",
        "type": "string",
        "spanWidth": "1",
        "isSelected": true,
        "display": true,
        "spanWidthPx": "100"
      };
      _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.IS_USER_PROFILE_TRIGGERED = true;
    }
  }
  getLoggedInUserDetails() {
    //Service Implementation
    let response = {
      "tuple": {
        "old": {
          "getLoggedInUserDetails": {
            "getLoggedInUserDetails": {
              "USER_DETAILS": {
                "USER_DN": "cn=priya,cn=organizational users,o=AGC,cn=cordys,cn=defaultInst,o=uvpvcnxb1x5erpigljqg102j2g.ix.internal.cloudapp.net",
                "USER_NAME": "priya"
              }
            }
          }
        }
      }
    };
    let resp = response.tuple.old.getLoggedInUserDetails.getLoggedInUserDetails.USER_DETAILS;
    if (resp) {
      _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.CURRENT_USER_NAME = resp.USER_NAME;
      _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.CURRENT_USER_DN = resp.USER_DN;
      this.loadUserProfile();
      this.utilService.cUserName.next({
        UserName: _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.CURRENT_USER_NAME,
        UserDN: _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService.CURRENT_USER_DN
      });
    }
  }
  getMenuConfig() {
    this.allServiceList = [];
    //Service Implementation
    let response = {
      "Services": {
        "MenuService": [{
          "Services": {
            "Title": {
              "Value": "CONSOLIDATED_REPORT"
            },
            "ServiceName": "Migration Consolidated Report",
            "ServiceURL": null,
            "ServiceType": "Application Menu",
            "ServiceDescription": "Migration Consolidated Report",
            "ServiceTooltip": "Migration Consolidated Report",
            "HasChildren": "false",
            "IsMainService": "false",
            "ServiceCode": "CONSOLIDATED_REPORT",
            "ServiceIconPath": null,
            "Services-id": {
              "Id": "114694",
              "ItemId": "002248573547A1ECA231DC72645DE817.114694"
            }
          }
        }, {
          "Services": {
            "Title": {
              "Value": "DATA_UPLOAD"
            },
            "ServiceName": "Data Upload",
            "ServiceURL": null,
            "ServiceType": "Application Menu",
            "ServiceDescription": "Data Upload",
            "ServiceTooltip": "Data Upload",
            "HasChildren": "false",
            "IsMainService": "false",
            "ServiceCode": "DATA_UPLOAD",
            "ServiceIconPath": null,
            "Services-id": {
              "Id": "114695",
              "ItemId": "002248573547A1ECA231DC72645DE817.114695"
            }
          }
        }, {
          "Services": {
            "Title": {
              "Value": "INGESTION_REPORT"
            },
            "ServiceName": "Data Ingestion Report",
            "ServiceURL": null,
            "ServiceType": "Application Menu",
            "ServiceDescription": "Data Ingestion Report",
            "ServiceTooltip": "Data Ingestion Report",
            "HasChildren": "false",
            "IsMainService": "false",
            "ServiceCode": "INGESTION_REPORT",
            "ServiceIconPath": null,
            "Services-id": {
              "Id": "114696",
              "ItemId": "002248573547A1ECA231DC72645DE817.114696"
            }
          }
        }, {
          "Services": {
            "Title": {
              "Value": "VALIDATION_REPORT"
            },
            "ServiceName": "Data Validation Report",
            "ServiceURL": null,
            "ServiceType": "Application Menu",
            "ServiceDescription": "Data Validation Report",
            "ServiceTooltip": "Data Validation Report",
            "HasChildren": "false",
            "IsMainService": "false",
            "ServiceCode": "VALIDATION_REPORT",
            "ServiceIconPath": null,
            "Services-id": {
              "Id": "114697",
              "ItemId": "002248573547A1ECA231DC72645DE817.114697"
            }
          }
        }, {
          "Services": {
            "Title": {
              "Value": "MIGRATION_REPORT"
            },
            "ServiceName": "Data Migration Report",
            "ServiceURL": null,
            "ServiceType": "Application Menu",
            "ServiceDescription": "Data Migration Report",
            "ServiceTooltip": "Data Migration Report",
            "HasChildren": "false",
            "IsMainService": "false",
            "ServiceCode": "MIGRATION_REPORT",
            "ServiceIconPath": null,
            "Services-id": {
              "Id": "114698",
              "ItemId": "002248573547A1ECA231DC72645DE817.114698"
            }
          }
        }]
      }
    };
    let resp = response.Services;
    if (resp.MenuService.length > 0) {
      resp.MenuService.forEach(serv => {
        this.allServiceList.push({
          ServiceId: serv.Services.ServiceCode,
          ServiceName: serv.Services.ServiceName,
          ExternalUrl: serv.Services.ServiceURL,
          Tooltip: serv.Services.ServiceTooltip,
          ServiceTitle: serv.Services.Title.Value,
          ServiceCode: serv.Services.ServiceCode,
          ServiceDescription: serv.Services.ServiceDescription,
          ChildServices: serv.ChildServices ? serv.ChildServices.Services : null
        });
      });
    }
    if (this.allServiceList.length > 0) {
      this.filterServices();
      this.servicesPresent = true;
    } else {
      this.servicesPresent = false;
    }
  }
  filterServices() {
    this.accordionServiceList = [];
    this.buttonServiceList = [];
    lodash__WEBPACK_IMPORTED_MODULE_1__.forEach(this.allServiceList, serv => {
      if (serv.ChildServices && serv.ChildServices.length > 0) {
        this.accordionServiceList.push(serv);
      } else if (serv.ChildServices && !serv.ChildServices.length) {
        let service = {
          ChildServices: []
        };
        service.ExternalUrl = serv.ExternalUrl;
        service.ServiceCode = serv.ServiceCode;
        service.ServiceDescription = serv.ServiceDescription;
        service.ServiceId = serv.ServiceId;
        service.ServiceName = serv.ServiceName;
        service.ServiceTitle = serv.ServiceTitle;
        service.Tooltip = serv.Tooltip;
        serv.ChildServices.StyleClass = 'custom-req-btn shadow';
        service.ChildServices.push(serv.ChildServices);
        this.accordionServiceList.push(service);
      }
    });
    lodash__WEBPACK_IMPORTED_MODULE_1__.forEach(this.allServiceList, serv => {
      if (!serv.ChildServices || serv.ChildServices && serv.ChildServices.length == 0) {
        if (serv.ServiceCode == 'CONSOLIDATED_REPORT') {
          serv.StyleClass = 'custom-serv-btn-selected';
        } else {
          serv.StyleClass = 'custom-serv-btn';
        }
        this.buttonServiceList.push(serv);
      }
    });
  }
  loadService(serviceObj) {
    this.buttonServiceList.forEach(bsl => {
      bsl.StyleClass = 'custom-serv-btn';
    });
    this.serviceTitle = serviceObj.ServiceDescription;
    this.serviceURL = serviceObj.ExternalUrl;
    this.servIdentifier = serviceObj.ServiceCode;
    this.clearMenu = true;
    serviceObj.StyleClass = 'custom-serv-btn-selected';
    if (!this.utilService.isEmpty(this.serviceURL)) {
      this.utilService.pushRoute(this.serviceURL);
    }
  }
  hideModal() {
    this.modalRef.hide();
  }
  createServiceRequest() {
    this.isReqSubmitted = true;
  }
  onRequestSubmit(data) {
    if (data.status == 'SUCCESS') {
      this.hideModal();
      this.isReqSubmitted = false;
    } else {
      setTimeout(() => {
        this.isReqSubmitted = false;
      });
    }
  }
  hideRequestModal() {
    this.isReqSubmitted = false;
    this.hideModal();
  }
  onMenuClick(menuData) {
    this.clearMenu = false;
    this.breadcrumbMenu.forEach(menu => {
      menu.styleClass = 'custom-menu';
    });
    menuData.item.styleClass = 'custom-active-menu';
    let index = lodash__WEBPACK_IMPORTED_MODULE_1__.findIndex(this.breadcrumbMenu, function (menu) {
      return menu.label == menuData.item.label;
    });
    if (index != -1) {
      this.breadcrumbMenu = this.utilService.clearBreadcrumbAfterIndex(this.breadcrumbMenu, index);
    }
  }
  pushToBreadcrumb(label, icon, routerLink, queryParams, commandType, commandDesc, styleClass) {
    let index;
    if (commandType == 'DASHBOARD_RELOAD' || commandType == 'PUSH_TO_MENU') {
      index = lodash__WEBPACK_IMPORTED_MODULE_1__.findIndex(this.breadcrumbMenu, function (menu) {
        return menu.label == label;
      });
      if (index == -1) {
        this.breadcrumbMenu.push({
          label: label,
          icon: icon,
          styleClass: styleClass,
          command: event => {
            this.utilService.reloadDashboard(commandDesc);
          }
        });
        if (commandType == 'DASHBOARD_RELOAD') {
          this.servIdentifier = commandDesc;
        }
      }
    }
  }
}
MigrationDashboardComponent.ɵfac = function MigrationDashboardComponent_Factory(t) {
  return new (t || MigrationDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_0__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_11__.ConfirmationService));
};
MigrationDashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: MigrationDashboardComponent,
  selectors: [["migration-dashboard"]],
  decls: 18,
  vars: 17,
  consts: [[1, "container-fluid"], [1, "row"], ["class", "col-lg-3 no-left-padding no-right-padding", 4, "ngIf"], [1, "sm-padding", "no-padding", 3, "ngClass"], ["class", "row xsm-padding no-bottom-padding no-top-padding", "style", "background: #FFF; margin-left: 1px !important; margin-right: -5.5px  !important; margin-top: 1px !important; margin-bottom: 0.5px !important;", 4, "ngIf"], [1, "row", 2, "padding-left", "12px !important", "height", "691px !important", 3, "ngStyle"], [1, "xsm-padding", "xsm-pm-border", "lg-card-height", "pm-lt-bk", 2, "width", "99.5%"], [4, "ngIf"], [3, "clearMenu", 4, "ngIf"], [3, "fileDetails", "source", 4, "ngIf"], [3, "fileDetails", "rowDetails", 4, "ngIf"], ["position", "top-right"], [1, "custom-confirmation", 3, "baseZIndex"], ["serviceModal", ""], [1, "col-lg-3", "no-left-padding", "no-right-padding"], [1, "xsm-padding", "xsm-pm-border", "lg-card-height", "pm-lt-bk"], [1, "custom-scroll"], [1, "custom-accordion"], ["ngFor", "", 3, "ngForOf"], ["tooltipStyleClass", "custom-tooltip", 3, "header", "selected", "pTooltip"], [1, "col-lg-12", "xsm-margin"], [1, "col-lg-12"], ["tooltipStyleClass", "custom-tooltip", 3, "label", "pTooltip", "click"], [1, "fa", "fa-chevron-right"], [1, "col-lg-12", "no-left-padding"], [1, "fa", "fa-chevron-right", "xsm-padding-left", "sm-padding-right"], [1, "row", "xsm-padding", "no-bottom-padding", "no-top-padding", 2, "background", "#FFF", "margin-left", "1px !important", "margin-right", "-5.5px  !important", "margin-top", "1px !important", "margin-bottom", "0.5px !important"], [1, "col-lg-12", "xsm-padding", "no-bottom-padding", "no-top-padding"], [1, "custom-breadcrumb", 3, "model", "onItemClick"], [3, "clearMenu"], [3, "fileDetails", "source"], [3, "fileDetails", "rowDetails"], [1, "app-card"], [1, "modal-action-bar", "right-align"], [1, "col-lg-10", "modal-header"], [1, "custom-modal-heading"], ["class", "col-lg-2 modal-header", 4, "ngIf"], [1, "custom-modl-content"], [1, "custom-scroll", "sm-padding"], [1, "modal-footer"], ["label", "Create & View", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to create and open", "styleClass", "p-button-sm", 1, "custom-tertiary-btn", 3, "click"], ["label", "Cancel", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to cancel request", "styleClass", "p-button-sm", 1, "custom-tertiary-btn", 3, "click"], [1, "col-lg-2", "modal-header"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", 3, "click"]],
  template: function MigrationDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, MigrationDashboardComponent_div_2_Template, 6, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, MigrationDashboardComponent_div_4_Template, 3, 1, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, MigrationDashboardComponent_migration_data_upload_7_Template, 1, 0, "migration-data-upload", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, MigrationDashboardComponent_ingestion_report_8_Template, 1, 1, "ingestion-report", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, MigrationDashboardComponent_file_report_9_Template, 1, 2, "file-report", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](10, MigrationDashboardComponent_mig_consolidated_report_10_Template, 1, 0, "mig-consolidated-report", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](11, MigrationDashboardComponent_migration_report_11_Template, 1, 1, "migration-report", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](12, MigrationDashboardComponent_record_data_12_Template, 1, 2, "record-data", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](13, MigrationDashboardComponent_validation_report_13_Template, 1, 1, "validation-report", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "p-toast", 11)(15, "p-confirmDialog", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](16, MigrationDashboardComponent_ng_template_16_Template, 12, 5, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.servicesPresent);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", ctx.servicesPresent ? "col-lg-9" : "col-lg-12");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.breadcrumbMenu.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](14, _c2, ctx.breadcrumbMenu.length > 0 ? "950px" : "1000px"));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.servIdentifier == "DATA_UPLOAD");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.servIdentifier == "INGESTION_REPORT");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.servIdentifier == "FILE_REPORT");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.servIdentifier == "CONSOLIDATED_REPORT");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.servIdentifier == "MIGRATION_REPORT");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.servIdentifier == "ROW_REPORT");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.servIdentifier == "VALIDATION_REPORT");
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](16, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("baseZIndex", 10000);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgStyle, primeng_button__WEBPACK_IMPORTED_MODULE_12__.Button, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_13__.ScrollPanel, primeng_tooltip__WEBPACK_IMPORTED_MODULE_14__.Tooltip, primeng_toast__WEBPACK_IMPORTED_MODULE_15__.Toast, primeng_accordion__WEBPACK_IMPORTED_MODULE_16__.Accordion, primeng_accordion__WEBPACK_IMPORTED_MODULE_16__.AccordionTab, primeng_confirmdialog__WEBPACK_IMPORTED_MODULE_17__.ConfirmDialog, primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_18__.Breadcrumb, _migration_data_upload_migration_data_upload_component__WEBPACK_IMPORTED_MODULE_2__.MigrationDataUploadComponent, _file_report_file_report_component__WEBPACK_IMPORTED_MODULE_3__.FileReportComponent, _ingestion_report_ingestion_report_component__WEBPACK_IMPORTED_MODULE_4__.IngestionReportComponent, _mig_consolidated_report_mig_consolidated_report_component__WEBPACK_IMPORTED_MODULE_5__.MigConsolidatedReportComponent, _migration_report_migration_report_component__WEBPACK_IMPORTED_MODULE_6__.MigrationReportComponent, _record_data_record_data_component__WEBPACK_IMPORTED_MODULE_7__.RecordDataComponent, _validation_report_validation_report_component__WEBPACK_IMPORTED_MODULE_8__.ValidationReportComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9221:
/*!************************************************************************************!*\
  !*** ./src/app/migration/migration-data-upload/migration-data-upload.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MigrationDataUploadComponent": () => (/* binding */ MigrationDataUploadComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commons/services/utilities.service */ 5810);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _commons_services_migration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../commons/services/migration.service */ 9128);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_radiobutton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/radiobutton */ 9902);
/* harmony import */ var primeng_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/divider */ 1154);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-dropzone */ 2522);















const _c0 = ["documentsData"];
const _c1 = function () {
  return {
    "required": true,
    "read-only": false
  };
};
function MigrationDataUploadComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20)(1, "div", 43)(2, "div", 3)(3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Migration Base Location ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5)(6, "span", 44)(7, "input", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MigrationDataUploadComponent_div_47_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r13.sharedLocation = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MigrationDataUploadComponent_div_47_Template_i_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.getDocumentsFromSharedPath());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx_r5.sharedLocation);
  }
}
function MigrationDataUploadComponent_ng_template_52_span_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 55)(1, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MigrationDataUploadComponent_ng_template_52_span_7_Template_i_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.deleteDocument());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function MigrationDataUploadComponent_ng_template_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 48)(1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 51, 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function MigrationDataUploadComponent_ng_template_52_Template_input_input_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);
      const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](51);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r6.filterGlobal(_r16.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MigrationDataUploadComponent_ng_template_52_span_7_Template, 2, 0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Total Records: ", ctx_r7.dataFiles.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.uplType == "FileUpload");
  }
}
function MigrationDataUploadComponent_ng_template_53_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-sortIcon", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSortableColumn", col_r24.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r24.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", col_r24.field);
  }
}
function MigrationDataUploadComponent_ng_template_53_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "th", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MigrationDataUploadComponent_ng_template_53_th_2_Template, 3, 3, "th", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columns_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", columns_r22);
  }
}
function MigrationDataUploadComponent_ng_template_54_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r29 = ctx.$implicit;
    const rowData_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("pTooltip", col_r29.type == "datetime" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 2, rowData_r25[col_r29.field], "dd/MM/yyyy h:mm:ss") : col_r29.type == "date" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 5, rowData_r25[col_r29.field], "dd/MM/yyyy") : rowData_r25[col_r29.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r29.type == "date" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 8, rowData_r25[col_r29.field], "dd/MM/yyyy") : rowData_r25[col_r29.field], " ");
  }
}
function MigrationDataUploadComponent_ng_template_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 61)(1, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-tableCheckbox", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MigrationDataUploadComponent_ng_template_54_ng_template_3_Template, 5, 11, "ng-template", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rowData_r25 = ctx.$implicit;
    const columns_r26 = ctx.columns;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", rowData_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", columns_r26);
  }
}
function MigrationDataUploadComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 38)(1, "div", 6)(2, "ngx-dropzone", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function MigrationDataUploadComponent_div_55_Template_ngx_dropzone_change_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r31.onSelect($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ngx-dropzone-label", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Drag & Drop ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " or ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Click to add files here.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
}
function MigrationDataUploadComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p-button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("label", ctx_r11.updValBtnName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("pTooltip", "Click to ", ctx_r11.updValBtnName, " data");
  }
}
const _c2 = function () {
  return {
    width: "100%"
  };
};
const _c3 = function () {
  return ["FileName"];
};
class MigrationDataUploadComponent {
  constructor(utilService, datePipe, confirmationService, migService) {
    this.utilService = utilService;
    this.datePipe = datePipe;
    this.confirmationService = confirmationService;
    this.migService = migService;
    this.entityNames = [];
    this.dataEntityName = "";
    this.updateRecords = 'Yes';
    this.ignoreDuplicates = false;
    this.uploadType = 'SharedLocation';
    this.sharedLocation = "";
    this.uploadedFiles = [];
    this.dataFiles = [];
    this.docDataCols = [];
    this.uplType = 'SharedLocation';
    this.updBtnName = 'Ingest';
    this.updValBtnName = 'Ingest & Validate';
    this.selectedDocs = [];
  }
  ngOnInit() {
    this.utilService.clearBreadcrumb();
    this.getSharedFilePath();
    this.loadEntities();
    this.docDataCols = [{
      field: "FileName",
      label: "Name",
      type: "string"
    }, {
      field: "FileDate",
      label: "Document Date",
      type: "date"
    }];
  }
  loadEntities() {
    this.migService.getMigrationEntities(this.getEntitiesSuccessHandler, this.errorHandler, this);
  }
  getEntitiesSuccessHandler(data, prms) {
    if (!data.entity.length) {
      prms.entityNames.push({
        label: data.entity.entityDescription,
        value: lodash__WEBPACK_IMPORTED_MODULE_0__.toUpper(data.entity.entityName)
      });
    } else if (data.entity.length > 0) {
      data.entity.forEach(ent => {
        prms.entityNames.push({
          label: ent.entityDescription,
          value: lodash__WEBPACK_IMPORTED_MODULE_0__.toUpper(ent.entityName)
        });
      });
    }
  }
  getDocumentsFromSharedPath() {
    if (this.utilService.isEmpty(this.sharedLocation)) {
      this.utilService.alert('error', 'Error', 'Please enter a shared path to retrieve documents!!', false);
    } else if (this.utilService.isEmpty(this.dataEntityName)) {
      this.utilService.alert('error', 'Error', 'Please select an entity!!', false);
    } else {
      this.migService.getSharedFiles(this.dataEntityName, this.sharedLocation, this.getSharedFileSuccessHandler, this.errorHandler, this);
    }
  }
  getSharedFileSuccessHandler(data, prms) {
    prms.dataFiles = [];
    if (data.FILE_DETAILS) {
      if (!data.FILE_DETAILS.length) {
        prms.dataFiles.push(data.FILE_DETAILS);
      } else if (data.FILE_DETAILS.length > 0) {
        data.FILE_DETAILS.forEach(file => {
          prms.dataFiles.push(file);
        });
      }
    } else {
      prms.utilService.alert('error', 'Error', 'No files found for the selected entity in the location!!', false);
    }
    prms.documentsData.reset();
  }
  getSharedFilePath() {
    this.migService.getSharedFilePath(this.sharedFilePathSuccessHandler, this.errorHandler, this);
  }
  sharedFilePathSuccessHandler(data, prms) {
    if (data) {
      prms.sharedLocation = data.Value;
    }
  }
  serviceErrorHandler(response, status, errorText, prms) {
    prms.curComp.utilService.alert('error', 'Error', 'Service error, please contact administrator!!', false);
  }
  errorHandler(response, prms) {
    prms.utilService.alert('error', 'Error', 'Service error, please contact administrator!!', false);
  }
  onSelect(docData) {
    let aFiles = [];
    let rFiles = [];
    this.dataFiles = [];
    aFiles.push(...docData.addedFiles);
    rFiles.push(...docData.rejectedFiles);
    if (rFiles.length > 0) {
      let fNames = '';
      rFiles.forEach(fl => {
        fNames += fl.name + ",";
      });
      fNames = fNames.substring(0, fNames.length - 1);
      this.utilService.alert('error', 'Unsupported file format', 'Cannot upload files - ' + fNames + '. Please upload xml files only!!', false);
    }
    if (aFiles.length > 0) {
      aFiles.forEach(fl => {
        fl.updatedName = fl.name.substring(0, lodash__WEBPACK_IMPORTED_MODULE_0__.lastIndexOf(fl.name, '.')) + "_" + Date.now() + fl.name.substring(lodash__WEBPACK_IMPORTED_MODULE_0__.lastIndexOf(fl.name, '.'), fl.name.length);
        this.uploadedFiles.push(fl);
      });
    }
    if (!this.utilService.isEmpty(this.dataEntityName)) {
      if (this.uploadedFiles.length > 0) {
        this.uploadedFiles.forEach(file => {
          let doc = {
            FileName: file.updatedName,
            FileDate: this.datePipe.transform(file.lastModifiedDate, "yyyy-MM-dd'T'hh:mm:ss"),
            FileSize: file.size,
            FileType: file.type
          };
          let reader = new FileReader();
          reader.onload = e => {
            let TYPED_ARRAY = new Uint8Array(e.target.result);
            const STRING_CHAR = TYPED_ARRAY.reduce((data, byte) => {
              return data + String.fromCharCode(byte);
            }, '');
            let base64String = btoa(STRING_CHAR);
            doc.Base64String = base64String;
          };
          reader.readAsArrayBuffer(file);
          this.dataFiles.push(doc);
        });
      }
    } else {
      this.dataFiles = [];
      this.uploadedFiles = [];
      aFiles = [];
      rFiles = [];
      this.utilService.alert('error', 'Error', 'Please select an entity!!', false);
    }
  }
  deleteDocument() {
    if (this.selectedDocs.length > 0) {
      this.selectedDocs.forEach(document => {
        let docIndex = lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.dataFiles, function (doc) {
          return doc.FileName == document.File.FileName;
        });
        if (docIndex != -1) {
          this.dataFiles.splice(docIndex, 1);
          this.uploadedFiles.splice(docIndex, 1);
        }
      });
      this.selectedDocs = [];
    } else {
      this.utilService.alert('error', 'Error', 'Please select document(s) to delete!!', false);
    }
  }
  onDocumentSelected(selectedDoc) {
    if (this.uplType == 'SharedLocation') {
      let doc = {
        FileName: selectedDoc.data.FileName,
        FilePath: selectedDoc.data.FilePath,
        FileType: selectedDoc.data.FileType
      };
      this.selectedDocs.push({
        File: doc
      });
    } else {
      let doc = {
        FileName: selectedDoc.data.FileName,
        FilePath: this.sharedLocation + "\\" + this.dataEntityName,
        FileContent: selectedDoc.data.Base64String,
        FileType: 'XML'
      };
      this.selectedDocs.push({
        File: doc
      });
    }
  }
  onDocumentUnselected(unselectedDoc) {
    let docIndex = lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.selectedDocs, function (doc) {
      return doc.File.FileName == unselectedDoc.data.FileName;
    });
    if (docIndex != -1) {
      this.selectedDocs.splice(docIndex, 1);
    }
  }
  uploadData() {
    if (this.uplType == 'SharedLocation') {
      if (this.selectedDocs.length > 0) {
        let entName = this.dataEntityName;
        let entityDescription = this.entityNames[lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.entityNames, function (ent) {
          return ent.value == entName;
        })].label;
        let req = {
          EntityName: entName,
          IgnoreDuplicate: this.updateRecords == 'Yes' ? 'No' : 'Yes',
          EntityDescription: entityDescription,
          Files: this.selectedDocs
        };
      } else {
        this.utilService.alert("error", "Error", "Please select document(s) to ingest!!", false);
      }
    } else {
      if (this.selectedDocs.length > 0) {
        let entName = this.dataEntityName;
        let entityDescription = this.entityNames[lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.entityNames, function (ent) {
          return ent.value == entName;
        })].label;
        let req = {
          EntityName: entName,
          IgnoreDuplicate: this.updateRecords == 'Yes' ? 'No' : 'Yes',
          EntityDescription: entityDescription,
          Files: this.selectedDocs
        };
      } else {
        this.utilService.alert("error", "Error", "Please select document(s) to upload!!", false);
      }
    }
  }
  uploadFileSuccessHandler(data, prms) {
    prms.utilService.alert("success", "Success", "Ingestion initiated, please check data ingestion report for updates!!");
    prms.dataEntityName = "";
    prms.selectedDocs = [];
    prms.uploadedFiles = [];
    prms.dataFiles = [];
  }
  uploadSharedFileSuccessHandler(data, prms) {
    if (data) {
      if (data.text == 'Success') {
        prms.utilService.alert("success", "Success", "Ingestion initiated, please check data ingestion report for updates!!");
        prms.dataEntityName = "";
        prms.selectedDocs = [];
        prms.uploadedFiles = [];
        prms.dataFiles = [];
      }
    }
  }
  onUploadTypeChange() {
    if (this.dataFiles.length > 0) {
      this.confirmationService.confirm({
        message: 'Changing the upload type will clear the existing documents.Do you want to proceed?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.uploadedFiles = [];
          this.dataFiles = [];
          this.uplType = this.uploadType;
          this.documentsData.reset();
        },
        reject: () => {
          this.uploadType = this.uplType;
        }
      });
      if (this.uplType == 'SharedLocation') {
        this.updBtnName = 'Ingest';
        this.updValBtnName = 'Ingest & Validate';
      } else {
        this.updBtnName = 'Upload & Ingest';
        this.updValBtnName = 'Upload & Validate';
      }
    } else {
      this.uploadedFiles = [];
      this.dataFiles = [];
      this.uplType = this.uploadType;
      if (this.uplType == 'SharedLocation') {
        this.updBtnName = 'Ingest';
        this.updValBtnName = 'Ingest & Validate';
      } else {
        this.updBtnName = 'Upload & Ingest';
        this.updValBtnName = 'Upload & Validate';
      }
      this.documentsData.reset();
    }
  }
}
MigrationDataUploadComponent.ɵfac = function MigrationDataUploadComponent_Factory(t) {
  return new (t || MigrationDataUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_5__.ConfirmationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_commons_services_migration_service__WEBPACK_IMPORTED_MODULE_2__.MigrationService));
};
MigrationDataUploadComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MigrationDataUploadComponent,
  selectors: [["migration-data-upload"]],
  viewQuery: function MigrationDataUploadComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.documentsData = _t.first);
    }
  },
  decls: 61,
  vars: 25,
  consts: [[1, "container-fluid", "no-left-padding", "no-right-padding"], [1, "row", "xsm-padding", "lg-card-height", "pm-lt-bk"], [1, "col-lg-6", "no-left-padding"], [1, "col-lg-12", "sm-padding", "no-padding", 3, "ngClass"], [1, "sm-padding", "form-field-header", "no-bottom-padding", "no-top-padding"], [1, "col-lg-12", "xsm-padding"], [1, "xsm-padding"], ["appendTo", "body", "placeholder", "Entity Name", "name", "entityName", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose entity", 1, "custom-search-dropdown", 3, "options", "ngModel", "ngModelChange"], ["entityName", "ngModel"], [1, "col-lg-6"], [1, "row", 2, "padding-top", "30px !important"], [1, "col-lg-2", "sm-padding", "no-padding"], [1, "col-lg-1", "xsm-padding", 2, "padding-top", "0px !important"], [1, "p-field-checkbox"], ["value", "Yes", "name", "uRecords", "inputId", "updRec", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to update records", "tooltipPosition", "bottom", 1, "custom-radio-btn", 3, "ngModel", "ngModelChange"], ["uRecords", "ngModel"], [1, "col-lg-3", "xsm-padding"], [1, "sm-padding", "form-field-header", "no-padding"], ["value", "No", "name", "uRecords", "inputId", "updRec", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to ignore duplicates", "tooltipPosition", "bottom", 1, "custom-radio-btn", 3, "ngModel", "ngModelChange"], [1, "col-lg-6", "no-left-padding", 2, "padding-left", "11px !important"], [1, "row"], [1, "col-lg-4", "xsm-padding", 3, "ngClass"], [1, "xsm-padding", "form-field-header"], [1, "col-lg-1", "xsm-padding", 2, "padding-top", "8px"], [1, "p-field-radiobutton"], ["value", "SharedLocation", "name", "updType", "inputId", "updType", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to fetch files from shared location", "tooltipPosition", "bottom", 1, "custom-radio-btn", 3, "ngModel", "ngModelChange", "onClick"], ["updType", "ngModel"], [1, "col-lg-3", "xsm-padding", 2, "padding-top", "8px"], ["value", "FileUpload", "name", "updType", "inputId", "updType", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to upload file", "tooltipPosition", "bottom", 1, "custom-radio-btn", 3, "ngModel", "ngModelChange", "onClick"], ["class", "row", 4, "ngIf"], [1, "row", "sm-padding", "no-bottom-padding"], [1, "col-lg-12", "sm-padding", "no-padding"], [1, "custom-table", 3, "value", "columns", "paginator", "rows", "responsive", "globalFilterFields", "onRowSelect", "onRowUnselect"], ["documentsData", ""], ["pTemplate", "caption"], ["pTemplate", "header"], ["pTemplate", "body"], ["class", "row xsm-padding", 4, "ngIf"], [1, "row", "xsm-padding"], [1, "col-lg-10", "xsm-padding"], [1, "col-lg-2", "xsm-padding"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "styleClass", "p-button-sm", 1, "custom-btn", 3, "label", "pTooltip", "click"], ["class", "col-lg-2 xsm-padding", "style", "width: 16% !important;", 4, "ngIf"], [1, "col-lg-12"], [1, "p-input-icon-right", 2, "width", "100% !important"], ["disabled", "", "type", "text", "pInputText", "", "name", "sLocation", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter shared location path", "tooltipPosition", "bottom", 2, "font-size", "13px !important", "font-weight", "bold", "color", "#3D0FF6 !important", 3, "ngModel", "ngModelChange"], ["sLocation", "ngModel"], ["tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to retrieve files from base location", "tooltipPosition", "left", 1, "fa", "fa-eye", 2, "cursor", "pointer !important", 3, "click"], [1, "table-header", 2, "text-align", "left"], [1, "p-input-icon-right", 2, "width", "30%"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search", 1, "xsm-pm-border", "sm-font", 2, "width", "100%", "height", "30px", "font-size", "12px !important", 3, "input"], ["textInput", ""], [2, "width", "50%", "padding-left", "40px", "font-size", "14px !important", "font-weight", "bold !important"], ["style", "width: 54%;", "class", "xsm-margin-bottom p-input-icon-right pointer", 4, "ngIf"], [1, "xsm-margin-bottom", "p-input-icon-right", "pointer", 2, "width", "54%"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to delete file", 1, "fa", "fa-trash", 3, "click"], [2, "width", "50px !important"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [1, "pointer"], [1, "custom-checkbox", 3, "value"], ["ngFor", "", 3, "ngForOf"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", 2, "text-align", "center", 3, "pTooltip"], ["accept", "application/xml,text/xml", 2, "height", "120px", 3, "change"], [2, "font-size", "13px !important"], [1, "col-lg-2", "xsm-padding", 2, "width", "16% !important"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "styleClass", "p-button-sm", 1, "custom-btn", 3, "label", "pTooltip"]],
  template: function MigrationDataUploadComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, " Entity Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "p-dropdown", 7, 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MigrationDataUploadComponent_Template_p_dropdown_ngModelChange_8_listener($event) {
        return ctx.dataEntityName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9)(11, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 12)(14, "div", 13)(15, "p-radioButton", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MigrationDataUploadComponent_Template_p_radioButton_ngModelChange_15_listener($event) {
        return ctx.updateRecords = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 16)(18, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " Update Records ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 12)(21, "div", 13)(22, "p-radioButton", 18, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MigrationDataUploadComponent_Template_p_radioButton_ngModelChange_22_listener($event) {
        return ctx.updateRecords = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 16)(25, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, " Ignore Duplicates ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 19)(28, "div", 20)(29, "div", 21)(30, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, " Upload Type ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 23)(33, "div", 24)(34, "p-radioButton", 25, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MigrationDataUploadComponent_Template_p_radioButton_ngModelChange_34_listener($event) {
        return ctx.uploadType = $event;
      })("onClick", function MigrationDataUploadComponent_Template_p_radioButton_onClick_34_listener() {
        return ctx.onUploadTypeChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 27)(37, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, " Shared Location ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 23)(40, "div", 24)(41, "p-radioButton", 28, 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MigrationDataUploadComponent_Template_p_radioButton_ngModelChange_41_listener($event) {
        return ctx.uploadType = $event;
      })("onClick", function MigrationDataUploadComponent_Template_p_radioButton_onClick_41_listener() {
        return ctx.onUploadTypeChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 27)(44, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, " File Upload ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "p-divider");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](47, MigrationDataUploadComponent_div_47_Template, 10, 3, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 30)(49, "div", 31)(50, "p-table", 32, 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onRowSelect", function MigrationDataUploadComponent_Template_p_table_onRowSelect_50_listener($event) {
        return ctx.onDocumentSelected($event);
      })("onRowUnselect", function MigrationDataUploadComponent_Template_p_table_onRowUnselect_50_listener($event) {
        return ctx.onDocumentUnselected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](52, MigrationDataUploadComponent_ng_template_52_Template, 8, 2, "ng-template", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](53, MigrationDataUploadComponent_ng_template_53_Template, 3, 1, "ng-template", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](54, MigrationDataUploadComponent_ng_template_54_Template, 4, 2, "ng-template", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](55, MigrationDataUploadComponent_div_55_Template, 9, 0, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 40)(59, "p-button", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MigrationDataUploadComponent_Template_p_button_click_59_listener() {
        return ctx.uploadData();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, MigrationDataUploadComponent_div_60_Template, 2, 2, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](21, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.entityNames)("ngModel", ctx.dataEntityName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.updateRecords);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.updateRecords);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](22, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.uploadType);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.uploadType);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.uplType == "SharedLocation");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](23, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.dataFiles)("columns", ctx.docDataCols)("paginator", true)("rows", 5)("responsive", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](24, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.uplType == "FileUpload");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("label", ctx.updBtnName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("pTooltip", "Click to ", ctx.updBtnName, " data");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", false);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_5__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_8__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_8__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_8__.TableCheckbox, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.Tooltip, primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__.Dropdown, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, primeng_radiobutton__WEBPACK_IMPORTED_MODULE_12__.RadioButton, primeng_divider__WEBPACK_IMPORTED_MODULE_13__.Divider, ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__.NgxDropzoneComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_14__.NgxDropzoneLabelDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2291:
/*!**************************************************************************!*\
  !*** ./src/app/migration/migration-report/migration-report.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MigrationReportComponent": () => (/* binding */ MigrationReportComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commons/services/utilities.service */ 5810);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _commons_services_migration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../commons/services/migration.service */ 9128);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/sidebar */ 4179);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/tag */ 3042);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/panel */ 4266);



















const _c0 = ["columnFilterModal"];
const _c1 = ["migrationData"];
function MigrationReportComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Search Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function MigrationReportComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 33, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function MigrationReportComponent_ng_template_32_Template_input_input_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](31);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r6.filterGlobal(_r12.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 36)(8, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MigrationReportComponent_ng_template_32_Template_i_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r15.refreshData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 38)(10, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MigrationReportComponent_ng_template_32_Template_i_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r16.deleteEntry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 38)(12, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MigrationReportComponent_ng_template_32_Template_i_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.migrateEntry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 38)(14, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MigrationReportComponent_ng_template_32_Template_i_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.openSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 38)(16, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MigrationReportComponent_ng_template_32_Template_i_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](36);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.openModal(_r10, "md-modal"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Total Records: ", ctx_r7.migData.length, " ");
  }
}
function MigrationReportComponent_ng_template_33_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-sortIcon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSortableColumn", col_r22.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r22.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", col_r22.field);
  }
}
function MigrationReportComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "th", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MigrationReportComponent_ng_template_33_th_2_Template, 3, 3, "th", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columns_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", columns_r20);
  }
}
function MigrationReportComponent_ng_template_34_ng_template_3_td_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const rowData_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("pTooltip", col_r27.type == "datetime" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 2, rowData_r23[col_r27.field], "dd/MM/yyyy h:mm:ss") : col_r27.type == "date" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 5, rowData_r23[col_r27.field], "dd/MM/yyyy") : rowData_r23[col_r27.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r27.type == "date" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 8, rowData_r23[col_r27.field], "dd/MM/yyyy") : rowData_r23[col_r27.field], " ");
  }
}
function MigrationReportComponent_ng_template_34_ng_template_3_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-tag", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const rowData_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("pTooltip", col_r27.type == "datetime" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 2, rowData_r23[col_r27.field], "dd/MM/yyyy h:mm:ss") : col_r27.type == "date" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 5, rowData_r23[col_r27.field], "dd/MM/yyyy") : rowData_r23[col_r27.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", rowData_r23[col_r27.field]);
  }
}
function MigrationReportComponent_ng_template_34_ng_template_3_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MigrationReportComponent_ng_template_34_ng_template_3_td_2_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37);
      const rowData_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r35.viewFileReport(rowData_r23));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const rowData_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("pTooltip", "", rowData_r23[col_r27.field], " - Click to open total file report");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", rowData_r23[col_r27.field], " ");
  }
}
function MigrationReportComponent_ng_template_34_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MigrationReportComponent_ng_template_34_ng_template_3_td_0_Template, 5, 11, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MigrationReportComponent_ng_template_34_ng_template_3_td_1_Template, 4, 8, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MigrationReportComponent_ng_template_34_ng_template_3_td_2_Template, 2, 2, "td", 52);
  }
  if (rf & 2) {
    const col_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", col_r27.field != "FILE_NAME" && col_r27.field != "ENTITY_DESCRIPTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", col_r27.field == "ENTITY_DESCRIPTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", col_r27.field == "FILE_NAME");
  }
}
function MigrationReportComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 47)(1, "td", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-tableRadioButton", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MigrationReportComponent_ng_template_34_ng_template_3_Template, 3, 3, "ng-template", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rowData_r23 = ctx.$implicit;
    const columns_r24 = ctx.columns;
    const i_r25 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", rowData_r23)("index", i_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", columns_r24);
  }
}
function MigrationReportComponent_ng_template_35_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 69)(1, "div", 59)(2, "div", 70)(3, "div", 71)(4, "p-checkbox", 72, 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function MigrationReportComponent_ng_template_35_ng_template_11_Template_p_checkbox_onChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r45);
      const oColumn_r41 = restoredCtx.$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r44.onOtherColumnSelect($event, oColumn_r41));
    })("ngModelChange", function MigrationReportComponent_ng_template_35_ng_template_11_Template_p_checkbox_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r45);
      const oColumn_r41 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](oColumn_r41.isSelected = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 74)(7, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const oColumn_r41 = ctx.$implicit;
    const i_r42 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "allColumn_", i_r42, "")("name", "allColumnName_", i_r42, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("binary", true)("ngModel", oColumn_r41.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", oColumn_r41.label, " ");
  }
}
const _c2 = function () {
  return {
    width: "100%",
    height: "250px"
  };
};
function MigrationReportComponent_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 57)(1, "div", 58)(2, "div", 59)(3, "div", 60)(4, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Column Chooser");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 62)(7, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MigrationReportComponent_ng_template_35_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r47.hideModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 64)(9, "p-scrollPanel", 65)(10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, MigrationReportComponent_ng_template_35_ng_template_11_Template, 9, 5, "ng-template", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 66)(13, "p-button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MigrationReportComponent_ng_template_35_Template_p_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r49.addNewColumns());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p-button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MigrationReportComponent_ng_template_35_Template_p_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r48);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r50.hideModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r11.otherColumns);
  }
}
const _c3 = function () {
  return {
    width: "100%",
    height: "625px"
  };
};
const _c4 = function () {
  return {
    width: "100%"
  };
};
const _c5 = function () {
  return ["ENTITY_DESCRIPTION", "FILE_NAME", "UPLOADED_BY", "FILE_STATUS", "TOTAL_COUNT", "UPLOAD_SUCCESS_COUNT", "UPLOAD_ERROR_COUNT", "VALIDATE_SUCCESS_COUNT", "VALIDATE_ERROR_COUNT", "MIGRATE_SUCCESS_COUNT", "MIGRATE_ERROR_COUNT"];
};
class MigrationReportComponent {
  constructor(utilService, modalService, migService, datePipe) {
    this.utilService = utilService;
    this.modalService = modalService;
    this.migService = migService;
    this.datePipe = datePipe;
    this.migData = [];
    this.migDataCols = [];
    this.displayFilters = false;
    this.filterEntityName = "";
    this.entityNames = [];
    this.todaysDate = new Date();
    this.usersList = [];
    this.filterUploadedBy = "";
    this.filterFileName = "";
    this.selectedIndex = -1;
    this.otherColumns = [];
    this.otherColumnsData = [];
    this.showSpinner = false;
  }
  ngOnInit() {
    if (this.clearMenu) this.utilService.clearBreadcrumb();
    this.resetTableCols();
    this.otherColumns = [{
      field: "FILE_STATUS",
      label: "Status",
      type: "string",
      isSelected: false
    }, {
      field: "UPLOAD_SUCCESS_COUNT",
      label: "Upload Success",
      type: "string"
    }, {
      field: "VALIDATE_SUCCESS_COUNT",
      label: "Validation Success",
      type: "string"
    }, {
      field: "VALIDATE_ERROR_COUNT",
      label: "Validation Fail",
      type: "string"
    }];
    this.refreshData();
  }
  refreshData() {
    this.utilService.clearBreadcrumb();
    this.showSpinner = true;
    this.migService.getReportDetails('MIGRATION', this.getReportSuccessHandler, this.errorHandler, this);
  }
  getReportSuccessHandler(data, prms) {
    prms.migData = [];
    if (data.tuple) {
      if (!data.tuple.length) {
        prms.migData.push(data.tuple.old.SIW_JOB_FILES);
      } else if (data.tuple.length > 0) {
        data.tuple.forEach(tp => {
          prms.migData.push(tp.old.SIW_JOB_FILES);
        });
      }
    }
    prms.showSpinner = false;
  }
  openSearch() {
    this.displayFilters = true;
    this.loadEntities();
    this.loadUsersList();
  }
  loadEntities() {
    this.migService.getMigrationEntities(this.getEntitiesSuccessHandler, this.errorHandler, this);
  }
  getEntitiesSuccessHandler(data, prms) {
    if (!data.entity.length) {
      prms.entityNames.push({
        label: data.entity.entityDescription,
        value: lodash__WEBPACK_IMPORTED_MODULE_0__.toUpper(data.entity.entityName)
      });
    } else if (data.entity.length > 0) {
      data.entity.forEach(ent => {
        prms.entityNames.push({
          label: ent.entityDescription,
          value: lodash__WEBPACK_IMPORTED_MODULE_0__.toUpper(ent.entityName)
        });
      });
    }
  }
  loadUsersList() {
    this.migService.getMigrationAdminUsers(this.getMigrationAdminUsersSuccessHandler, this.errorHandler, this);
  }
  getMigrationAdminUsersSuccessHandler(data, prms) {
    prms.usersList = [];
    if (data.USER_DETAILS) {
      if (!data.USER_DETAILS.length) {
        prms.usersList.push({
          label: data.USER_DETAILS.USER_NAME,
          value: data.USER_DETAILS.USER_ID
        });
      } else if (data.USER_DETAILS.length > 0) {
        data.USER_DETAILS.forEach(user => {
          prms.usersList.push({
            label: user.USER_NAME,
            value: user.USER_ID
          });
        });
      }
    }
  }
  getFilteredSearch() {
    this.displayFilters = false;
    this.showSpinner = true;
    let FILTER_PARAMS = [];
    let param = {};
    if (!this.utilService.isEmpty(this.filterEntityName)) {
      param = {
        FILTER_PARAM: {
          PARAM_NAME: 'EntityName',
          PARAM_VALUE: "'" + this.filterEntityName + "'",
          PARAM_OP: 'EQ'
        }
      };
      FILTER_PARAMS.push(param);
    }
    if (!this.utilService.isEmpty(this.filterFileName)) {
      param = {
        FILTER_PARAM: {
          PARAM_NAME: 'FileName',
          PARAM_VALUE: "'" + this.filterFileName + "'",
          PARAM_OP: 'EQ'
        }
      };
      FILTER_PARAMS.push(param);
    }
    if (!this.utilService.isEmpty(this.filterUploadedBy)) {
      param = {
        FILTER_PARAM: {
          PARAM_NAME: 'UploadedBy',
          PARAM_VALUE: "'" + this.filterUploadedBy + "'",
          PARAM_OP: 'EQ'
        }
      };
      FILTER_PARAMS.push(param);
    }
    if (!this.utilService.isEmpty(this.filterFromDate)) {
      param = {
        FILTER_PARAM: {
          PARAM_NAME: 'FromDate',
          PARAM_VALUE: "CAST('" + this.datePipe.transform(this.filterFromDate, "yyyy-MM-dd") + "' AS DATE)",
          PARAM_OP: 'GTEQ'
        }
      };
      FILTER_PARAMS.push(param);
    }
    if (!this.utilService.isEmpty(this.filterToDate)) {
      let newToDate = new Date(this.filterToDate);
      newToDate.setDate(newToDate.getDate() + 1);
      param = {
        FILTER_PARAM: {
          PARAM_NAME: 'ToDate',
          PARAM_VALUE: "CAST('" + this.datePipe.transform(newToDate, "yyyy-MM-dd") + "' AS DATE)",
          PARAM_OP: 'LT'
        }
      };
      FILTER_PARAMS.push(param);
    }
    this.migService.getFilteredReportDetails('MIGRATION', FILTER_PARAMS, this.getReportSuccessHandler, this.errorHandler, this);
  }
  onRowSelected(selectedDoc) {
    this.selectedIndex = selectedDoc.index;
  }
  onRowUnselected(unselectedDoc) {
    this.selectedIndex = -1;
  }
  deleteEntry() {
    if (this.selectedIndex != -1) {
      let req = {
        entityName: this.migData[this.selectedIndex].ENTITY,
        jobFileId: this.migData[this.selectedIndex].JOB_FILES_ID,
        tableId: ''
      };
    } else {
      this.utilService.alert('error', 'Error', 'Please select a file to delete!!', false);
    }
  }
  migrateEntry() {
    if (this.selectedIndex != -1) {
      let req = {
        EntityName: this.migData[this.selectedIndex].ENTITY,
        JobFileId: this.migData[this.selectedIndex].JOB_FILES_ID,
        TableId: ''
      };
    } else {
      this.utilService.alert('error', 'Error', 'Please select a file to migrate!!', false);
    }
  }
  deleteDataSuccessHandler(data, prms) {
    if (data) {
      prms.utilService.alert("success", "Success", "File data deleted successfully!!");
      prms.refreshData();
    }
  }
  migrateDataSuccessHandler(data, prms) {
    if (data) {
      prms.utilService.alert("success", "Success", "Migration initiated, please refresh for updates!!");
      prms.refreshData();
    }
  }
  viewFileReport(data) {
    let fileName = "";
    if (data.FILE_NAME.length > 60) {
      fileName = data.FILE_NAME.substring(0, 60) + "...";
    } else {
      fileName = data.FILE_NAME;
    }
    this.utilService.clearBreadcrumb();
    this.utilService.transferFileData(data);
    this.utilService.setFileReportSource('MIGRATION_REPORT');
    this.utilService.pushToBreadcrumb('Migration Report', 'fa fa-database', '', null, 'PUSH_TO_MENU', 'MIGRATION_REPORT', 'custom-menu');
    this.utilService.pushToBreadcrumb(fileName, 'fa fa-files-o', '', null, 'DASHBOARD_RELOAD', 'FILE_REPORT', 'custom-active-menu');
  }
  openModal(template, cssClass) {
    this.modalRef = this.modalService.show(template, {
      class: cssClass,
      keyboard: false,
      backdrop: true,
      ignoreBackdropClick: true
    });
  }
  hideModal() {
    this.modalRef.hide();
  }
  onOtherColumnSelect(selectData, rowData) {
    if (selectData.checked) {
      let cIndex = lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.otherColumnsData, function (col) {
        return col.field == rowData.field;
      });
      if (cIndex == -1) {
        this.otherColumnsData.push(rowData);
      }
    } else {
      let cIndex = lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.otherColumnsData, function (col) {
        return col.field == rowData.field;
      });
      if (cIndex != -1) {
        this.otherColumnsData.splice(cIndex, 1);
      }
    }
  }
  addNewColumns() {
    this.hideModal();
    this.resetTableCols();
    this.otherColumnsData.forEach(oCol => {
      let cIndex = lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.migDataCols, function (col) {
        return col.field == oCol.field;
      });
      if (cIndex == -1) {
        this.migDataCols.push(oCol);
      }
    });
  }
  resetTableCols() {
    this.migDataCols = [{
      field: "ENTITY_DESCRIPTION",
      label: "Entity Name",
      type: "string"
    }, {
      field: "FILE_NAME",
      label: "File Name",
      type: "string"
    }, {
      field: "UPLOADED_BY",
      label: "Uploaded By",
      type: "string"
    }, {
      field: "UPLOADED_ON",
      label: "Uploaded On",
      type: "date"
    }, {
      field: "MIGRATE_SUCCESS_COUNT",
      label: "Migration Success",
      type: "string"
    }, {
      field: "MIGRATE_ERROR_COUNT",
      label: "Migration Fail",
      type: "string"
    }, {
      field: "TOTAL_COUNT",
      label: "Total Count",
      type: "string"
    }];
  }
  serviceErrorHandler(response, status, errorText, prms) {
    prms.curComp.utilService.alert('error', 'Error', 'Service error, please contact administrator!!', false);
  }
  errorHandler(response, prms) {
    prms.utilService.alert('error', 'Error', 'Service error, please contact administrator!!', false);
  }
}
MigrationReportComponent.ɵfac = function MigrationReportComponent_Factory(t) {
  return new (t || MigrationReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_commons_services_migration_service__WEBPACK_IMPORTED_MODULE_2__.MigrationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe));
};
MigrationReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: MigrationReportComponent,
  selectors: [["migration-report"]],
  viewQuery: function MigrationReportComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.columnFilterModal = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.migrationData = _t.first);
    }
  },
  inputs: {
    clearMenu: "clearMenu"
  },
  decls: 37,
  vars: 25,
  consts: [[1, "container-fluid", "no-left-padding", "no-right-padding"], ["position", "right", 1, "custom-right-sidebar", 3, "visible", "visibleChange"], [1, "row", "no-left-padding", "no-right-padding", "no-top-padding"], [1, "col-lg-12", "xsm-padding", 2, "padding-left", "2px !important"], [1, "custom-search-panel"], ["pTemplate", "header"], [1, "row", "xsm-padding"], [1, "col-lg-5", "xsm-padding", "xsm-margin"], ["appendTo", "body", "placeholder", "Entity Name", "name", "entityName", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose entity", 1, "custom-search-dropdown", 3, "options", "ngModel", "ngModelChange"], ["entityName", "ngModel"], [1, "col-lg-6", "xsm-padding", "xsm-margin"], ["label", "Search", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "right", "pTooltip", "Click to get search results", "styleClass", "p-button-sm", 1, "custom-sr-btn", 3, "click"], ["type", "text", "pInputText", "", "name", "fName", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter file name", "tooltipPosition", "bottom", "placeholder", "File Name", 2, "font-size", "13px !important", 3, "ngModel", "ngModelChange"], ["fName", "ngModel"], ["appendTo", "body", "placeholder", "Uploaded By", "name", "uploadedBy", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose uploaded by", 1, "custom-search-dropdown", 3, "options", "ngModel", "ngModelChange"], ["uploadedBy", "ngModel"], ["inputId", "icon", "dateFormat", "dd/mm/yy", "name", "ftFromDate", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter from date", "placeholder", "From Date", 1, "custom-calendar", 3, "ngModel", "showIcon", "maxDate", "ngModelChange"], ["ftFromDate", "ngModel"], ["inputId", "icon", "dateFormat", "dd/mm/yy", "name", "ftToDate", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter to date", "placeholder", "To Date", 1, "custom-calendar", 3, "ngModel", "showIcon", "maxDate", "ngModelChange"], ["ftToDate", "ngModel"], [1, "row", "sm-padding"], [1, "col-lg-12", "sm-padding", "no-left-padding", "no-right-padding", "no-top-padding"], [1, "xsm-padding", "lg-card-height", "pm-lt-bk"], [1, "custom-scroll"], [1, "custom-table", 3, "value", "columns", "paginator", "rows", "responsive", "globalFilterFields", "onRowSelect", "onRowUnselect"], ["migrationData", ""], ["pTemplate", "caption"], ["pTemplate", "body"], ["columnFilterModal", ""], [1, "col-lg-2", "xsm-padding", "no-left-padding", "no-right-padding", "form-field-header"], [1, "table-header", 2, "text-align", "left"], [1, "p-input-icon-right", 2, "width", "30%"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search", 1, "xsm-pm-border", "sm-font", 2, "width", "100%", "height", "30px", "font-size", "12px !important", 3, "input"], ["textInput", ""], [2, "width", "50%", "padding-left", "40px", "font-size", "14px !important", "font-weight", "bold !important"], [1, "xsm-margin-bottom", "p-input-icon-right", "pointer", 2, "width", "48%"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to refresh data", 1, "fa", "fa-refresh", 2, "padding-right", "15px !important", 3, "click"], [1, "xsm-margin-bottom", "p-input-icon-right", "pointer", 2, "width", "2%"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to delete", 1, "fa", "fa-trash", 2, "padding-right", "10px !important", 3, "click"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to migrate", 1, "fa", "fa-arrow-circle-up", 2, "padding-right", "7px !important", 3, "click"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to open search", 1, "fa", "fa-search-plus", 2, "padding-right", "5px !important", 3, "click"], ["tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose columns", "tooltipPosition", "left", 1, "fa", "fa-cogs", 3, "click"], [2, "width", "50px !important"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [1, "pointer"], [1, "custom-radio-btn", 3, "value", "index"], ["ngFor", "", 3, "ngForOf"], ["style", "text-align:center;", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", 3, "pTooltip", 4, "ngIf"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", 3, "pTooltip", 4, "ngIf"], ["class", "custom-warn-text", "style", "text-decoration: underline !important; cursor: pointer !important;", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "right", 3, "pTooltip", "click", 4, "ngIf"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", 2, "text-align", "center", 3, "pTooltip"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", 3, "pTooltip"], [1, "custom-tag-user", 3, "value"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "right", 1, "custom-warn-text", 2, "text-decoration", "underline !important", "cursor", "pointer !important", 3, "pTooltip", "click"], [1, "app-card"], [1, "modal-action-bar", "right-align"], [1, "row"], [1, "col-lg-10", "modal-header"], [1, "custom-modal-heading"], [1, "col-lg-2", "modal-header"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", 3, "click"], [1, "custom-modl-content"], [1, "custom-scroll", "sm-padding"], [1, "modal-footer"], ["label", "Ok", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to add columns", "styleClass", "p-button-sm", 1, "custom-tertiary-btn", 3, "click"], ["label", "Cancel", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to cancel", "styleClass", "p-button-sm", 1, "custom-tertiary-btn", 3, "click"], [1, "col-lg-12"], [1, "col-lg-1"], [1, "p-field-radiobutton"], [1, "custom-checkbox", 3, "id", "binary", "name", "ngModel", "onChange", "ngModelChange"], ["allColumn", "ngModel"], [1, "col-lg-10", 2, "padding-top", "3px"], [1, "no-padding", "form-field-header"]],
  template: function MigrationReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "p-sidebar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibleChange", function MigrationReportComponent_Template_p_sidebar_visibleChange_1_listener($event) {
        return ctx.displayFilters = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "p-panel", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MigrationReportComponent_ng_template_5_Template, 2, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "p-dropdown", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MigrationReportComponent_Template_p_dropdown_ngModelChange_8_listener($event) {
        return ctx.filterEntityName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10)(11, "p-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MigrationReportComponent_Template_p_button_click_11_listener() {
        return ctx.getFilteredSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6)(13, "div", 7)(14, "input", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MigrationReportComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.filterFileName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 7)(17, "p-dropdown", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MigrationReportComponent_Template_p_dropdown_ngModelChange_17_listener($event) {
        return ctx.filterUploadedBy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 6)(20, "div", 7)(21, "p-calendar", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MigrationReportComponent_Template_p_calendar_ngModelChange_21_listener($event) {
        return ctx.filterFromDate = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 7)(24, "p-calendar", 18, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function MigrationReportComponent_Template_p_calendar_ngModelChange_24_listener($event) {
        return ctx.filterToDate = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 20)(27, "div", 21)(28, "div", 22)(29, "p-scrollPanel", 23)(30, "p-table", 24, 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onRowSelect", function MigrationReportComponent_Template_p_table_onRowSelect_30_listener($event) {
        return ctx.onRowSelected($event);
      })("onRowUnselect", function MigrationReportComponent_Template_p_table_onRowUnselect_30_listener($event) {
        return ctx.onRowUnselected($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, MigrationReportComponent_ng_template_32_Template, 17, 1, "ng-template", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, MigrationReportComponent_ng_template_33_Template, 3, 1, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, MigrationReportComponent_ng_template_34_Template, 4, 3, "ng-template", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, MigrationReportComponent_ng_template_35_Template, 15, 4, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.displayFilters);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.entityNames)("ngModel", ctx.filterEntityName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filterFileName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.usersList)("ngModel", ctx.filterUploadedBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filterFromDate)("showIcon", true)("maxDate", ctx.todaysDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filterToDate)("showIcon", true)("maxDate", ctx.todaysDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](22, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](23, _c4));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx.migData)("columns", ctx.migDataCols)("paginator", true)("rows", 14)("responsive", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](24, _c5));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_9__.TableRadioButton, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_10__.ScrollPanel, primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__.Tooltip, primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__.Checkbox, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.Dropdown, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_calendar__WEBPACK_IMPORTED_MODULE_15__.Calendar, primeng_sidebar__WEBPACK_IMPORTED_MODULE_16__.Sidebar, primeng_tag__WEBPACK_IMPORTED_MODULE_17__.Tag, primeng_panel__WEBPACK_IMPORTED_MODULE_18__.Panel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6818:
/*!***********************************************!*\
  !*** ./src/app/migration/migration.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MigrationModule": () => (/* binding */ MigrationModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _commons_primeng_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../commons/primeng.module */ 9693);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-dropzone */ 2522);
/* harmony import */ var _migration_dashboard_migration_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./migration-dashboard/migration-dashboard.component */ 5578);
/* harmony import */ var _migration_data_upload_migration_data_upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./migration-data-upload/migration-data-upload.component */ 9221);
/* harmony import */ var _file_report_file_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./file-report/file-report.component */ 322);
/* harmony import */ var _ingestion_report_ingestion_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ingestion-report/ingestion-report.component */ 2920);
/* harmony import */ var _mig_consolidated_report_mig_consolidated_report_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mig-consolidated-report/mig-consolidated-report.component */ 7111);
/* harmony import */ var _migration_report_migration_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./migration-report/migration-report.component */ 2291);
/* harmony import */ var _record_data_record_data_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./record-data/record-data.component */ 4409);
/* harmony import */ var _validation_report_validation_report_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./validation-report/validation-report.component */ 5431);
/* harmony import */ var _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../commons/services/utilities.service */ 5810);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _commons_services_migration_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../commons/services/migration.service */ 9128);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-disable-browser-back-button */ 38);
/* harmony import */ var _commons_services_agc_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../commons/services/agc.service */ 2935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 2560);






















const routes = [{
  path: '',
  component: _migration_dashboard_migration_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.MigrationDashboardComponent
}];
class MigrationModule {}
MigrationModule.ɵfac = function MigrationModule_Factory(t) {
  return new (t || MigrationModule)();
};
MigrationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
  type: MigrationModule,
  bootstrap: [_migration_dashboard_migration_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.MigrationDashboardComponent]
});
MigrationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
  providers: [_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_9__.UtilitiesService, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DatePipe, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__.BsModalService, _commons_services_migration_service__WEBPACK_IMPORTED_MODULE_10__.MigrationService, primeng_api__WEBPACK_IMPORTED_MODULE_15__.ConfirmationService, primeng_api__WEBPACK_IMPORTED_MODULE_15__.MessageService, _commons_services_agc_service__WEBPACK_IMPORTED_MODULE_11__.AgcService, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__.LocationStrategy,
    useClass: _angular_common__WEBPACK_IMPORTED_MODULE_13__.HashLocationStrategy
  }],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _commons_primeng_module__WEBPACK_IMPORTED_MODULE_0__.PrimeNGModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_17__.NgxDropzoneModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule.forChild(routes), angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_19__.BackButtonDisableModule.forRoot({
    preserveScroll: true
  }), _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](MigrationModule, {
    declarations: [_migration_dashboard_migration_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.MigrationDashboardComponent, _migration_data_upload_migration_data_upload_component__WEBPACK_IMPORTED_MODULE_2__.MigrationDataUploadComponent, _file_report_file_report_component__WEBPACK_IMPORTED_MODULE_3__.FileReportComponent, _ingestion_report_ingestion_report_component__WEBPACK_IMPORTED_MODULE_4__.IngestionReportComponent, _mig_consolidated_report_mig_consolidated_report_component__WEBPACK_IMPORTED_MODULE_5__.MigConsolidatedReportComponent, _migration_report_migration_report_component__WEBPACK_IMPORTED_MODULE_6__.MigrationReportComponent, _record_data_record_data_component__WEBPACK_IMPORTED_MODULE_7__.RecordDataComponent, _validation_report_validation_report_component__WEBPACK_IMPORTED_MODULE_8__.ValidationReportComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _commons_primeng_module__WEBPACK_IMPORTED_MODULE_0__.PrimeNGModule, ngx_dropzone__WEBPACK_IMPORTED_MODULE_17__.NgxDropzoneModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, angular_disable_browser_back_button__WEBPACK_IMPORTED_MODULE_19__.BackButtonDisableModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule]
  });
})();

/***/ }),

/***/ 4409:
/*!****************************************************************!*\
  !*** ./src/app/migration/record-data/record-data.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecordDataComponent": () => (/* binding */ RecordDataComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commons/services/utilities.service */ 5810);
/* harmony import */ var _commons_services_migration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../commons/services/migration.service */ 9128);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/panel */ 4266);














function RecordDataComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 25)(1, "div", 26)(2, "div", 27)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.panelHeader);
  }
}
function RecordDataComponent_ng_template_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RecordDataComponent_ng_template_40_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r7.onSave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function RecordDataComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 30)(1, "div", 31)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 11)(5, "div", 12)(6, "input", 32, 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RecordDataComponent_ng_template_43_Template_input_ngModelChange_6_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13);
      const field_r9 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](field_r9.fieldValue = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const field_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", field_r9.fieldDesc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "fName", i_r10, "")("pTooltip", "Click to enter/update ", field_r9.fieldDesc, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", field_r9.fieldValue);
  }
}
const _c0 = function () {
  return {
    "required": false,
    "read-only": true
  };
};
const _c1 = function () {
  return {
    width: "100%"
  };
};
class RecordDataComponent {
  constructor(utilService, migService) {
    this.utilService = utilService;
    this.migService = migService;
    this.modalSubmit = false;
    this.reqSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.dataEntityName = "";
    this.entityNames = [];
    this.fileName = "";
    this.usersList = [];
    this.uploadedBy = "";
    this.fileStatus = "";
    this.fieldInfo = [];
    this.isCollapsed = false;
    this.panelHeader = "";
    this.iFieldAttrs = new Map();
    this.currentEntObj = {};
  }
  ngOnInit() {
    if (this.fileDetails) {
      this.fileName = this.fileDetails.fileData.FILE_NAME;
      this.fileStatus = this.fileDetails.fileData.FILE_STATUS;
    }
    this.loadAttrToIgnore();
    this.loadEntities();
    this.loadUsersList();
    this.panelHeader = "Record Details";
  }
  loadEntities() {
    this.migService.getMigrationEntities(this.getEntitiesSuccessHandler, this.errorHandler, this);
  }
  getEntitiesSuccessHandler(data, prms) {
    if (!data.entity.length) {
      prms.entityNames.push({
        label: data.entity.entityDescription,
        value: lodash__WEBPACK_IMPORTED_MODULE_0__.toUpper(data.entity.entityName)
      });
    } else if (data.entity.length > 0) {
      data.entity.forEach(ent => {
        prms.entityNames.push({
          label: ent.entityDescription,
          value: lodash__WEBPACK_IMPORTED_MODULE_0__.toUpper(ent.entityName)
        });
      });
    }
    prms.dataEntityName = lodash__WEBPACK_IMPORTED_MODULE_0__.toUpper(prms.fileDetails?.fileData?.ENTITY);
    prms.loadFieldInfo();
  }
  loadUsersList() {
    this.migService.getMigrationAdminUsers(this.getMigrationAdminUsersSuccessHandler, this.errorHandler, this);
  }
  getMigrationAdminUsersSuccessHandler(data, prms) {
    prms.usersList = [];
    if (data.USER_DETAILS) {
      if (!data.USER_DETAILS.length) {
        prms.usersList.push({
          label: data.USER_DETAILS.USER_NAME,
          value: data.USER_DETAILS.USER_ID
        });
      } else if (data.USER_DETAILS.length > 0) {
        data.USER_DETAILS.forEach(user => {
          prms.usersList.push({
            label: user.USER_NAME,
            value: user.USER_ID
          });
        });
      }
      prms.uploadedBy = prms.fileDetails?.fileData?.UPLOADED_BY;
    }
  }
  loadFieldInfo() {
    let req = {
      entityName: this.dataEntityName,
      primaryKey: this.rowDetails?.rowData['TableId']
    };
    this.migService.readMigrationDataObject(req, this.readMigrationDataObjectSuccessHandler, this.errorHandler, this);
  }
  readMigrationDataObjectSuccessHandler(data, prms) {
    prms.fieldInfo = [];
    if (data[prms.dataEntityName]) {
      prms.currentEntObj = data[prms.dataEntityName];
      let entObj = data[prms.dataEntityName];
      for (var attr in entObj) {
        if (entObj.hasOwnProperty(attr)) {
          let cIAttrs = prms.iFieldAttrs.get('COMMON');
          let iAttrs = prms.iFieldAttrs.get(prms.dataEntityName);
          if (lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf(cIAttrs, attr) == -1 && lodash__WEBPACK_IMPORTED_MODULE_0__.indexOf(iAttrs, attr) == -1) {
            prms.fieldInfo.push({
              fieldName: attr,
              fieldValue: data[prms.dataEntityName][attr],
              fieldDesc: attr
            });
          }
        }
      }
    }
  }
  onSave() {
    let newObj = lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep(this.currentEntObj);
    let req = {
      tuple: {
        old: {},
        new: {}
      }
    };
    let entName = this.dataEntityName;
    this.fieldInfo.forEach(field => {
      newObj[field.fieldName] = field.fieldValue;
    });
    req.tuple.old[entName] = {};
    req.tuple.old[entName]['TableId'] = this.currentEntObj['TableId'];
    req.tuple.new[entName] = newObj;
  }
  updateMigrationObjectSuccessHandler(data, prms) {
    if (data[prms.dataEntityName]) {
      prms.reqSubmit.emit({
        status: 'SUCCESS'
      });
      prms.utilService.alert('success', 'Success', 'Record details have been updated successfully!!', false);
    }
  }
  onToggle(data) {
    this.isCollapsed = data.collapsed;
    let domObj = document.getElementById('rowPanel');
    domObj?.classList.remove("row-report-scroll");
    domObj?.classList.remove("row-report-scroll-toggle");
    if (this.isCollapsed) {
      domObj?.classList.add("row-report-scroll-toggle");
    } else {
      domObj?.classList.add("row-report-scroll");
    }
  }
  serviceErrorHandler(response, status, errorText, prms) {
    prms.curComp.utilService.alert('error', 'Error', 'Service error, please contact administrator!!', false);
  }
  errorHandler(response, prms) {
    prms.utilService.alert('error', 'Error', 'Service error, please contact administrator!!', false);
  }
  loadAttrToIgnore() {
    this.iFieldAttrs.set('COMMON', ['TableId', 'DMStatus', '@xmlns', 'DMIngestionStatus', 'DMIngestionMessage', 'DMValidationStatus', 'DMValidationMessage', 'DMMigrationStatus', 'DMMigrationMessage', 'DMFileId', 'DMValidationType', 'JobFileId']);
  }
}
RecordDataComponent.ɵfac = function RecordDataComponent_Factory(t) {
  return new (t || RecordDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_commons_services_migration_service__WEBPACK_IMPORTED_MODULE_2__.MigrationService));
};
RecordDataComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: RecordDataComponent,
  selectors: [["record-data"]],
  inputs: {
    modalSubmit: "modalSubmit",
    fileDetails: "fileDetails",
    rowDetails: "rowDetails"
  },
  outputs: {
    reqSubmit: "reqSubmit"
  },
  decls: 44,
  vars: 23,
  consts: [[1, "container-fluid", "no-left-padding", "no-right-padding"], [1, "row", "xsm-padding", "no-top-padding"], [1, "col-lg-12", "sm-padding", "no-top-padding", "no-bottom-padding"], [1, "xsm-padding", "lg-card-height", "pm-lt-bk"], [1, "custom-panel", 3, "toggleable", "onAfterToggle"], ["pTemplate", "header"], [1, "col-lg-12", "xsm-padding", "no-left-padding"], [1, "row", "xsm-padding"], [1, "col-lg-3"], [1, "col-lg-12", "sm-padding", "no-padding", 3, "ngClass"], [1, "sm-padding", "form-field-header", "no-bottom-padding", "no-top-padding"], [1, "col-lg-12", "xsm-padding"], [1, "xsm-padding"], ["appendTo", "body", "name", "entityName", 1, "custom-search-dropdown", 3, "options", "ngModel", "disabled", "ngModelChange"], ["entityName", "ngModel"], [1, "col-lg-3", "no-left-padding"], ["type", "text", "pInputText", "", "name", "fName", 2, "font-size", "13px !important", 3, "ngModel", "disabled", "ngModelChange"], ["fName", "ngModel"], ["appendTo", "body", "name", "uplBy", 1, "custom-search-dropdown", 3, "options", "ngModel", "disabled", "ngModelChange"], ["uplBy", "ngModel"], ["type", "text", "pInputText", "", "name", "fStatus", 2, "font-size", "13px !important", 3, "ngModel", "disabled", "ngModelChange"], ["fStatus", "ngModel"], ["pTemplate", "icons"], ["id", "rowPanel", 1, "row-report-scroll"], ["ngFor", "", 3, "ngForOf"], [1, "col-lg-11", "xsm-padding", "no-left-padding"], [1, "row", "custom-blk-text", "sm-height", "sm-font"], [1, "col-lg-12"], ["pButton", "", "pTooltip", "Click to save", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "bottom", 1, "p-panel-header-icon", "p-link", 3, "click"], [1, "pi", "pi-save"], [1, "col-lg-4", "sm-padding", "no-bottom-padding", "no-top-padding"], [1, "col-lg-12", "sm-padding", "no-padding"], ["type", "text", "pInputText", "", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "bottom", 2, "font-size", "13px !important", 3, "ngModel", "name", "pTooltip", "ngModelChange"], ["fName{{i}}", "ngModel"]],
  template: function RecordDataComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p-panel", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onAfterToggle", function RecordDataComponent_Template_p_panel_onAfterToggle_4_listener($event) {
        return ctx.onToggle($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, RecordDataComponent_ng_template_5_Template, 5, 1, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "div", 8)(9, "div", 9)(10, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Entity Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11)(13, "div", 12)(14, "p-dropdown", 13, 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RecordDataComponent_Template_p_dropdown_ngModelChange_14_listener($event) {
        return ctx.dataEntityName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 15)(17, "div", 9)(18, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " File Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 11)(21, "div", 12)(22, "input", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RecordDataComponent_Template_input_ngModelChange_22_listener($event) {
        return ctx.fileName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 15)(25, "div", 9)(26, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " Uploaded By ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 11)(29, "div", 12)(30, "p-dropdown", 18, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RecordDataComponent_Template_p_dropdown_ngModelChange_30_listener($event) {
        return ctx.uploadedBy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 15)(33, "div", 9)(34, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, " File Status ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 11)(37, "div", 12)(38, "input", 20, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function RecordDataComponent_Template_input_ngModelChange_38_listener($event) {
        return ctx.fileStatus = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, RecordDataComponent_ng_template_40_Template, 2, 0, "ng-template", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "p-scrollPanel", 23)(42, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](43, RecordDataComponent_ng_template_43_Template, 8, 4, "ng-template", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("toggleable", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](18, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.entityNames)("ngModel", ctx.dataEntityName)("disabled", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](19, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.fileName)("disabled", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](20, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.usersList)("ngModel", ctx.uploadedBy)("disabled", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](21, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.fileStatus)("disabled", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](22, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.fieldInfo);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonDirective, primeng_api__WEBPACK_IMPORTED_MODULE_7__.PrimeTemplate, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_8__.ScrollPanel, primeng_tooltip__WEBPACK_IMPORTED_MODULE_9__.Tooltip, primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__.Dropdown, primeng_inputtext__WEBPACK_IMPORTED_MODULE_11__.InputText, primeng_panel__WEBPACK_IMPORTED_MODULE_12__.Panel],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5431:
/*!****************************************************************************!*\
  !*** ./src/app/migration/validation-report/validation-report.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationReportComponent": () => (/* binding */ ValidationReportComponent)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ 2938);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../commons/services/utilities.service */ 5810);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ 1010);
/* harmony import */ var _commons_services_migration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../commons/services/migration.service */ 9128);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 6328);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 4356);
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/table */ 7485);
/* harmony import */ var primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/scrollpanel */ 4250);
/* harmony import */ var primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/tooltip */ 4329);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/checkbox */ 749);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/dropdown */ 8992);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 9906);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/calendar */ 2547);
/* harmony import */ var primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/progressspinner */ 2901);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/sidebar */ 4179);
/* harmony import */ var primeng_tag__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/tag */ 3042);
/* harmony import */ var primeng_panel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/panel */ 4266);




















const _c0 = ["columnFilterModal"];
const _c1 = ["validationData"];
function ValidationReportComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Search Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ValidationReportComponent_p_progressSpinner_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p-progressSpinner", 27);
  }
}
function ValidationReportComponent_p_scrollPanel_30_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 33)(1, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "input", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function ValidationReportComponent_p_scrollPanel_30_ng_template_3_Template_input_input_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](_r10.filterGlobal(_r14.value, "contains"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 39)(8, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidationReportComponent_p_scrollPanel_30_ng_template_3_Template_i_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r17.refreshData());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 41)(10, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidationReportComponent_p_scrollPanel_30_ng_template_3_Template_i_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r18.deleteEntry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 41)(12, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidationReportComponent_p_scrollPanel_30_ng_template_3_Template_i_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r19.validateEntry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 41)(14, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidationReportComponent_p_scrollPanel_30_ng_template_3_Template_i_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r20.migrateEntry());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "span", 41)(16, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidationReportComponent_p_scrollPanel_30_ng_template_3_Template_i_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r21.openSearch());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 41)(18, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidationReportComponent_p_scrollPanel_30_ng_template_3_Template_i_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](32);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.openModal(_r8, "md-modal"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Total Records: ", ctx_r11.valData.length, " ");
  }
}
function ValidationReportComponent_p_scrollPanel_30_ng_template_4_th_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "th", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-sortIcon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("pSortableColumn", col_r25.field);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r25.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("field", col_r25.field);
  }
}
function ValidationReportComponent_p_scrollPanel_30_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "th", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ValidationReportComponent_p_scrollPanel_30_ng_template_4_th_2_Template, 3, 3, "th", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const columns_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", columns_r23);
  }
}
function ValidationReportComponent_p_scrollPanel_30_ng_template_5_ng_template_3_td_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const rowData_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("pTooltip", col_r30.type == "datetime" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 2, rowData_r26[col_r30.field], "dd/MM/yyyy h:mm:ss") : col_r30.type == "date" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 5, rowData_r26[col_r30.field], "dd/MM/yyyy") : rowData_r26[col_r30.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", col_r30.type == "date" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 8, rowData_r26[col_r30.field], "dd/MM/yyyy") : rowData_r26[col_r30.field], " ");
  }
}
function ValidationReportComponent_p_scrollPanel_30_ng_template_5_ng_template_3_td_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "p-tag", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const rowData_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("pTooltip", col_r30.type == "datetime" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](1, 2, rowData_r26[col_r30.field], "dd/MM/yyyy h:mm:ss") : col_r30.type == "date" ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 5, rowData_r26[col_r30.field], "dd/MM/yyyy") : rowData_r26[col_r30.field]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", rowData_r26[col_r30.field]);
  }
}
function ValidationReportComponent_p_scrollPanel_30_ng_template_5_ng_template_3_td_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidationReportComponent_p_scrollPanel_30_ng_template_5_ng_template_3_td_2_Template_td_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r40);
      const rowData_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2).$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r38.viewFileReport(rowData_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const col_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const rowData_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("pTooltip", "", rowData_r26[col_r30.field], " - Click to open total file report");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", rowData_r26[col_r30.field], " ");
  }
}
function ValidationReportComponent_p_scrollPanel_30_ng_template_5_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ValidationReportComponent_p_scrollPanel_30_ng_template_5_ng_template_3_td_0_Template, 5, 11, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ValidationReportComponent_p_scrollPanel_30_ng_template_5_ng_template_3_td_1_Template, 4, 8, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ValidationReportComponent_p_scrollPanel_30_ng_template_5_ng_template_3_td_2_Template, 2, 2, "td", 56);
  }
  if (rf & 2) {
    const col_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", col_r30.field != "FILE_NAME" && col_r30.field != "ENTITY_DESCRIPTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", col_r30.field == "ENTITY_DESCRIPTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", col_r30.field == "FILE_NAME");
  }
}
function ValidationReportComponent_p_scrollPanel_30_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 51)(1, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "p-tableRadioButton", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ValidationReportComponent_p_scrollPanel_30_ng_template_5_ng_template_3_Template, 3, 3, "ng-template", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rowData_r26 = ctx.$implicit;
    const columns_r27 = ctx.columns;
    const i_r28 = ctx.rowIndex;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", rowData_r26)("index", i_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", columns_r27);
  }
}
const _c2 = function () {
  return {
    width: "100%",
    height: "625px"
  };
};
const _c3 = function () {
  return {
    width: "100%"
  };
};
const _c4 = function () {
  return ["ENTITY_DESCRIPTION", "FILE_NAME", "UPLOADED_BY", "FILE_STATUS", "TOTAL_COUNT", "UPLOAD_SUCCESS_COUNT", "UPLOAD_ERROR_COUNT", "VALIDATE_SUCCESS_COUNT", "VALIDATE_ERROR_COUNT"];
};
function ValidationReportComponent_p_scrollPanel_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p-scrollPanel", 28)(1, "p-table", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onRowSelect", function ValidationReportComponent_p_scrollPanel_30_Template_p_table_onRowSelect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r43.onRowSelected($event));
    })("onRowUnselect", function ValidationReportComponent_p_scrollPanel_30_Template_p_table_onRowUnselect_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r44);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r45.onRowUnselected($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ValidationReportComponent_p_scrollPanel_30_ng_template_3_Template, 19, 1, "ng-template", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ValidationReportComponent_p_scrollPanel_30_ng_template_4_Template, 3, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ValidationReportComponent_p_scrollPanel_30_ng_template_5_Template, 4, 3, "ng-template", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r7.valData)("columns", ctx_r7.valDataCols)("paginator", true)("rows", 14)("responsive", true)("globalFilterFields", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c4));
  }
}
function ValidationReportComponent_ng_template_31_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 73)(1, "div", 63)(2, "div", 74)(3, "div", 75)(4, "p-checkbox", 76, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onChange", function ValidationReportComponent_ng_template_31_ng_template_11_Template_p_checkbox_onChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51);
      const oColumn_r47 = restoredCtx.$implicit;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r50.onOtherColumnSelect($event, oColumn_r47));
    })("ngModelChange", function ValidationReportComponent_ng_template_31_ng_template_11_Template_p_checkbox_ngModelChange_4_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r51);
      const oColumn_r47 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](oColumn_r47.isSelected = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 78)(7, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const oColumn_r47 = ctx.$implicit;
    const i_r48 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("id", "allColumn_", i_r48, "")("name", "allColumnName_", i_r48, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("binary", true)("ngModel", oColumn_r47.isSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", oColumn_r47.label, " ");
  }
}
const _c5 = function () {
  return {
    width: "100%",
    height: "250px"
  };
};
function ValidationReportComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 61)(1, "div", 62)(2, "div", 63)(3, "div", 64)(4, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Column Chooser");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 66)(7, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidationReportComponent_ng_template_31_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r53.hideModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 68)(9, "p-scrollPanel", 69)(10, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ValidationReportComponent_ng_template_31_ng_template_11_Template, 9, 5, "ng-template", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 70)(13, "p-button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidationReportComponent_ng_template_31_Template_p_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r54);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r55.addNewColumns());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "p-button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidationReportComponent_ng_template_31_Template_p_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r54);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r56.hideModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r9.otherColumns);
  }
}
class ValidationReportComponent {
  constructor(utilService, modalService, migService, datePipe) {
    this.utilService = utilService;
    this.modalService = modalService;
    this.migService = migService;
    this.datePipe = datePipe;
    this.valData = [];
    this.valDataCols = [];
    this.displayFilters = false;
    this.filterEntityName = "";
    this.entityNames = [];
    this.todaysDate = new Date();
    this.usersList = [];
    this.filterUploadedBy = "";
    this.filterFileName = "";
    this.selectedIndex = -1;
    this.otherColumns = [];
    this.otherColumnsData = [];
    this.showSpinner = false;
  }
  ngOnInit() {
    if (this.clearMenu) this.utilService.clearBreadcrumb();
    this.resetTableCols();
    this.otherColumns = [{
      field: "FILE_STATUS",
      label: "Status",
      type: "string",
      isSelected: false
    }, {
      field: "UPLOAD_SUCCESS_COUNT",
      label: "Upload Success",
      type: "string"
    }];
    this.refreshData();
  }
  refreshData() {
    this.utilService.clearBreadcrumb();
    this.showSpinner = true;
    this.migService.getReportDetails('VALIDATION', this.getReportSuccessHandler, this.errorHandler, this);
  }
  getReportSuccessHandler(data, prms) {
    prms.valData = [];
    if (data.tuple) {
      if (!data.tuple.length) {
        prms.valData.push(data.tuple.old.SIW_JOB_FILES);
      } else if (data.tuple.length > 0) {
        data.tuple.forEach(tp => {
          prms.valData.push(tp.old.SIW_JOB_FILES);
        });
      }
    }
    prms.showSpinner = false;
  }
  openSearch() {
    this.displayFilters = true;
    this.loadEntities();
    this.loadUsersList();
  }
  loadEntities() {
    this.migService.getMigrationEntities(this.getEntitiesSuccessHandler, this.errorHandler, this);
  }
  getEntitiesSuccessHandler(data, prms) {
    if (!data.entity.length) {
      prms.entityNames.push({
        label: data.entity.entityDescription,
        value: lodash__WEBPACK_IMPORTED_MODULE_0__.toUpper(data.entity.entityName)
      });
    } else if (data.entity.length > 0) {
      data.entity.forEach(ent => {
        prms.entityNames.push({
          label: ent.entityDescription,
          value: lodash__WEBPACK_IMPORTED_MODULE_0__.toUpper(ent.entityName)
        });
      });
    }
  }
  loadUsersList() {
    this.migService.getMigrationAdminUsers(this.getMigrationAdminUsersSuccessHandler, this.errorHandler, this);
  }
  getMigrationAdminUsersSuccessHandler(data, prms) {
    prms.usersList = [];
    if (data.USER_DETAILS) {
      if (!data.USER_DETAILS.length) {
        prms.usersList.push({
          label: data.USER_DETAILS.USER_NAME,
          value: data.USER_DETAILS.USER_ID
        });
      } else if (data.USER_DETAILS.length > 0) {
        data.USER_DETAILS.forEach(user => {
          prms.usersList.push({
            label: user.USER_NAME,
            value: user.USER_ID
          });
        });
      }
    }
  }
  getFilteredSearch() {
    this.displayFilters = false;
    this.showSpinner = true;
    let FILTER_PARAMS = [];
    let param = {};
    if (!this.utilService.isEmpty(this.filterEntityName)) {
      param = {
        FILTER_PARAM: {
          PARAM_NAME: 'EntityName',
          PARAM_VALUE: "'" + this.filterEntityName + "'",
          PARAM_OP: 'EQ'
        }
      };
      FILTER_PARAMS.push(param);
    }
    if (!this.utilService.isEmpty(this.filterFileName)) {
      param = {
        FILTER_PARAM: {
          PARAM_NAME: 'FileName',
          PARAM_VALUE: "'" + this.filterFileName + "'",
          PARAM_OP: 'EQ'
        }
      };
      FILTER_PARAMS.push(param);
    }
    if (!this.utilService.isEmpty(this.filterUploadedBy)) {
      param = {
        FILTER_PARAM: {
          PARAM_NAME: 'UploadedBy',
          PARAM_VALUE: "'" + this.filterUploadedBy + "'",
          PARAM_OP: 'EQ'
        }
      };
      FILTER_PARAMS.push(param);
    }
    if (!this.utilService.isEmpty(this.filterFromDate)) {
      param = {
        FILTER_PARAM: {
          PARAM_NAME: 'FromDate',
          PARAM_VALUE: "CAST('" + this.datePipe.transform(this.filterFromDate, "yyyy-MM-dd") + "' AS DATE)",
          PARAM_OP: 'GTEQ'
        }
      };
      FILTER_PARAMS.push(param);
    }
    if (!this.utilService.isEmpty(this.filterToDate)) {
      let newToDate = new Date(this.filterToDate);
      newToDate.setDate(newToDate.getDate() + 1);
      param = {
        FILTER_PARAM: {
          PARAM_NAME: 'ToDate',
          PARAM_VALUE: "CAST('" + this.datePipe.transform(newToDate, "yyyy-MM-dd") + "' AS DATE)",
          PARAM_OP: 'LT'
        }
      };
      FILTER_PARAMS.push(param);
    }
    this.migService.getFilteredReportDetails('VALIDATION', FILTER_PARAMS, this.getReportSuccessHandler, this.errorHandler, this);
  }
  onRowSelected(selectedDoc) {
    this.selectedIndex = selectedDoc.index;
  }
  onRowUnselected(unselectedDoc) {
    this.selectedIndex = -1;
  }
  deleteEntry() {
    if (this.selectedIndex != -1) {
      let req = {
        entityName: this.valData[this.selectedIndex].ENTITY,
        jobFileId: this.valData[this.selectedIndex].JOB_FILES_ID,
        tableId: ''
      };
    } else {
      this.utilService.alert('error', 'Error', 'Please select a file to delete!!', false);
    }
  }
  validateEntry() {
    if (this.selectedIndex != -1) {
      let req = {
        entityName: this.valData[this.selectedIndex].ENTITY,
        jobFileId: this.valData[this.selectedIndex].JOB_FILES_ID,
        tableId: ''
      };
    } else {
      this.utilService.alert('error', 'Error', 'Please select a file to validate!!', false);
    }
  }
  validateDataSuccessHandler(data, prms) {
    if (data) {
      prms.utilService.alert("success", "Success", "Validation initiated, please refresh for updates!!");
      prms.refreshData();
    }
  }
  deleteDataSuccessHandler(data, prms) {
    if (data) {
      prms.utilService.alert("success", "Success", "File data deleted successfully!!");
      prms.refreshData();
    }
  }
  migrateEntry() {
    if (this.selectedIndex != -1) {
      let req = {
        EntityName: this.valData[this.selectedIndex].ENTITY,
        JobFileId: this.valData[this.selectedIndex].JOB_FILES_ID,
        TableId: ''
      };
    } else {
      this.utilService.alert('error', 'Error', 'Please select a file to migrate!!', false);
    }
  }
  migrateDataSuccessHandler(data, prms) {
    if (data) {
      prms.utilService.alert("success", "Success", "Migration initiated, please check data migration report for updates!!");
      prms.refreshData();
    }
  }
  viewFileReport(data) {
    let fileName = "";
    if (data.FILE_NAME.length > 60) {
      fileName = data.FILE_NAME.substring(0, 60) + "...";
    } else {
      fileName = data.FILE_NAME;
    }
    this.utilService.clearBreadcrumb();
    this.utilService.transferFileData(data);
    this.utilService.setFileReportSource('VALIDATION_REPORT');
    this.utilService.pushToBreadcrumb('Validation Report', 'fa fa-database', '', null, 'PUSH_TO_MENU', 'VALIDATION_REPORT', 'custom-menu');
    this.utilService.pushToBreadcrumb(fileName, 'fa fa-files-o', '', null, 'DASHBOARD_RELOAD', 'FILE_REPORT', 'custom-active-menu');
  }
  openModal(template, cssClass) {
    this.modalRef = this.modalService.show(template, {
      class: cssClass,
      keyboard: false,
      backdrop: true,
      ignoreBackdropClick: true
    });
  }
  hideModal() {
    this.modalRef.hide();
  }
  onOtherColumnSelect(selectData, rowData) {
    if (selectData.checked) {
      let cIndex = lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.otherColumnsData, function (col) {
        return col.field == rowData.field;
      });
      if (cIndex == -1) {
        this.otherColumnsData.push(rowData);
      }
    } else {
      let cIndex = lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.otherColumnsData, function (col) {
        return col.field == rowData.field;
      });
      if (cIndex != -1) {
        this.otherColumnsData.splice(cIndex, 1);
      }
    }
  }
  addNewColumns() {
    this.hideModal();
    this.resetTableCols();
    this.otherColumnsData.forEach(oCol => {
      let cIndex = lodash__WEBPACK_IMPORTED_MODULE_0__.findIndex(this.valDataCols, function (col) {
        return col.field == oCol.field;
      });
      if (cIndex == -1) {
        this.valDataCols.push(oCol);
      }
    });
  }
  resetTableCols() {
    this.valDataCols = [{
      field: "ENTITY_DESCRIPTION",
      label: "Entity Name",
      type: "string"
    }, {
      field: "FILE_NAME",
      label: "File Name",
      type: "string"
    }, {
      field: "UPLOADED_BY",
      label: "Uploaded By",
      type: "string"
    }, {
      field: "UPLOADED_ON",
      label: "Uploaded On",
      type: "date"
    }, {
      field: "VALIDATE_SUCCESS_COUNT",
      label: "Validation Success",
      type: "string"
    }, {
      field: "VALIDATE_ERROR_COUNT",
      label: "Validation Fail",
      type: "string"
    }, {
      field: "TOTAL_COUNT",
      label: "Total Count",
      type: "string"
    }];
  }
  serviceErrorHandler(response, status, errorText, prms) {
    prms.curComp.utilService.alert('error', 'Error', 'Service error, please contact administrator!!', false);
  }
  errorHandler(response, prms) {
    prms.utilService.alert('error', 'Error', 'Service error, please contact administrator!!', false);
  }
}
ValidationReportComponent.ɵfac = function ValidationReportComponent_Factory(t) {
  return new (t || ValidationReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_commons_services_utilities_service__WEBPACK_IMPORTED_MODULE_1__.UtilitiesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.BsModalService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_commons_services_migration_service__WEBPACK_IMPORTED_MODULE_2__.MigrationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe));
};
ValidationReportComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: ValidationReportComponent,
  selectors: [["validation-report"]],
  viewQuery: function ValidationReportComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.columnFilterModal = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.validationData = _t.first);
    }
  },
  inputs: {
    clearMenu: "clearMenu"
  },
  decls: 33,
  vars: 14,
  consts: [[1, "container-fluid", "no-left-padding", "no-right-padding"], ["position", "right", 1, "custom-right-sidebar", 3, "visible", "visibleChange"], [1, "row", "no-left-padding", "no-right-padding", "no-top-padding"], [1, "col-lg-12", "xsm-padding", 2, "padding-left", "2px !important"], [1, "custom-search-panel"], ["pTemplate", "header"], [1, "row", "xsm-padding"], [1, "col-lg-5", "xsm-padding", "xsm-margin"], ["appendTo", "body", "placeholder", "Entity Name", "name", "entityName", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose entity", 1, "custom-search-dropdown", 3, "options", "ngModel", "ngModelChange"], ["entityName", "ngModel"], [1, "col-lg-6", "xsm-padding", "xsm-margin"], ["label", "Search", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "right", "pTooltip", "Click to get search results", "styleClass", "p-button-sm", 1, "custom-sr-btn", 3, "click"], ["type", "text", "pInputText", "", "name", "fName", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter file name", "tooltipPosition", "bottom", "placeholder", "File Name", 2, "font-size", "13px !important", 3, "ngModel", "ngModelChange"], ["fName", "ngModel"], ["appendTo", "body", "placeholder", "Uploaded By", "name", "uploadedBy", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose uploaded by", 1, "custom-search-dropdown", 3, "options", "ngModel", "ngModelChange"], ["uploadedBy", "ngModel"], ["inputId", "icon", "dateFormat", "dd/mm/yy", "name", "ftFromDate", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter from date", "placeholder", "From Date", 1, "custom-calendar", 3, "ngModel", "showIcon", "maxDate", "ngModelChange"], ["ftFromDate", "ngModel"], ["inputId", "icon", "dateFormat", "dd/mm/yy", "name", "ftToDate", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to enter to date", "placeholder", "To Date", 1, "custom-calendar", 3, "ngModel", "showIcon", "maxDate", "ngModelChange"], ["ftToDate", "ngModel"], [1, "row", "sm-padding"], [1, "col-lg-12", "sm-padding", "no-left-padding", "no-right-padding", "no-top-padding"], [1, "xsm-padding", "lg-card-height", "pm-lt-bk"], ["class", "dashboard-spinner", "strokeWidth", "7", 4, "ngIf"], ["class", "custom-scroll", 3, "style", 4, "ngIf"], ["columnFilterModal", ""], [1, "col-lg-2", "xsm-padding", "no-left-padding", "no-right-padding", "form-field-header"], ["strokeWidth", "7", 1, "dashboard-spinner"], [1, "custom-scroll"], [1, "custom-table", 3, "value", "columns", "paginator", "rows", "responsive", "globalFilterFields", "onRowSelect", "onRowUnselect"], ["validationData", ""], ["pTemplate", "caption"], ["pTemplate", "body"], [1, "table-header", 2, "text-align", "left"], [1, "p-input-icon-right", 2, "width", "30%"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Search", 1, "xsm-pm-border", "sm-font", 2, "width", "100%", "height", "30px", "font-size", "12px !important", 3, "input"], ["textInput", ""], [2, "width", "50%", "padding-left", "40px", "font-size", "14px !important", "font-weight", "bold !important"], [1, "xsm-margin-bottom", "p-input-icon-right", "pointer", 2, "width", "46%"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to refresh data", 1, "fa", "fa-refresh", 2, "padding-right", "20px !important", 3, "click"], [1, "xsm-margin-bottom", "p-input-icon-right", "pointer", 2, "width", "2%"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to delete", 1, "fa", "fa-trash", 2, "padding-right", "15px !important", 3, "click"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to validate", 1, "fa", "fa-check-circle", 2, "padding-right", "10px !important", 3, "click"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to migrate", 1, "fa", "fa-arrow-circle-up", 2, "padding-right", "7px !important", 3, "click"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", "pTooltip", "Click to open search", 1, "fa", "fa-search-plus", 2, "padding-right", "5px !important", 3, "click"], ["tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to choose columns", "tooltipPosition", "left", 1, "fa", "fa-cogs", 3, "click"], [2, "width", "50px !important"], [3, "pSortableColumn", 4, "ngFor", "ngForOf"], [3, "pSortableColumn"], [3, "field"], [1, "pointer"], [1, "custom-radio-btn", 3, "value", "index"], ["ngFor", "", 3, "ngForOf"], ["style", "text-align:center;", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", 3, "pTooltip", 4, "ngIf"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", 3, "pTooltip", 4, "ngIf"], ["class", "custom-warn-text", "style", "text-decoration: underline !important; cursor: pointer !important;", "tooltipStyleClass", "custom-tooltip", "tooltipPosition", "right", 3, "pTooltip", "click", 4, "ngIf"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", 2, "text-align", "center", 3, "pTooltip"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "left", 3, "pTooltip"], [1, "custom-tag-user", 3, "value"], ["tooltipStyleClass", "custom-tooltip", "tooltipPosition", "right", 1, "custom-warn-text", 2, "text-decoration", "underline !important", "cursor", "pointer !important", 3, "pTooltip", "click"], [1, "app-card"], [1, "modal-action-bar", "right-align"], [1, "row"], [1, "col-lg-10", "modal-header"], [1, "custom-modal-heading"], [1, "col-lg-2", "modal-header"], ["type", "button", "aria-label", "Close", 1, "btn-close", "close", 3, "click"], [1, "custom-modl-content"], [1, "custom-scroll", "sm-padding"], [1, "modal-footer"], ["label", "Ok", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to add columns", "styleClass", "p-button-sm", 1, "custom-tertiary-btn", 3, "click"], ["label", "Cancel", "tooltipStyleClass", "custom-tooltip", "pTooltip", "Click to cancel", "styleClass", "p-button-sm", 1, "custom-tertiary-btn", 3, "click"], [1, "col-lg-12"], [1, "col-lg-1"], [1, "p-field-radiobutton"], [1, "custom-checkbox", 3, "id", "binary", "name", "ngModel", "onChange", "ngModelChange"], ["allColumn", "ngModel"], [1, "col-lg-10", 2, "padding-top", "3px"], [1, "no-padding", "form-field-header"]],
  template: function ValidationReportComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "p-sidebar", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("visibleChange", function ValidationReportComponent_Template_p_sidebar_visibleChange_1_listener($event) {
        return ctx.displayFilters = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "p-panel", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ValidationReportComponent_ng_template_5_Template, 2, 0, "ng-template", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6)(7, "div", 7)(8, "p-dropdown", 8, 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ValidationReportComponent_Template_p_dropdown_ngModelChange_8_listener($event) {
        return ctx.filterEntityName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10)(11, "p-button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ValidationReportComponent_Template_p_button_click_11_listener() {
        return ctx.getFilteredSearch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 6)(13, "div", 7)(14, "input", 12, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ValidationReportComponent_Template_input_ngModelChange_14_listener($event) {
        return ctx.filterFileName = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 7)(17, "p-dropdown", 14, 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ValidationReportComponent_Template_p_dropdown_ngModelChange_17_listener($event) {
        return ctx.filterUploadedBy = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 6)(20, "div", 7)(21, "p-calendar", 16, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ValidationReportComponent_Template_p_calendar_ngModelChange_21_listener($event) {
        return ctx.filterFromDate = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 7)(24, "p-calendar", 18, 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function ValidationReportComponent_Template_p_calendar_ngModelChange_24_listener($event) {
        return ctx.filterToDate = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 20)(27, "div", 21)(28, "div", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, ValidationReportComponent_p_progressSpinner_29_Template, 1, 0, "p-progressSpinner", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, ValidationReportComponent_p_scrollPanel_30_Template, 6, 13, "p-scrollPanel", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, ValidationReportComponent_ng_template_31_Template, 15, 4, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("visible", ctx.displayFilters);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.entityNames)("ngModel", ctx.filterEntityName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filterFileName);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.usersList)("ngModel", ctx.filterUploadedBy);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filterFromDate)("showIcon", true)("maxDate", ctx.todaysDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.filterToDate)("showIcon", true)("maxDate", ctx.todaysDate);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showSpinner);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.showSpinner);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button, primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeTemplate, primeng_table__WEBPACK_IMPORTED_MODULE_9__.Table, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortableColumn, primeng_table__WEBPACK_IMPORTED_MODULE_9__.SortIcon, primeng_table__WEBPACK_IMPORTED_MODULE_9__.TableRadioButton, primeng_scrollpanel__WEBPACK_IMPORTED_MODULE_10__.ScrollPanel, primeng_tooltip__WEBPACK_IMPORTED_MODULE_11__.Tooltip, primeng_checkbox__WEBPACK_IMPORTED_MODULE_12__.Checkbox, primeng_dropdown__WEBPACK_IMPORTED_MODULE_13__.Dropdown, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, primeng_calendar__WEBPACK_IMPORTED_MODULE_15__.Calendar, primeng_progressspinner__WEBPACK_IMPORTED_MODULE_16__.ProgressSpinner, primeng_sidebar__WEBPACK_IMPORTED_MODULE_17__.Sidebar, primeng_tag__WEBPACK_IMPORTED_MODULE_18__.Tag, primeng_panel__WEBPACK_IMPORTED_MODULE_19__.Panel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ })

}]);
//# sourceMappingURL=src_app_migration_migration_module_ts.js.map