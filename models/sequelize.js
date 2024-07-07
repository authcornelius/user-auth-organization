const { Sequelize } = require('sequelize');
const config = require('./config/config')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(config.url, {
  dialect: 'postgres',
  logging: false, // Disable logging (you can enable it for debugging)
});

module.exports = sequelize;
