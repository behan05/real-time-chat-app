const bcrypt = require('bcryptjs');
const User = require('../models/User.model');
const generateToken = require('../utils/generateToken');

// auth Controllers
const registerController = async (req, res) => {
  try {
    const {
      fullName,
      email,
      password,
      confirmPassword,
      authProvider = 'local'
    } = req.body;

    // Check user existence
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        error: 'User already exists! Please use another email.'
      });
    }

    // Local provider validations
    if (authProvider === 'local') {
      if (!password || !confirmPassword) {
        return res.status(400).json({
          success: false,
          error: 'Password and confirm password are required for local signup.'
        });
      }

      if (password !== confirmPassword) {
        return res.status(400).json({
          success: false,
          error: 'Passwords do not match.'
        });
      }
    }

    // Hash password (if local)
    const hashedPassword = authProvider === 'local'
      ? await bcrypt.hash(password, await bcrypt.genSalt(10))
      : null;

    // Create new user
    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      authProvider
    });

    // Save to DB
    await newUser.save();

    return res.status(201).json({
      success: true,
      message: 'New user created!'
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Error occurred while creating new account',
      detail: error.message
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password, authProvider = 'local' } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Email and password are required.'
      });
    }

    const user = await User.findOne({ email });

    // User not found
    if (!user) {
      return res.status(404).json({
        success: false,
        error: 'User not found.'
      });
    }

    // Auth provider mismatch
    if (user.authProvider !== authProvider) {
      return res.status(400).json({
        success: false,
        error: `Please login with ${user.authProvider}.`
      });
    }

    // Password check (local only)
    if (authProvider === 'local') {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({
          success: false,
          error: 'Invalid credentials.'
        });
      }
    }

    // Generate JWT token
    const token = generateToken(user._id);

    return res.status(200).json({
      success: true,
      message: 'Login successful!',
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
      token,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Error occurred while logging in',
      detail: error.message
    });
  }
};

const forgetPasswordController = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        error: 'Email is required!'
      });
    }

    // Placeholder: send password reset email/token logic
    // example generateResetToken(email)

    return res.status(200).json({
      success: true,
      message: 'Password reset instructions sent (if account exists).'
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Error occurred while forget password',
      detail: error.message
    });
  }
};

module.exports = {
  registerController,
  loginController,
  forgetPasswordController
};
