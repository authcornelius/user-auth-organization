const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth'); // Adjust path if necessary

const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Mount auth routes
app.use('/api/auth', authRoutes);

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

module.exports = app;
