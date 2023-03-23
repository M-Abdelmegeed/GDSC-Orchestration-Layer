const Prescription = require("../../models/Prescription");

const deletePrescription = async (req, res) => {
  const id = req.body.id;
  const userID = req.user.id;
  await Prescription.deleteOne({ _id: id });
  const prescriptions = await Prescription.find({ userID: userID }).exec();
  res.json(prescriptions);
};

module.exports = deletePrescription;
