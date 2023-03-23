const Diagnosis = require("../../models/Diagnosis");

const getDiagnosis = async (req, res) => {
  const userID = req.user.id;
  const diagnosis = await Diagnosis.find({ userID: userID }).exec();
  res.json(diagnosis);
};

module.exports = getDiagnosis;
