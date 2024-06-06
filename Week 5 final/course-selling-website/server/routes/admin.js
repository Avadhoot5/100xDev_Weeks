const mongoose = require('mongoose');
const express = require('express');
const { User, Course, Admin} = require('../db');
const jwt = require('jsonwebtoken');
const {authVerify, SECRET} = require('../middleware/auth');

const router = express.Router();

// Admin routes
router.get('/me', authVerify, async (req, res) => {
  const admin = await Admin.findOne({username: req.user.username });
  if (!admin) {
    res.status(403).json("Admin does not exist");
  }
  res.json({username: admin.username})
})

router.post('/signup', async (req, res) => {
    // logic to sign up admin
    const {username, password} = req.body;
    const admin = await Admin.findOne({username});
    if (admin) {
      res.status(403).json("Admin already exists");
    } else {
      const newAdmin = new Admin({username, password});
      await newAdmin.save();
      const token = jwt.sign({username, role: 'admin'}, SECRET, {expiresIn: '1h'});
      res.status(200).json({"message": 'Admin created successfully', "token": token});
    }
  });
  
router.post('/login', async (req, res) => {
    // logic to log in admin
    const {username, password} = req.body;
    const admin = await Admin.findOne({username, password});
    if (admin) {
      const token = jwt.sign({username, role: 'admin'}, SECRET, {expiresIn: '1h'})    
      res.status(200).json({"message": 'Logged in successfully', "token": token});
    } else {
      res.status(403).json("Admin authorization failed");
    }
  });
  
  
router.post('/courses', authVerify, async (req, res) => {
    // logic to create a course
    const course = new Course(req.body);
    await course.save();
    res.json({message: "Course created successfully", courseId: course.id});
  });
  
  
router.put('/courses/:courseId', authVerify, async (req, res) => {
    // logic to edit a course
    const course = await Course.findByIdAndUpdate(req.params.courseId, req.body);
    if (course) {
      res.json({ message: 'Course updated successfully' });
    } else {
      res.status(403).json("Course not found");
    }
  });
  
  
router.get('/courses', authVerify, async (req, res) => {
    // logic to get all courses
    const courses = await Course.find({});
    res.json(courses);
  });

router.get('/course/:courseId', authVerify, async (req, res) => {
  const courseId = req.params.courseId;
  const course = await Course.findById(courseId);
  res.json({course});
})

module.exports = router;