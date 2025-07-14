const Profile = require('../models/Profile.model');
const User = require('../models/User.model');

exports.getMyProfileController = async (req, res) => {
    // Extract logged-in user ID from auth middleware
    const userId = req.user.id;
    // If no user ID is found, send 401 Unauthorized response
    if (!userId) {
        return res.status(401).json({
            success: false,
            error: 'Unauthorized'
        });
    }

    try {
        // Look for a profile document associated with this user
        const userProfile = await Profile.findOne({ user: userId }).lean();

        // If no profile found, send 404 response
        if (!userProfile) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(404).json({
                success: false,
                error: 'Profile does not exist.'
            });
        }

        // If profile exists, send it back in response
        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json({
            success: true,
            profile: userProfile
        });

    } catch (error) {
        // If any server/database error occurs
        res.setHeader('Content-Type', 'application/json');
        return res.status(500).json({
            success: false,
            error: 'An error occurred while retrieving profile.'
        });
    }
};

exports.updateGeneralInfoController = async (req, res) => {

    // get user id from request object
    const userId = req.user.id;
    // if no user id is found, send 401 Unauthorized response
    if (!userId) {
        return res.status(401).json({
            success: false,
            error: 'Unauthorized'
        });
    }

    const {
        fullName,
        age,
        gender,
        pronouns,
        shortBio
    } = req.body;

    // get profile image from request file which is uploaded using multer
    // if no image is uploaded, it will be undefined
    const profileImage = req.file?.path;


    // validate required fields
    if (
        !fullName?.trim()
        || typeof age !== 'number'
        || !gender?.trim()
        || !pronouns?.trim()
        || !shortBio?.trim()
    ) {
        return res.setHeader('Content-Type', 'application/json')
            .status(400)
            .json({
                success: false,
                error: 'All fields are required.'
            });
    }

    // validate age
    if (isNaN(age)) {
        return res.setHeader('Content-type', 'application/json')
            .status(400)
            .json({
                success: false,
                error: 'Age must be a number.'
            })
    };

    // validate age range
    if (age < 18 || age > 95) {
        return res.setHeader('Content-type', 'application/json')
            .status(400)
            .json({
                success: false,
                error: 'Age must be between 18 and 95.'
            })
    }

    // validate short bio
    if (shortBio.length > 300) {
        return res.setHeader('Content-type', 'application/json')
            .status(400)
            .json({
                success: false,
                error: 'Bio should be under 300 characters.'
            })
    }

    // check if user exists
    try {

        const updateProfile = {
            fullName,
            age,
            gender,
            pronouns,
            shortBio,
        }
        if (profileImage) {
            updateProfile.profileImage = profileImage;
        };

        // Find the profile by user ID and update it.
        const profile = await Profile.findOneAndUpdate({ user: userId }, updateProfile,
            { new: true, upsert: true });

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
            success: true,
            message: 'Profile updated successfully.',
            profile: profile
        })

    } catch (error) {
        // if there is an error while updating the profile
        res.setHeader('Content-Type', 'application/json');
        res.status(500).json({
            success: false,
            error: 'An error occurred while updating the profile.'
        });
        return;
    }
};

exports.updateMatchingPreferencesController = async (req, res) => {
    const userId = req.user.id;
    // If no user ID is found, send 401 Unauthorized response
    if (!userId) {
        return res.status(401).json({
            success: false,
            error: 'Unauthorized'
        });
    }
    // Destructure the required fields from the request body
    const {
        lookingFor,
        preferredLanguage,
        country,
        state,
        city,
        matchScope,
        preferredAgeRange = {}
    } = req.body;

    const { min, max } = preferredAgeRange;

    if (!lookingFor?.trim()
        || !preferredLanguage?.trim()
        || !country?.trim()
        || !state?.trim()
        || !city?.trim()
        || !matchScope?.trim()
    ) {
        res.setHeader('Content-Type', 'application/json')
            .status(400)
            .json({
                success: false,
                error: 'All fields are required.'
            });
        return;
    };

    if (isNaN(min) || isNaN(max)) {
        res.setHeader('Content-Type', 'application/json')
            .status(400)
            .json({
                success: false,
                error: 'Age range must be a number.'
            });
        return;
    }

    if (min < 18 || max > 95 || min >= max) {
        res.setHeader('Content-Type', 'application/json')
            .status(400)
            .json({
                success: false,
                error: 'Invalid age range.'
            });
        return;
    }

    try {
        const updatePreferences = {
            lookingFor,
            preferredLanguage,
            country,
            state,
            city,
            matchScope,
            preferredAgeRange: {
                min: parseInt(min),
                max: parseInt(max)
            }
        }

        const profile = await Profile.findOneAndUpdate(
            { user: userId },
            updatePreferences,
            { new: true, upsert: true }
        )

        res.setHeader('Content-Type', 'application/json')
            .status(200)
            .json({
                success: true,
                message: 'Matching preferences updated successfully.',
                profile: profile
            });

    } catch (error) {
        res.setHeader('Content-Type', 'application/json')
            .status(500)
            .json({
                success: false,
                error: 'An error occurred while updating matching preferences.'
            });
        return;
    }

};

exports.updateTagsAndInterestsController = async (req, res) => {
    const userId = req.user.id;
    // If no user ID is found, send 401 Unauthorized response
    if (!userId) {
        return res.status(401).json({
            success: false,
            error: 'Unauthorized'
        });
    }

    const {
        strictInterestMatch, personality, interests, chatStyles
    } = req.body;

    if (
        typeof strictInterestMatch !== 'boolean'
        || !personality?.trim()
        || !Array.isArray(interests)
        || !Array.isArray(chatStyles)
    ) {
        res.setHeader('Content-Type', 'application/json')
            .status(400)
            .json({
                success: false,
                error: 'All fields are required.'
            });
        return;
    }

    try {
        const updateTagsAndInterests = {
            strictInterestMatch,
            personality,
            interests,
            chatStyles
        }

        const profile = await Profile.findOneAndUpdate(
            { user: userId },
            updateTagsAndInterests,
            { new: true, upsert: true }
        )

        res.setHeader('Content-Type', 'application/json')
            .status(200)
            .json({
                success: true,
                message: 'Tags and interests updated successfully.',
                profile: profile
            });

    } catch (error) {
        res.setHeader('Content-Type', 'application/json')
            .status(500)
            .json({
                success: false,
                error: 'An error occurred while updating tags and interests.'
            });
        return;
    }

};