const express = require('express');
const { register, login } = require('../controllers/authController'); // Adjust path as necessary

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;
