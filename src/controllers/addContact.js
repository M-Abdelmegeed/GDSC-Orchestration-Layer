require("dotenv").config();
const Contact = require("../models/Contact");

const addContact = async (req, res) => {
  console.log(req.user);
  const body = req.body;
  const newContact = new Contact({
    userID: req.user.id, //mongoDB ObjectID
    relation: body.relation,
    phone: body.phone,
    name: body.name,
  });
  await newContact.save();
  res.send("New contact added successfully!");
};
module.exports = addContact;
