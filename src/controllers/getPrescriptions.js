const Prescription = require("../models/Prescription");

const getPrescriptions = async (req, res) => {
  const userID = req.user.id;
  const prescriptions = await Prescription.find({ userID: userID }).exec();
  res.json(prescriptions);
};

module.exports = getPrescriptions;
