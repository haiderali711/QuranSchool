const express = require("express");
const router = express.Router();

const StudentController = require("../controllers/student");

router.post("/", StudentController.createStudent);

router.get("/pn/:personalNumber", StudentController.findStudentWithPersonalNumber);

router.get("/:id", StudentController.findStudentWithId);

router.patch("/:id", StudentController.updateStudentWithId);

router.delete("/:id", StudentController.deleteStudentWithId);

module.exports = router;