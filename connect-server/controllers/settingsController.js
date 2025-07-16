const ContactHelp = require('../models/ContactHelp.model');
const BugReport = require('../models/ReportProblem.model');
const Settings = require('../models/settings.model');
const User = require('../models/User.model');
const bcrypt = require('bcryptjs');
const zlib = require('zlib');
const Profile = require('../models/Profile.model');

// Handle contact/help requests submitted by users
exports.contactHelp = async (req, res) => {
    const { fullName, email, category, subject, message } = req.body;

    // Validate required fields
    if (!fullName || !email || !category || !subject || !message) {
        res.setHeader('Content-Type', 'application/json');
        res.status(400).json({
            error: 'All fields are required.'
        });
        return;
    }
    try {
        // Create and save the help request
        const newSupportRequest = await ContactHelp.create({
            fullName,
            email,
            category,
            subject,
            message
        });
        // Save the request to the database
        newSupportRequest.save();
        res.setHeader('Content-Type', 'application/json');
        res.status(201).json({
            message: 'Your request has been submitted successfully.'
        });

        return;
    } catch (error) {
        res.setHeader('Content-Type', 'application/json');
        res.status(500).json({
            error: 'An error occurred while processing your request.'
        });
        return;
    }
};

// Handle bug reports submitted by users
exports.bugReport = async (req, res) => {

    const {
        issueType,
        title,
        description,
        expectedBehavior,
        actualBehavior,
        deviceInfo,
        screenshot,
        email,
    } = req.body;

    // Basic validation for required fields
    if (!issueType || !title || !description || !email) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).json({
            error: "All fields are required."
        });
        return;
    }
    try {
        const newbugReport = new BugReport({
            issueType,
            title,
            description,
            expectedBehavior,
            actualBehavior,
            deviceInfo,
            screenshot,
            email
        });
        await newbugReport.save();
        res.setHeader('Content-Type', 'application/json');
        res.status(201).json({
            message: 'Your bug report has been submitted successfully.'
        });
        return;

    } catch (error) {
        res.setHeader('Content-Type', 'application/json');
        res.status(500).json({
            error: 'An error occurred while processing your bug report.'
        });
        return;
    }

};

// Allow users to change their email and/or password
exports.changeCredentials = async (req, res) => {
    const {
        currentPassword,
        newEmail,
        newPassword,
        confirmPassword
    } = req.body;

    if (!currentPassword || !newPassword || !confirmPassword) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({
            error: 'All fields are required.'
        });
    }

    if (newPassword !== confirmPassword) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(400).json({
            error: 'New passwords do not match.'
        });
    }

    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(404).json({
                error: 'User not found.'
            });
        }

        // Check password
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(400).json({
                error: 'Current password is incorrect.'
            });
        }

        // Change Email (if provided)
        if (newEmail) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(newEmail)) {
                res.setHeader('Content-Type', 'application/json');
                return res.status(400).json({
                    error: 'Invalid email format.'
                });
            }

            const existingUser = await User.findOne({ email: newEmail });
            if (existingUser && existingUser._id.toString() !== user._id.toString()) {
                res.setHeader('Content-Type', 'application/json');
                return res.status(400).json({
                    error: 'Email is already in use.'
                });
            }

            user.email = newEmail;
        }

        // Hash new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;

        await user.save();

        res.setHeader('Content-Type', 'application/json');
        return res.status(200).json({
            message: 'Credentials updated successfully.'
        });

    } catch (error) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(500).json({
            error: 'An error occurred while updating your credentials.'
        });
    }
};

// Provide user with access to their saved account information
exports.requestInfo = async (req, res) => {

    const user = await User.findById(req.user.id);
    const userProfile = await Profile.findOne({ user: req.user.id });

    if (!user || !userProfile) {
        res.setHeader("Content-Type", "application/json");
        res.status(404).json({
            error: 'User not found.'
        })
        return;
    }
    try {
        const userData = {
            fullName: user.fullName,
            email: user.email,
            createdAt: user.createdAt,
            signupThrough: user.authProvider,
            profile: {
                fullName: userProfile.fullName,
                age: userProfile.age,
                pronouns: userProfile.pronouns,
                gender: userProfile.gender,
                shortBio: userProfile.shortBio,
                profileImage: userProfile.profileImage,
                lookingFor: userProfile.lookingFor,
                preferredLanguage: userProfile.preferredLanguage,
                country: userProfile.country,
                state: userProfile.state,
                city: userProfile.city,
                preferredAgeRange: userProfile.preferredAgeRange,
                matchScope: userProfile.matchScope,
                strictInterestMatch: userProfile.strictInterestMatch,
                interests: userProfile.interests,
                personality: userProfile.personality,
                chatStyles: userProfile.chatStyles
                // when profile page completed then i will add more...
            }
        }
        const buffer = Buffer.from(JSON.stringify(userData), 'utf-8');
        const compressed = zlib.gzipSync(buffer);

        res.setHeader('Content-Type', 'application/gzip');
        res.setHeader('Content-Disposition', `attachment; filename=your-info.json.gz`);
        res.status(200).send(compressed);

    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(500).json({
            error: 'An error occurred while processing your request.'
        });
        return;
    }
};

