const mongoose = require("mongoose");

const diagnosisSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  value1: {
    type: String,
    required: true,
  },
  value2: {
    type: String,
    required: true,
  },
  value3: {
    type: String,
    required: true,
  },
  value4: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  priority: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Diagnosis", diagnosisSchema);
