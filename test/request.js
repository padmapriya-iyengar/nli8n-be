const serv = require('./common')

describe('Request APIs', () => {
    let totalCases = 0;
    beforeEach(() => {
        totalCases++;
    })
    describe('Get request by request number', () => {
        it('Should get request details for the given request number', async() => serv.getRequestByNumber('ADV-8'))
    })
    describe('Get request details by request number', () => {
        it('Should get complete request details for the given request number', async() => serv.readRequestByNumber('ADV-8'))
    })
    describe('Get request details by file reference number', () => {
        it('Should get request details for the given file reference number', async() => serv.getRequestsForFileReference('AG/CIRCULATION OFFICER/FILE_HEADER1_3_2/FILE_HEADER2_2/2023/11'))
    })
    describe('Get all the requests', () => {
        it('Should get all the available requests', async() => serv.getAllRequests())
    })
})