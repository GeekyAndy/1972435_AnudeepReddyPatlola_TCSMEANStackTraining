const express = require("express")
const router = express.Router()
const CourseController = require("../controller/course.controller")

router.get("/",CourseController.displayIndex)

router.get("/store",CourseController.addCoursePage)
router.post("/store",CourseController.addsCourse)

router.get("/retrieve",CourseController.retrievesCourses)

router.get('/update',CourseController.updateCoursePage)
router.post('/update',CourseController.updatesCourse)

router.get('/delete',CourseController.deleteCoursePage)
router.post('/delete',CourseController.deletesCourse)

module.exports = router