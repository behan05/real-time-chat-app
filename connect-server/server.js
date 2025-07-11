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
app.use(cors());
app.use(express.json()); // Parses incoming JSON

// Routes
app.use('/api/users', authRoutes); // For auth
app.use('/api/settings', settingsRoutes); // For settings

// App listner
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));