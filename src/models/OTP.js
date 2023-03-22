const mongoose = require("mongoose");

const OTPSchema = new mongoose.Schema({
  number: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
    index: { expires: 300 },
  },
});

module.exports = mongoose.model("OTP", OTPSchema);
