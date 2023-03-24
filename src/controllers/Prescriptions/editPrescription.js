const Prescription = require("../../models/Prescription");

const editPrescription = async (req, res) => {
  const prescriptionID = req.body.id;
  const name = req.body.name;
  const dosage = req.body.dosage;
  const userID = req.user.id;
  const query = { _id: prescriptionID };
  const prescription = await Prescription.findOne(query);
  console.log(prescription);
  if (prescription != null) {
    await Prescription.findOneAndUpdate(query, {
      $set: {
        dosage: dosage,
        name: name,
      },
    });
    const prescriptions = await Prescription.find({ userID: userID }).exec();
    res.json(prescriptions);
    // res.send("Prescription updated successfully!");
  } else {
    res.status(401).send("Sorry an error occured, please try again.");
  }
};

module.exports = editPrescription;
