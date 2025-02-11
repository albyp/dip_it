const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

// Route pointers
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');

// Load .env config
dotenv.config();

const app = express();

// Middleware
app.use(cors())
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Default route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI) 
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/auth', authRoutes);
app.use('/tasks', taskRoutes);

// Define port and start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// MongoDB Error Logging
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
