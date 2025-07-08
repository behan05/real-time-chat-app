// Auth Routers

const Routers = require('express').Router();
const {
    registerController,
    loginController,
    forgetPasswordController
} = require('../controllers/authController');

// Create new Account Routes
Routers.post('/register', registerController);

// Login
Routers.post('/login', loginController);

// Forget password
Routers.post('/forgetPassword', forgetPasswordController);

module.exports =  Routers;