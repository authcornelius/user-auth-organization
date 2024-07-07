const app = require('./server');
const { sequelize } = require('./models'); // Adjust path if necessary

const port = process.env.PORT || 5000;

sequelize.sync().then(() => {
  console.log('Database synced successfully');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
