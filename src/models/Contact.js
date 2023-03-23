const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
  relation: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Contact", ContactSchema);
