const express = require("express");
const router = express.Router();

const StudentController = require("../controllers/student");

router.post("/", StudentController.createStudent);

// router.get("/:id", StudentController.findStudentbyID);

// router.patch("/:id", StudentController.updateWithId);

// router.delete("/:id", StudentController.deleteUserWithId);

module.exports = router;