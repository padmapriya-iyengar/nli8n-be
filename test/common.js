const express = require('express')
const chai = require('chai')
const request = require('supertest')
const app = require('../index')

const getMasterDataByType = async(type) => {
    request(app)
        .get('/agc/master-data')
        .query({source:'type',
                identifier:type})
        .end(function(err, res){
            if(err){
                throw err;
            }
            chai.expect(res.status).eq(200);
            chai.expect(res.body).to.be.an('array');
        })
}

const getMasterDataByTypeAndParent = async(type,parent) => {
    request(app)
        .get('/agc/master-data')
        .query({source:'type_parent',
                identifier:type,
                parent_code:parent})
        .end(function(err, res){
            if(err){
                throw err;
            }
            chai.expect(res.status).eq(200);
            chai.expect(res.body).to.be.an('array');
        })
}

const getMasterDataByCode = async(code) => {
    request(app)
        .get('/agc/master-data')
        .query({source:'code',
                identifier:code})
        .end(function(err, res){
            if(err){
                throw err;
            }
            chai.expect(res.status).eq(200);
            chai.expect(res.body).to.be.an('array');
            chai.expect(res.body).to.have.lengthOf(1);
        })
}

const getMasterDataByTypes = async(types) => {
    request(app)
        .get('/agc/master-data')
        .query({source:'types',
                identifier:types})
        .end(function(err, res){
            if(err){
                throw err;
            }
            chai.expect(res.status).eq(200);
            chai.expect(res.body).to.be.an('array');
        })
}

const getMasterDataByCodes = async(codes) => {
    request(app)
        .get('/agc/master-data')
        .query({source:'codes',
                identifier:codes})
        .end(function(err, res){
            if(err){
                throw err;
            }
            chai.expect(res.status).eq(200);
            chai.expect(res.body).to.be.an('array');
        })
}

const getUserNotifications = async(username) => {
    request(app)
        .get('/agc/notifications')
        .query({username:username})
        .end(function(err, res){
            if(err){
                throw err;
            }
            chai.expect(res.status).eq(200);
            chai.expect(res.body).to.be.an('array');
        })
}

const getUserDivisions = async(username) => {
    request(app)
        .get('/agc/user-divisions')
        .query({username:username})
        .end(function(err, res){
            if(err){
                throw err;
            }
            chai.expect(res.status).eq(200);
            chai.expect(res.body).to.be.an('array');
        })
}

const getAllUsers = async() => {
    request(app)
        .get('/agc/users')
        .end(function(err, res){
            if(err){
                throw err;
            }
            chai.expect(res.status).eq(200);
            chai.expect(res.body).to.be.an('array');
        })
}

const getUserProfile = async(username) => {
    request(app)
        .get('/agc/user-profile')
        .query({username:username})
        .end(function(err, res){
            if(err){
                throw err;
            }
            chai.expect(res.status).eq(200);
            chai.expect(res.body).to.be.an('array');
        })
}

const getUserDetails = async(username) => {
    request(app)
        .get('/agc/user-details')
        .query({username:username})
        .end(function(err, res){
            if(err){
                throw err;
            }
            chai.expect(res.status).eq(200);
            chai.expect(res.body).to.be.an('array');
        })
}

const getDashboardFiles = async(username) => {
    request(app)
        .get('/agc/dashboard-files')
        .query({username:username})
        .end(function(err, res){
            if(err){
                throw err;
            }
            chai.expect(res.status).eq(200);
            chai.expect(res.body).to.be.an('array');
        })
}

const getDashboardRequests = async(username) => {
    request(app)
        .get('/agc/dashboard-requests')
        .query({username:username})
        .end(function(err, res){
            if(err){
                throw err;
            }
            chai.expect(res.status).eq(200);
            chai.expect(res.body).to.be.an('array');
        })
}

const getFileByReference = async(referenceNo) => {
    request(app)
        .get('/agc/file')
        .query({identifier:referenceNo, source:'reference'})
        .end(function(err, res){
            if(err){
                throw err;
            }
            chai.expect(res.status).eq(200);
            chai.expect(res.body).to.be.an('array');
            chai.expect(res.body).to.have.lengthOf(1);
        })
}

const getFilesByType = async(type) => {
    request(app)
        .get('/agc/file')
        .query({identifier:type, source:'type'})
        .end(function(err, res){
            if(err){
                throw err;
            }
            chai.expect(res.status).eq(200);
            chai.expect(res.body).to.be.an('array');
        })
}

const readFileByReference = async(fileReferenceNo) => {
    request(app)
        .get('/agc/file/details')
        .query({fileReferenceNo:fileReferenceNo})
        .end(function(err, res){
            if(err){
                throw err;
            }
            chai.expect(res.status).eq(200);
            chai.expect(res.body).to.be.an('array');
            chai.expect(res.body).to.have.lengthOf(1);
        })
}

const getFilesForRequest = async(requestNo) => {
    request(app)
        .get('/agc/file/files-for-request')
        .query({requestNo:requestNo})
        .end(function(err, res){
            if(err){
                throw err;
            }
            chai.expect(res.status).eq(200);
            chai.expect(res.body).to.be.an('array');
        })
}

const getAllFiles = async() => {
    request(app)
        .get('/agc/file/files')
        .end(function(err, res){
            if(err){
                throw err;
            }
            chai.expect(res.status).eq(200);
            chai.expect(res.body).to.be.an('array');
        })
}

const getRequestByNumber = async(requestNo) => {
    request(app)
        .get('/agc/request')
        .query({requestNo:requestNo})
        .end(function(err, res){
            if(err){
                throw err;
            }
            chai.expect(res.status).eq(200);
            chai.expect(res.body).to.be.an('array');
            chai.expect(res.body).to.have.lengthOf(1);
        })
}

const readRequestByNumber = async(requestNo) => {
    request(app)
        .get('/agc/request/details')
        .query({requestNo:requestNo})
        .end(function(err, res){
            if(err){
                throw err;
            }
            chai.expect(res.status).eq(200);
            chai.expect(res.body).to.be.an('array');
            chai.expect(res.body).to.have.lengthOf(1);
        })
}

const getRequestsForFileReference = async(fileReferenceNo) => {
    request(app)
        .get('/agc/request/requests-for-file')
        .query({fileReferenceNo:fileReferenceNo})
        .end(function(err, res){
            if(err){
                throw err;
            }
            chai.expect(res.status).eq(200);
            chai.expect(res.body).to.be.an('array');
        })
}

const getAllRequests = async() => {
    request(app)
        .get('/agc/request/requests')
        .end(function(err, res){
            if(err){
                throw err;
            }
            chai.expect(res.status).eq(200);
            chai.expect(res.body).to.be.an('array');
        })
}

module.exports = {
    getMasterDataByType,
    getMasterDataByTypeAndParent,
    getMasterDataByCode,
    getMasterDataByTypes,
    getMasterDataByCodes,
    getAllUsers,
    getUserNotifications,
    getUserDivisions,
    getUserDetails,
    getUserProfile,
    getDashboardFiles,
    getDashboardRequests,
    getFileByReference,
    getFilesByType,
    readFileByReference,
    getFilesForRequest,
    getAllFiles,
    getRequestByNumber,
    readRequestByNumber,
    getRequestsForFileReference,
    getAllRequests
}