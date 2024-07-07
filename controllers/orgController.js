const db = require('../models'); // Adjust path as necessary
const Organisation = db.Organisation;

exports.getAllOrganisations = async (req, res) => {
  try {
    const organisations = await Organisation.findAll();
    res.json(organisations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createOrganisation = async (req, res) => {
  try {
    const organisation = await Organisation.create(req.body);
    res.status(201).json(organisation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
