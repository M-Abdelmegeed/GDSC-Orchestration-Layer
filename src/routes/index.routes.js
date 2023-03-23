const express = require("express");
const addContact = require("../controllers/addContact");
const generateOTP = require("../controllers/generateOTP");
const getContacts = require("../controllers/getContacts");
const registerUser = require("../controllers/registerUser");
const { userLogin, authenticateToken } = require("../controllers/userLogin");

const router = express.Router();
router.post("/generateOTP", generateOTP);
router.post("/registerUser", registerUser);
router.post("/login", userLogin);
router.post("/addContact", authenticateToken, addContact);
router.post("/getContacts", authenticateToken, getContacts);

module.exports = router;
