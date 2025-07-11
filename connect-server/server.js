const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');

// Routers
const authRoutes = require('./routers/authRoutes');

// server PORT
const PORT = process.env.PORT || 8001;

// Connect Database
connectDB();

// Allowing frontend request
app.use(cors());

// parse json data into pure javascript object
app.use(express.json());

app.use('/api/users', authRoutes);

// App listner
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));