const jwt = require('jsonwebtoken');

// verify JWT token and attach user to request
// Middleware to authenticate user based on JWT token

const authMiddleware = async function (req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer')) {
        res.setHeader('Content-Type', 'application/json');
        res.status(401).json({
            error: 'Unauthorized. Token missing.'
        });
        return;
    }

    try {
        const token = authHeader.split(' ')[1];
        const decode = await jwt.verify(token, process.env.JWT_SECRET);

        req.user = decode;
        next();
    } catch (error) {
        res.setHeader('Content-Type', 'application/json');
        res.status(401).json({
            error: 'Unauthorized. Invalid token.'
        });
        return;
    }

}

module.exports = authMiddleware;