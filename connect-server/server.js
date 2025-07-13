const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

// DB Connection
const connectDB = require('./config/db');

// Route Imports
const authRoutes = require('./routers/authRoutes');
const settingsRoutes = require('./routers/settingsRoutes');

// PORT
const PORT = process.env.PORT || 8001;

// Connect Database
connectDB();

// Middlewares
app.use(cors({
    origin: ['https://connect-link-three.vercel.app', 'http://localhost:5173'],
    credentials: true
}));

app.use(express.json()); // Parses incoming JSON

// Routes
app.use('/api/auth', authRoutes); // For auth
app.use('/api/settings', settingsRoutes); // For settings

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Hey Server is running on render."
    });
})

// App listner
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));