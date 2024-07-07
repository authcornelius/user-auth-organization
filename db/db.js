// sequelize.js

const { Sequelize } = require('sequelize');

// Example connection URL (replace with your actual database URL)
const DATABASE_URL = 'postgres://postgres:postgres@localhost:5432/postgres';

// Initialize Sequelize with the connection URL
const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres', // Specify the dialect (postgres, mysql, sqlite, etc.)
  logging: false, // Disable logging (optional)
});

// Example model definition
const User = sequelize.define('User', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Sync the model with the database
sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

module.exports = {
  sequelize,
  User,
  // Add other models here if needed
};
