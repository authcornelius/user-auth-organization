module.exports = (sequelize, DataTypes) => {
  const Organisation = sequelize.define('Organisation', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Organisation;
};
