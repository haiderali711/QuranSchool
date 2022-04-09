const express = require("express");
const router = express.Router();

const TeacherController = require("../controllers/teacher");

router.post("/", TeacherController.createTeacher);

router.get("/:id", TeacherController.findTeacherWithId);

router.patch("/:id", TeacherController.updateTeacherWithId);

router.patch("/:tid/studentAdd/:sid",TeacherController.addStudentToTeacher);

router.patch("/:tid/studentRem/:sid", TeacherController.removeStudentFromTeacher);

module.exports = router;