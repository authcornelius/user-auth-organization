const existingEmails = ['john@example.com']; // Mocked existing emails

const register = async (req, res) => {
  try {
    const { firstName, lastName, email, phone } = req.body;
    if (!firstName || !lastName || !email || !phone) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    // Check for duplicate email
    if (existingEmails.includes(email)) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    // Simulate adding email to existing emails list
    existingEmails.push(email);

    const user = { firstName, lastName, email, phone };
    res.status(201).json({ data: { user } });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    // Simulate user login
    if (email !== 'john@example.com' || password !== 'password123') {
      return res.status(400).json({ error: 'Invalid email or password' });
    }
    const user = { firstName: 'John', lastName: 'Doe', email };
    res.status(200).json({ data: { user } });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = { register, login };
