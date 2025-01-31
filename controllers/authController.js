const jwt = require('jsonwebtoken');
require('dotenv').config();

const existingEmails = []; // Simulate an existing email list for demonstration

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, phone } = req.body;

    // Validation: Check if all fields are provided
    if (!firstName || !lastName || !email) {
      return res.status(400).json({
        status: 'fail',
        statusCode: 400,
        message: 'All fields are required',
        error: 'Missing required fields'
      });
    }

    // Validation: Check for duplicate email
    if (existingEmails.includes(email)) {
      return res.status(400).json({
        status: 'fail',
        statusCode: 400,
        message: 'User with email already exists',
        error: 'Duplicate email'
      });
    }

    // Simulate adding email to existing emails list
    existingEmails.push(email);

    const user = { firstName, lastName, email, phone };

    // Generate token
    const token = jwt.sign(
      { email: user.email, firstName: user.firstName, lastName: user.lastName },
      process.env.JWT_SECRET, // Use a secure secret key
      
    );

    return res.status(201).json({
      status: 'success',
      statusCode: 201,
      message: 'User registered successfully',
      data: { accessToken: token, user },
      
    });
  } catch (error) {
    console.error('Registration error:', error);
    return res.status(500).json({
      status: 'error',
      statusCode: 500,
      message: 'Internal server error',
      error: error.message
    });
  }
};


const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Validation: Check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({
        status: 'fail',
        statusCode: 400,
        message: 'Email and password are required',
        error: 'Missing email or password'
      });
    }

    // Simulate user login with hardcoded credentials
    if (email !== 'john@example.com' || password !== 'password123') {
      return res.status(400).json({
        status: 'fail',
        statusCode: 400,
        message: 'Invalid email or password',
        error: 'Incorrect email or password'
      });
    }

    // Construct user object for successful login
    const user = { firstName: 'John', lastName: 'Doe', email };

    // Generate token
    const token = jwt.sign(
      { email: user.email, firstName: user.firstName, lastName: user.lastName },
      process.env.JWT_SECRET, // Ensure this is properly set
      { expiresIn: '1h' }
    );

    res.status(200).json({
      status: 'success',
      statusCode: 200,
      message: 'Login successful',
      data: {
        accessToken: token, 
        user },
      
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      status: 'error',
      statusCode: 500,
      message: 'Internal server error',
      error: error.message
    });
  }
};


module.exports = { register, login };
