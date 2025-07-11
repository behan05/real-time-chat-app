
const Routers = require('express').Router();
const settingsController = require('../controllers/settingsController');

// Bug Reports & Help
Routers.post('/report-problem', settingsController.reportProblem);
Routers.post('/contact-help', settingsController.contactHelp);

// Account Management
Routers.post('/change-credentials', settingsController.changeCredentials);
Routers.get('/request-info', settingsController.requestInfo);
Routers.post('/delete-account', settingsController.deleteAccount);

// Privacy / User Preferences
Routers.patch('/privacy', settingsController.updatePrivacy);
Routers.get('/privacy', settingsController.getPrivacy);


module.exports = Routers;