const express = require("express");
const addContact = require("../controllers/addContact");
const addPrescription = require("../controllers/addPrescription");
const generateOTP = require("../controllers/generateOTP");
const getContacts = require("../controllers/getContacts");
const getPrescriptions = require("../controllers/getPrescriptions");
const registerUser = require("../controllers/registerUser");
const { userLogin, authenticateToken } = require("../controllers/userLogin");

const router = express.Router();
router.post("/generateOTP", generateOTP);
router.post("/registerUser", registerUser);
router.post("/login", userLogin);
router.post("/addContact", authenticateToken, addContact);
router.post("/getContacts", authenticateToken, getContacts);
router.post("/addPrescription", authenticateToken, addPrescription);
router.post("/getPrescriptions", authenticateToken, getPrescriptions);

module.exports = router;
