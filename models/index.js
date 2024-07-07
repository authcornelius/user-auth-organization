const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.js')[process.env.NODE_ENV || 'development'];

const sequelize = new Sequelize(config.url, config);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Initialize models
db.User = require('./user')(sequelize, DataTypes);
db.Organisation = require('./organisation')(sequelize, DataTypes);

// Define associations
db.User.belongsToMany(db.Organisation, { through: 'UserOrganisations' });
db.Organisation.belongsToMany(db.User, { through: 'UserOrganisations' });

module.exports = db;
