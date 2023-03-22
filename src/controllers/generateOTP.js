const OTPModel = require("../models/OTP");
require("dotenv").config();
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const generateOTP = async (req, res) => {
  const OTP = Math.floor(Math.random() * 899999 + 100000);
  const newOTP = new OTPModel({
    number: OTP,
    timestamp: new Date(),
  });
  await newOTP.save();
  const msg = {
    to: req.body.email,
    from: "gdsc.healthcareproject@gmail.com",
    templateId: "d-ba10547636854dc58f7a08b6b46760e2",
    dynamicTemplateData: { OTP: OTP.toString() },
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent successfully");
    })
    .catch((error) => {
      console.error(error);
    });
  res.send("OTP saved and email sent ya man!");
};
module.exports = generateOTP;
