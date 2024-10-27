// server/controllers/userController.js
const User = require('../models/User');

const getUserProfile = async (req, res) => {
  res.json(req.user);
};

module.exports = { getUserProfile };
