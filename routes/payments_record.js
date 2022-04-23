const express = require("express");
const router = express.Router();

const PaymentsRecordController = require("../controllers/payments_record");

router.post("/", PaymentsRecordController.createPaymentTermRecord);

router.delete("/:id", PaymentsRecordController.deletePaymentTermRecordById);

router.patch("/:termId/studentAdd/:sid",PaymentsRecordController.addStudentAsPayingToTerm);

router.patch("/:termId/studentRem/:sid", PaymentsRecordController.removeStudentAsPayingToTerm);

module.exports = router;