// Delete a user's account and associated data
exports.deleteAccount = async (req, res) => {
    const user = await User.findById(req.user.id);
    if (!user) {
        res.setHeader("Content-Type", "application/json");
        res.status(404).json({
            error: 'User not found.'
        });
        return;
    }

    try {
        // Delete user and associated data
        await User.findByIdAndDelete(user._id);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
            message: 'Your account has been deleted successfully.'
        });
        return;

        // Optionally, we can also delete associated data like bug reports, contact requests, profiles, preferences, etc.

    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(500).json({
            error: 'An error occurred while processing your request.'
        });
        return;
    }
};

// Update user's privacy preferences (toggle-based settings)
exports.updatePrivacy = async (req, res) => {
    const userId = req.user.id;
    if (!userId) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(401).json({ error: 'User ID is required.' });
    };

    const {
        showProfilePic,
        showLocation,
        matchVerifiedOnly,
        allowRechat,
        blockNSFW,
        autoDeleteChats,
        allowExportData
    } = req.body;

    // Validate all fields are boolean
    if (
        typeof showProfilePic !== 'boolean' ||
        typeof showLocation !== 'boolean' ||
        typeof matchVerifiedOnly !== 'boolean' ||
        typeof allowRechat !== 'boolean' ||
        typeof blockNSFW !== 'boolean' ||
        typeof autoDeleteChats !== 'boolean' ||
        typeof allowExportData !== 'boolean'
    ) {
        return res.status(400).json({ error: 'Invalid privacy settings format.' });
    }

    try {
        // Try to find existing settings
        const privacySetting = await Settings.findOne({ user: userId });

        // Auto-create settings if not found
        if (!privacySetting) {
            const newSettings = new Settings({
                user: userId,
                showProfilePic,
                showLocation,
                matchVerifiedOnly,
                allowRechat,
                blockNSFW,
                autoDeleteChats,
                allowExportData
            });

            await newSettings.save();
            return res.status(201).json({
                message: 'Privacy settings created and saved.',
                privacySettings: newSettings
            });
        }

        // Update existing settings
        const updates = {
            showProfilePic,
            showLocation,
            matchVerifiedOnly,
            allowRechat,
            blockNSFW,
            autoDeleteChats,
            allowExportData
        };

        privacySetting.set(updates);
        await privacySetting.save();

        return res.status(200).json({
            message: 'Privacy settings updated successfully.',
            privacySettings: privacySetting
        });
    } catch (error) {
        console.error("Error updating privacy settings:", error);
        return res.status(500).json({
            error: 'An error occurred while processing your request.'
        });
    }
};

// Get user's current privacy settings
exports.getPrivacy = async (req, res) => {

    const userId = req.user.id;
    if (!userId) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(401).json({ error: 'User ID is required.' });
    }

    try {
        const privacySettings = await Settings.findOne({ user: userId });

        if (!privacySettings) {
            res.setHeader('Content-Type', 'application/json');
            return res.status(404).json({
                error: 'Privacy settings not found.'
            });
        }

        res.setHeader('Content-Type', 'application/json');
        res.status(200).json({
            privacySettings,
            message: 'Privacy settings retrieved successfully.'
        });
    } catch (error) {
        res.setHeader('Content-Type', 'application/json');
        res.status(500).json({
            error: 'An error occurred while retrieving your privacy settings.'
        });
    }
};

