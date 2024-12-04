const express = require('express');
const jwt = require('jsonwebtoken');
const Task = require('../models/Task');
const User = require('../models/User');

const router = express.router();

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorisation'];
    if (!token) return res.status(401).json({ error: 'Access denied, no token provided '});

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.user = user;
        next();
    });
};

// Create a new task
router.post('/', authenticateToken, async (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are requried' });
    }

    try {
        const task = new Task({
            title,
            description,
            userId: req.user.id, // Add user ID from JWT
        });

        await task.save();
        res.status(201).json({ message: 'Task created successfully', task });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error while creating task' });
    }
});

// Get all tasks for the logged-in user
router.get('/', authenticateToken, async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.id });
        res.status(200).json(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error while fetching tasks' });
    }
});

module.exports = router;