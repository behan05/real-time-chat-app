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
    const { email, password, authProvider } = req.body;

    if (authProvider === 'local') {
      if (!email || !password) {
        return res.status(404).json(
          { error: 'username and password does not matched.' }
        )
      };

      // Match user
      const user = await User.findOne({ email: email });

      if (!user) {
        return res.status(404).json({ error: 'User not found' })
      };

      if (user.authProvider !== 'local') {
        return res.status(400).json(
          { error: `Please login with ${user.authProvider}` }
        );
      };

      //  Compare password using bcrypt
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      const token = generateToken(user._id);
      res.status(200).json({
        msg: 'Login successful!',
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
          token
        }
      })
    }
    else {
      return res.status(400).json({ error: 'Unsupported auth provider' });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ error: 'Server error' });
  }
}

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