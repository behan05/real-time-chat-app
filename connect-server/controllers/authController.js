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

    // check user existence
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ error: 'user alreay exist! please use another email.' });
    }

    if (authProvider === 'local') {
      if (!password || !confirmPassword) {
        return res.status(400).json({ error: 'Password and confirm password are required for local signup' })
      };

      if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' })
      };
    };

    // Hashing password.
    const hashedPassword = authProvider === 'local'
      ? await bcrypt.hash(password, await bcrypt.genSalt(10))
      : null

    // Create new user.
    const newUser = await User.create({
      fullName,
      email,
      password: hashedPassword,
      authProvider
    })

    // save into DB
    newUser.save();

    res.status(201).json({
      msg: 'New user created!'
    })

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Server error' });
  }

}

const loginController = async (req, res) => {
  try {
    const { email, password, authProvider = 'local' } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required.' });
    }

    const user = await User.findOne({ email });

    // User not found
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Auth provider mismatch
    if (user.authProvider !== authProvider) {
      return res.status(400).json({
        error: `Please login with ${user.authProvider}.`
      });
    }

    // Password comparison (only for local users)
    if (authProvider === 'local') {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ error: 'Invalid credentials.' });
      }
    }

    // Generate token (JWT or your logic)
    const token = generateToken(user._id);

    return res.status(200).json({
      msg: 'Login successful!',
      user: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
      token,
    });

  } catch (error) {
    console.error('Login error:', error.message);
    return res.status(500).json({ error: 'Server error' });
  }
};

const forgetPasswordController = async (req, res) => {
  try {

    const { email } = req.body;
    if (!email) {
      return res.status(404).json({ error: 'email is required!' })
    }

    // 

  } catch (error) {

  }
}

module.exports = {
  registerController,
  loginController,
  forgetPasswordController
};