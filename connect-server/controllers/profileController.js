const Profile = require('../models/Profile.model');
const User = require('../models/User.model');

exports.getMyProfileController = async (req, res) => {
    
 };

exports.updateGeneralInfoController = async (req, res) => {
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

    // get user id from request object
    const userId = req.user.id;

    // validate required fields
    if (
        !fullName?.trim()
        || !age?.trim()
        || !gender?.trim()
        || !pronouns?.trim()
        || !shortBio?.trim()
    ) {
        return res.setHeader('Content-Type', 'application/json')
            .status(400)
            .json({
                error: 'All fields are required.'
            });
    }

    // validate age
    if (isNaN(age)) {
        return res.setHeader('Content-type', 'application/json')
            .status(400)
            .json({
                error: 'Age must be a number.'
            })
    };

    // validate age range
    if (age < 18 || age > 95) {
        return res.setHeader('Content-type', 'application/json')
            .status(400)
            .json({
                error: 'Age must be between 18 and 95.'
            })
    }

    // validate short bio
    if (shortBio.length > 300) {
        return res.setHeader('Content-type', 'application/json')
            .status(400)
            .json({
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
        await Profile.findOneAndUpdate({ user: userId }, updateProfile,
            { new: true, upsert: true });

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
            message: 'Profile updated successfully.',
            profile: updateProfile
        })

    } catch (error) {
        // if there is an error while updating the profile
        res.setHeader('Content-Type', 'application/json');
        res.status(500).json({
            error: 'An error occurred while updating the profile.'
        });
        return;
    }
};

exports.updateMatchingPreferencesController = async (req, res) => { };

exports.updateTagsAndInterestsController = async (req, res) => { };