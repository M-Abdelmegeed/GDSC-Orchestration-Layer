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
const editContact = require("../controllers/Contact/editContact");
const editPrescription = require("../controllers/Prescriptions/editPrescription");
const editDiagnosis = require("../controllers/Diagnosis/editDiagnosis");

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
router.post("/editContact", authenticateToken, editContact);
router.post("/editPrescription", authenticateToken, editPrescription);
router.post("/editDiagnosis", authenticateToken, editDiagnosis);

module.exports = router;
