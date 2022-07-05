const express = require('express');
const {
    getCourses,
    getCourse,
    addCourse,
    updateCourse,
    deleteCourse
} = require('../controllers/courses');

const Course = require('../models/Course');

const router = express.Router({ mergeParams: true });

router.route('/').get(getCourses)

module.exports = router;