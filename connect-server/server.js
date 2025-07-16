const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// DB Connection
const connectDB = require('./config/db');

// Route Imports
const authRoutes = require('./routers/authRoutes');
const settingsRoutes = require('./routers/settingsRoutes');
const profileRoutes = require('./routers/profileRoutes');

// PORT
const PORT = process.env.PORT || 8000;

// Connect Database
connectDB();

// Middlewares
app.use(cors({
    origin: ['https://connect-link-three.vercel.app', 'http://localhost:5173'],
    credentials: true
}));

// Increased body size limit
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: true }));

// Routes
app.use('/api/auth', authRoutes); // For auth
app.use('/api/settings', settingsRoutes); // For settings
app.use('/api/profile', profileRoutes); //  for profile

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hey Server is running on render."
    });
})

// App listner
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));