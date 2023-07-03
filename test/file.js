const serv = require('./common')

describe('File APIs', () => {
    let totalCases = 0;
    beforeEach(() => {
        totalCases++;
    })
    describe('Get file by reference', () => {
        it('Should get file details with the given reference number', async() => serv.getFileByReference('AG/REGISTRY (IAD)/FILE_HEADER1_1_2/FILE_HEADER2_2/2019/8'))
    })
    describe('Get files by type', () => {
        it('Should get file details with the given file type', async() => serv.getFilesByType('ADVISORY'))
    })
    describe('Get file details by reference', () => {
        it('Should get complete file details with the given reference number', async() => serv.readFileByReference('AG/REGISTRY (IAD)/FILE_HEADER1_1_2/FILE_HEADER2_2/2019/8'))
    })
    describe('Get all files for request', () => {
        it('Should get all the associated files for the given request number', async() => serv.getFilesForRequest('ADV-5'))
    })
    describe('Get all files available', () => {
        it('Should get all the available files', async() => serv.getAllFiles())
    })
})