const Diagnosis = require("../../models/Diagnosis");

const deleteDiagnosis = async (req, res) => {
  const id = req.body.id;
  const userID = req.user.id;
  await Diagnosis.deleteOne({ _id: id });
  const diagnosis = await Diagnosis.find({ userID: userID }).exec();
  res.json(diagnosis);
};

module.exports = deleteDiagnosis;
