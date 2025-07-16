
const Routers = require('express').Router();
const settingsController = require('../controllers/settingsController');
const authMiddleware = require('../middlewares/authMiddleware');

// Bug Reports & Help
Routers.post('/report-problem', settingsController.bugReport);
Routers.post('/contact-support', settingsController.contactHelp);

// Account Management
Routers.patch('/change-credentials', authMiddleware, settingsController.changeCredentials);
Routers.get('/request-info', authMiddleware, settingsController.requestInfo);
Routers.delete('/delete-account', authMiddleware, settingsController.deleteAccount);

// Privacy / User Preferences
Routers.patch('/privacy-settings', authMiddleware, settingsController.updatePrivacy);
Routers.get('/privacy-settings', authMiddleware, settingsController.getPrivacy);

// Notification Settings
Routers.patch('/notification-settings', authMiddleware, settingsController.updateNotificationSettings);
Routers.get('/notification-settings', authMiddleware, settingsController.getNotificationSettings);
module.exports = Routers;