const express = require("express");
//const { route } = require('express/lib/application');
const Course = require("../models/course");

const router = express.Router();

// Creating the routes

router.get("/", (req, res) => {
    res.send({ message: "API Running" });
});

// // Get all Courses
router.get("/courses/", async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.json(err);
    }
});

// Get single couses
router.get("/course/:courseId", async (req, res) => {
    const courseId = req.params.courseId;
    try {
        const course = await Course.findById(courseId);
        res.json(course);
    } catch (err) {
        res.json(err);
    }
});

// Create course

router.post("/course/", async (req, res) => {
    try {
        const course = await Course.create(req.body);
        res.json(course);
    } catch (error) {
        res.json(error);
    }
});

// Delete Course
router.delete("/course/:courseId", async (req, res) => {
    try {
        await Course.remove({
            _id: req.params.courseId,
        });
        res.status(200).json({
            message: "Deleted successfully",
        });
    } catch (error) {
        res.json({
            message: error,
        });
    }
});

// Get by title

router.get("/course/title/:title", async (req, res) => {
    const title = req.params.title;
    console.log(title);
    try {
        const course = await Course.find({ title: title });
        res.json(course);
    } catch (err) {
        res.json(err);
    }
});

// Update course by id
router.put("/:courseId", async (req, res) => {
    const courseId = req.params.courseId;

    try {
        const course = await Course.updateOne(
            {
                _id: courseId,
            },
            req.body
        );
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;
