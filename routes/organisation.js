const express = require('express');
const router = express.Router();
const organisationController = require('../controllers/orgController');

// Define routes
router.get('/all', organisationController.getAllOrganisations);
router.post('/create', organisationController.createOrganisation);

module.exports = router;
