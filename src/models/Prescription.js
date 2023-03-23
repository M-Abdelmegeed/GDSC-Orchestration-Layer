const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  dosage: {
    type: String,
    required: true,
  },
  from: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Prescription", prescriptionSchema);
