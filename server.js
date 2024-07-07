const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth'); // Adjust path if necessary

const server = express();

// Middleware to parse JSON bodies
server.use(bodyParser.json());

// Mount auth routes
server.use('/api/auth', authRoutes);

// 404 handler
server.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

module.exports = server;
