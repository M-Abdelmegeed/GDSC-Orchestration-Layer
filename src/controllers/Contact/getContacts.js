const Contact = require("../../models/Contact");

const getContacts = async (req, res) => {
  const userID = req.user.id;
  const contacts = await Contact.find({ userID: userID }).exec();
  res.json(contacts);
};

module.exports = getContacts;
