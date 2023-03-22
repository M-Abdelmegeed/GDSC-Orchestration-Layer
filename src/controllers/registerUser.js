require("dotenv").config();
const User = require("../models/User");
const OTPModel = require("../models/OTP");
const bcrypt = require("bcrypt");

const generateID = (length) => {
  return Math.round(
    Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)
  )
    .toString(36)
    .slice(1);
};

const registerUser = async (req, res) => {
  const body = req.body;
  const OTP = body.OTP;
  const otp = await OTPModel.find({ number: OTP });
  console.log(otp);
  if (otp.length > 0) {
    const newUser = new User({
      ID: generateID(8).toString(),
      fullName: body.fullName,
      email: body.email,
      phone: body.phone,
      DOB: body.DOB,
      password: body.password,
      gender: body.gender,
    });

    bcrypt.hash(
      newUser.password + process.env.PEPPER,
      +process.env.SALT_ROUNDS || "",
      async (err, hash) => {
        newUser.password = hash;
        await newUser.save();
        res.send("New User Saved");
      }
    );
  } else {
    res.send("Invalid OTP");
  }
};

module.exports = registerUser;
