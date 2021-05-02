const express = require("express");
const {
	/*getStudentCohort,*/ getStudentCourses,
	getStudentSessionPlans,
	getStudentSections,
	getContent,
	getStudentAssessments,
} = require("../controllers/studentController.js");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// router.route('/cohort').post(getStudentCohort)
router.route("/courses").post(getStudentCourses);
router.route("/sessions").post(getStudentSessionPlans);
router.route("/sections").post(getStudentSections);
router.route("/content").post(getContent);
router.route("/studentassessment").post(getStudentAssessments);

module.exports = router;
