const express = require("express");
const addContact = require("../controllers/Contact/addContact");
const addDiagnosis = require("../controllers/Diagnosis/addDiagnosis");
const addPrescription = require("../controllers/Prescriptions/addPrescription");
const generateOTP = require("../controllers/generateOTP");
const getContacts = require("../controllers/Contact/getContacts");
const getDiagnosis = require("../controllers/Diagnosis/getDiagnosis");
const getPrescriptions = require("../controllers/Prescriptions/getPrescriptions");
const registerUser = require("../controllers/registerUser");
const { userLogin, authenticateToken } = require("../controllers/userLogin");
const deleteContact = require("../controllers/Contact/deleteContact");
const deletePrescription = require("../controllers/Prescriptions/deletePrescription");
const deleteDiagnosis = require("../controllers/Diagnosis/deleteDiagnosis");

const router = express.Router();
router.post("/generateOTP", generateOTP);
router.post("/registerUser", registerUser);
router.post("/login", userLogin);
router.post("/addContact", authenticateToken, addContact);
router.post("/getContacts", authenticateToken, getContacts);
router.post("/addPrescription", authenticateToken, addPrescription);
router.post("/getPrescriptions", authenticateToken, getPrescriptions);
router.post("/addDiagnosis", authenticateToken, addDiagnosis);
router.post("/getDiagnosis", authenticateToken, getDiagnosis);
router.post("/deleteContact", authenticateToken, deleteContact);
router.post("/deletePrescription", authenticateToken, deletePrescription);
router.post("/deleteDiagnosis", authenticateToken, deleteDiagnosis);

module.exports = router;