// Update user's notification settings
exports.updateNotificationSettings = async (req, res) => {

    const userId = req.user.id;
    if (!userId) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(401).json({ error: 'User ID is required.' });
    };

    const {
        newMatch,
        newMessage,
        warningAlerts,
        friendRequest,
        blockNotification
    } = req.body;

    // Validate all fields are boolean
    if (
        typeof newMatch !== 'boolean' ||
        typeof newMessage !== 'boolean' ||
        typeof warningAlerts !== 'boolean' ||
        typeof friendRequest !== 'boolean' ||
        typeof blockNotification !== 'boolean'
    ) {
        return res.status(400).json({ error: 'Invalid notification settings format.' });
    }

    try {
        // Try to find existing settings
        let notificationSetting = await Settings.findOne({ user: userId });

        // Auto-create settings if not found
        if (!notificationSetting) {
            notificationSetting = new Settings({
                user: userId,
                newMatch,
                newMessage,
                warningAlerts,
                friendRequest,
                blockNotification
            });

            await notificationSetting.save();
            return res.status(201).json({
                message: 'Notification settings created and saved.',
                notificationSettings: notificationSetting
            });
        }

        // Update existing settings
        const updates = {
            newMatch,
            newMessage,
            warningAlerts,
            friendRequest,
            blockNotification
        };

        notificationSetting.set(updates);
        await notificationSetting.save();

        return res.status(200).json({
            message: 'Notification settings updated successfully.',
            notificationSettings: notificationSetting
        });
    } catch (error) {
        console.error("Error updating notification settings:", error);
        return res.status(500).json({
            error: 'An error occurred while processing your request.'
        });
    }
};

// Get user's current notification settings
exports.getNotificationSettings = async (req, res) => {

    const userId = req.user.id;
    if (!userId) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(401).json({ error: 'User ID is required.' });
    }

    try {
        const notificationSettings = await Settings.findOne({ user: userId });

        if (!notificationSettings) {
            res.setHeader('Content-Type', 'application/json')
                .status(404)
                .json({
                    error: 'Notification settings not found.'
                });
            return;
        }

        res.setHeader('Content-Type', 'application/json')
            .status(200)
            .json({
                notificationSettings,
                message: 'Notification settings retrieved successfully.'
            });
        return;
    } catch (error) {
        res.setHeader('Content-Type', 'application/json')
            .status(500)
            .json({
                error: 'An error occurred while retrieving your notification settings.'
            });
        return;
    }
};

// get user's chat settings
exports.getChatSettings = async (req, res) => {
    const userId = req.user.id;

    if (!userId) {
        res.setHeader('Content-Type', 'application/json');
        return res.status(401).json({ error: 'User ID is required.' });
    }

    try {
        const chatSettings = await Settings.findOne({ user: userId });
        if (!chatSettings) {
            res.setHeader('Content-Type', 'application/json')
                .status(404)
                .json({
                    error: 'Chat settings not found for this user.'
                });
            return;
        } else {
            res.setHeader('Content-Type', 'application/json')
                .status(200)
                .json({
                    chatSettings: chatSettings,
                    message: 'Chat settings retrieved successfully.'
                });
            return;
        }
    } catch (error) {
        res.setHeader('Content-Type', 'application/json')
            .status(500)
            .json({
                error: 'An error occurred while retrieving chat settings.'
            });
        return;
    }
};

// update user's chat settings
exports.updateChatSettings = async (req, res) => {
    const userId = req.user.id;

    if (!userId) {
        return res.status(401).json({ error: 'User ID is required.' });
    }

    const {
        messageSound,
        showTypingStatus,
        showOnlineStatus,
        enterToSend,
        chatTheme,
        chatFontSize
    } = req.body;

    // Validate fields
    const isValid =
        typeof messageSound === 'boolean' &&
        typeof showTypingStatus === 'boolean' &&
        typeof showOnlineStatus === 'boolean' &&
        typeof enterToSend === 'boolean' &&
        ['light', 'dark'].includes(chatTheme) &&
        ['small', 'medium', 'large'].includes(chatFontSize);

    if (!isValid) {
        res.setHeader('Content-Type', 'application/json')
            .status(400)
            .json({
                error: 'Invalid chat settings format. Please ensure all fields are correctly formatted.'
            });
        return;
    }

    try {
        // Update or create settings
        await Settings.findOneAndUpdate(
            { user: userId },
            {
                messageSound,
                showTypingStatus,
                showOnlineStatus,
                enterToSend,
                chatTheme,
                chatFontSize
            },
            { new: true, upsert: true }
        );

        // Return the entire updated settings document for Redux sync
        const updatedSettings = await Settings.findOne({ user: userId });

        res.setHeader('Content-Type', 'application/json')
            .status(200)
            .json({
                message: 'Chat settings updated successfully.',
                chatSettings: updatedSettings
            });
        return;
    } catch (error) {
        setHeader('Content-Type', 'application/json')
            .status(500)
            .json({
                error: 'An error occurred while updating chat settings.'
            });
        return;
    }
};

