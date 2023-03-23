require("dotenv").config();
const Prescription = require("../../models/Prescription");

const addPrescription = async (req, res) => {
  console.log(req.user);
  const body = req.body;
  const newPrescription = new Prescription({
    userID: req.user.id, //mongoDB ObjectID
    from: body.from,
    dosage: body.dosage,
    name: body.name,
  });
  await newPrescription.save();
  res.send("New prescription added successfully!");
};
module.exports = addPrescription;
