const Contact = require("../../models/Contact");

const editContact = async (req, res) => {
  const contactID = req.body.id;
  const name = req.body.name;
  const relation = req.body.relation;
  const phone = req.body.phone;
  const userID = req.user.id;
  const query = { _id: contactID };
  const contact = await Contact.findOne(query);
  console.log(contact);
  if (contact != null) {
    await Contact.findOneAndUpdate(query, {
      $set: {
        relation: relation,
        name: name,
        phone: phone,
      },
    });
    const contacts = await Contact.find({ userID: userID }).exec();
    res.json(contacts);
    // res.send("Emergency contact updated successfully!");
  } else {
    res.status(401).send("Sorry an error occured, please try again.");
  }
};

module.exports = editContact;
