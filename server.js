const app = require('./app');
const { sequelize } = require('./models');

const port = process.env.PORT || 5000;

sequelize.sync().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
});
