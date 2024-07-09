const request = require('supertest');
const app = require('../app'); // Adjust path as necessary
const { register } = require('../routes/auth');

describe('Auth API', () => {
    it('should register a user successfully with default organisation', async () => {
      const userData = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        phone: '1234567890'
      };

      const res = await request(app) // Use app here instead of register
        .post('/auth/register')
        .send(userData);

      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('data');
      expect(res.body.data.user.firstName).toEqual('John');
      expect(res.body.data.user.lastName).toEqual('Doe');
    });

  it('should log in a user successfully', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({
        email: 'john@example.com',
        password: 'password123'
      });

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data.user.firstName).toEqual('John');
    expect(res.body.data.user.lastName).toEqual('Doe');
  });

  it('should fail if required fields are missing during registration', async () => {
    const res = await request(app)
      .post('/auth/register')
      .send({
        email: 'jane@example.com'
      });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });

  it('should fail if there is a duplicate email during registration', async () => {
    await request(app)
      .post('/auth/register')
      .send({
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@example.com',
        phone: '9876543210'
      });

    const res = await request(app)
      .post('/auth/register')
      .send({
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'jane@example.com',
        phone: '9876543210'
      });

    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error');
  });
});
