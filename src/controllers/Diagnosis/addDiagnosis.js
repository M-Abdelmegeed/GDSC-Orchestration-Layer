require("dotenv").config();
const Diagnosis = require("../../models/Diagnosis");

const addDiagnosis = async (req, res) => {
  console.log(req.user);
  const body = req.body;
  const newDiagnosis = new Diagnosis({
    userID: req.user.id, //mongoDB ObjectID
    date: body.date,
    type: body.type,
    priority: body.priority,
    title: body.title,
    message: body.message,
    value1: body.value1,
    value2: body.value2,
    value3: body.value3,
    value4: body.value4,
  });
  await newDiagnosis.save();
  res.send("New diagnosis added successfully!");
};
module.exports = addDiagnosis;
