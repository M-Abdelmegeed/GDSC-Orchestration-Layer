const Contact = require("../../models/Contact");

const deleteContact = async (req, res) => {
  const id = req.body.id;
  const userID = req.user.id;
  await Contact.deleteOne({ _id: id });
  const contacts = await Contact.find({ userID: userID }).exec();
  res.json(contacts);
};

module.exports = deleteContact;
