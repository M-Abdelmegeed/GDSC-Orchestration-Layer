const express = require("express");
const generateOTP = require("../controllers/generateOTP");
const registerUser = require("../controllers/registerUser");
const { userLogin } = require("../controllers/userLogin");

const router = express.Router();
router.post("/generateOTP", generateOTP);
router.post("/registerUser", registerUser);
router.post("/login", userLogin);

module.exports = router;
