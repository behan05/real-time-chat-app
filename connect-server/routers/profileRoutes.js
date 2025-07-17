const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const profileController = require('../controllers/profileController');
const upload = require('../middlewares/multerMiddleware');

// GET profile
router.get('/my-profile', authMiddleware, profileController.getMyProfileController);

// PATCH sections
router.patch('/general-info', authMiddleware, upload.single('profileImage'), profileController.updateGeneralInfoController);
router.patch('/matching-preferences', authMiddleware, profileController.updateMatchingPreferencesController);
router.patch('/tags-and-interests', authMiddleware, profileController.updateTagsAndInterestsController);

module.exports = router;
