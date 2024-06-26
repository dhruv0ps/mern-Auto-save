// server.js
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const dotenv = require('dotenv');

// Load config
dotenv.config();

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(cors());
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/save-form', require('./routes/api/save-form'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
