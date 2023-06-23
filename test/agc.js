const serv = require('./common')

describe('Common APIs',() => {
    let totalCases = 0;
    beforeEach(() => {
        totalCases++;
    })
    describe('Get all users', () => {
        it('Should get all users', async() => serv.getAllUsers())
    })
    describe('Get user notifications',() => {
        describe('priya user notifications', () => {
            it('Should get notifications for priya user', async() => serv.getUserNotifications('priya'))
        })
        describe('kiran user notifications', () => {
            it('Should get notifications for kiran user', async() => serv.getUserNotifications('kiran'))
        })
        describe('padmapriya user notifications', () => {
            it('Should get notifications for padmapriya user', async() => serv.getUserNotifications('padmapriya'))
        })
        describe('joshi user notifications', () => {
            it('Should get notifications for joshi user', async() => serv.getUserNotifications('joshi'))
        })
        describe('pp user notifications', () => {
            it('Should get notifications for pp user', async() => serv.getUserNotifications('pp'))
        })
        describe('kittu user notifications', () => {
            it('Should get notifications for kittu user', async() => serv.getUserNotifications('kittu'))
        })
        describe('ppriya user notifications', () => {
            it('Should get notifications for ppriya user', async() => serv.getUserNotifications('ppriya'))
        })
    })
    describe('Get user divisions',() => {
        describe('priya user divisions', () => {
            it('Should get divisions for priya user', async() => serv.getUserDivisions('priya'))
        })
        describe('kiran user divisions', () => {
            it('Should get divisions for kiran user', async() => serv.getUserDivisions('kiran'))
        })
        describe('padmapriya user divisions', () => {
            it('Should get divisions for padmapriya user', async() => serv.getUserDivisions('padmapriya'))
        })
        describe('joshi user divisions', () => {
            it('Should get divisions for joshi user', async() => serv.getUserDivisions('joshi'))
        })
        describe('pp user divisions', () => {
            it('Should get divisions for pp user', async() => serv.getUserDivisions('pp'))
        })
        describe('kittu user divisions', () => {
            it('Should get divisions for kittu user', async() => serv.getUserDivisions('kittu'))
        })
        describe('ppriya user divisions', () => {
            it('Should get divisions for ppriya user', async() => serv.getUserDivisions('ppriya'))
        })
    })
    describe('Get user profile',()=>{
        describe('priya user profile', () => {
            it('Should get profile for priya user', async() => serv.getUserProfile('priya'))
        })
        describe('kiran user profile', () => {
            it('Should get profile for kiran user', async() => serv.getUserProfile('kiran'))
        })
        describe('padmapriya user profile', () => {
            it('Should get profile for padmapriya user', async() => serv.getUserProfile('padmapriya'))
        })
        describe('joshi user profile', () => {
            it('Should get profile for joshi user', async() => serv.getUserProfile('joshi'))
        })
        describe('pp user profile', () => {
            it('Should get profile for pp user', async() => serv.getUserProfile('pp'))
        })
        describe('kittu user profile', () => {
            it('Should get profile for kittu user', async() => serv.getUserProfile('kittu'))
        })
        describe('ppriya user profile', () => {
            it('Should get profile for ppriya user', async() => serv.getUserProfile('ppriya'))
        })
    })
    describe('Get user details',() => {
        describe('priya user details', () => {
            it('Should get details for priya user', async() => serv.getUserDetails('priya'))
        })
        describe('kiran user details', () => {
            it('Should get details for kiran user', async() => serv.getUserDetails('kiran'))
        })
        describe('padmapriya user details', () => {
            it('Should get details for padmapriya user', async() => serv.getUserDetails('padmapriya'))
        })
        describe('joshi user details', () => {
            it('Should get details for joshi user', async() => serv.getUserDetails('joshi'))
        })
        describe('pp user details', () => {
            it('Should get details for pp user', async() => serv.getUserDetails('pp'))
        })
        describe('kittu user details', () => {
            it('Should get details for kittu user', async() => serv.getUserDetails('kittu'))
        })
        describe('ppriya user details', () => {
            it('Should get details for ppriya user', async() => serv.getUserDetails('ppriya'))
        })
    })
    describe('Get files for user',() => {
        describe('Files for priya user', () => {
            it('Should get files for priya user', async() => serv.getDashboardFiles('priya'))
        })
        describe('Files for kiran user', () => {
            it('Should get files for kiran user', async() => serv.getDashboardFiles('kiran'))
        })
        describe('Files for padmapriya user', () => {
            it('Should get files for padmapriya user', async() => serv.getDashboardFiles('padmapriya'))
        })
        describe('Files for joshi user', () => {
            it('Should get files for joshi user', async() => serv.getDashboardFiles('joshi'))
        })
        describe('Files for pp user', () => {
            it('Should get files for pp user', async() => serv.getDashboardFiles('pp'))
        })
        describe('Files for kittu user', () => {
            it('Should get files for kittu user', async() => serv.getDashboardFiles('kittu'))
        })
        describe('Files for ppriya user', () => {
            it('Should get files for ppriya user', async() => serv.getDashboardFiles('ppriya'))
        })
    })
    describe('Get requests for user',() => {
        describe('Requests for priya user', () => {
            it('Should get details for priya user', async() => serv.getDashboardRequests('priya'))
        })
        describe('Requests for kiran user', () => {
            it('Should get details for kiran user', async() => serv.getDashboardRequests('kiran'))
        })
        describe('Requests for padmapriya user', () => {
            it('Should get details for padmapriya user', async() => serv.getDashboardRequests('padmapriya'))
        })
        describe('Requests for joshi user', () => {
            it('Should get details for joshi user', async() => serv.getDashboardRequests('joshi'))
        })
        describe('Requests for pp user', () => {
            it('Should get details for pp user', async() => serv.getDashboardRequests('pp'))
        })
        describe('Requests for kittu user', () => {
            it('Should get details for kittu user', async() => serv.getDashboardRequests('kittu'))
        })
        describe('Requests for ppriya user', () => {
            it('Should get details for ppriya user', async() => serv.getDashboardRequests('ppriya'))
        })
    })
})