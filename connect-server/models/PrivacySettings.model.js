const mongoose = require('mongoose');

const privacySettingsSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true,
    },
    showProfilePic: {
        type: Boolean,
        default: true,
    },
    showLocation: {
        type: Boolean,
        default: true,
    },
    matchVerifiedOnly: {
        type: Boolean,
        default: false,
    },
    allowRechat: {
        type: Boolean,
        default: true,
    },
    blockNSFW: {
        type: Boolean,
        default: true,
    },
    autoDeleteChats: {
        type: Boolean,
        default: false,
    },
    allowExportData: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('PrivacySettings', privacySettingsSchema);
