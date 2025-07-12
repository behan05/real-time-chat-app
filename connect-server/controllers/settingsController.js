const ContactHelp = require('../models/ContactHelp.model');
const BugReport = require('../models/ReportProblem.model');
const PrivacySettings = require('../models/PrivacySettings.model');
const User = require('../models/User.model');
const bcrypt = require('bcryptjs');
const zlib = require('zlib');

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

    if (!user) {
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
            // when profile page compeletd then i will add more...
        }
        const buffer = Buffer.from(JSON.stringify(userData), 'utf-8');
        const compressed = zlib.gzipSync(buffer);

        res.setHeader('Content-Type', 'application/gzip');
        res.setHeader('Content-Disposition', `attachment; filename=${user.fullName}-your-info.json.gz`);
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
exports.deleteAccount = async (req, res) => { };

// Update user's privacy preferences (toggle-based settings)
exports.updatePrivacy = async (req, res) => { };

// Get user's current privacy settings
exports.getPrivacy = async (req, res) => { };
