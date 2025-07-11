
const Routers = require('express').Router();
const settingsController = require('../controllers/settingsController');
const authMiddleware = require('../middlewares/authMiddleware');

// Account Management
Routers.post('/change-credentials', authMiddleware, settingsController.changeCredentials);
Routers.get('/request-info', authMiddleware, settingsController.requestInfo);
Routers.post('/delete-account', authMiddleware, settingsController.deleteAccount);

// Privacy / User Preferences
Routers.patch('/privacy', authMiddleware, settingsController.updatePrivacy);
Routers.get('/privacy', authMiddleware, settingsController.getPrivacy);

// Bug Reports & Help
Routers.post('/report-problem', settingsController.bugReport);
Routers.post('/contact-help', settingsController.contactHelp);

module.exports = Routers;