require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const userLogin = async (req, res) => {
  // Authenticate User
  const email = req.body.email;
  const password = req.body.password;
  const person = await User.findOne({ email: email }).exec();
  // Encrypted passwords
  const match = bcrypt.compareSync(
    password + process.env.PEPPER,
    person.password
  );
  if (match) {
    //login
    const user = {
      fullName: person.fullName,
      id: person._id, // MongoDB auto generated id
      ID: person.ID, // Alphanumeric generated ID
    };
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1800s",
    });
    res.json({
      accessToken: accessToken,
    });
  } else {
    res.status(400).send("Invalid user credentials!");
  }
};

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader;
  if (token == null) return res.sendStatus(404);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).send("Invalid token");
    req.user = user;
    next();
  });
};

module.exports = { userLogin, authenticateToken };
