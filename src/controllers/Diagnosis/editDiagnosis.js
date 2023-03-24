const Diagnosis = require("../../models/Diagnosis");

const editDiagnosis = async (req, res) => {
  const diagnosisID = req.body.id;
  const type = req.body.type;
  const priority = req.body.priority;
  const title = req.body.title;
  const message = req.body.message;
  const value1 = req.body.value1;
  const value2 = req.body.value2;
  const value3 = req.body.value3;
  const value4 = req.body.value4;
  const date = req.body.date;
  const userID = req.user.id;
  const query = { _id: diagnosisID };
  const diagnosis = await Diagnosis.findOne(query);
  console.log(diagnosis);
  if (diagnosis != null) {
    await Diagnosis.findOneAndUpdate(query, {
      $set: {
        date: date,
        type: type,
        priority: priority,
        title: title,
        message: message,
        value1: value1,
        value2: value2,
        value3: value3,
        value4: value4,
      },
    });
    const diagnosis = await Diagnosis.find({ userID: userID }).exec();
    res.json(diagnosis);
    // res.send("Diagnosis updated successfully!");
  } else {
    res.status(401).send("Sorry an error occured, please try again.");
  }
};

module.exports = editDiagnosis;
