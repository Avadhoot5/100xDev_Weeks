const express = require('express');
const { User, Course, Admin} = require('../db');
const jwt = require('jsonwebtoken');
const {authVerify, SECRET} = require('../middleware/auth');

const router = express.Router();

// User routes
router.post('/signup', async (req, res) => {
    // logic to sign up user
    const {username, password} = req.body;
    const user = await User.findOne({username});
    if (user) {
      res.status(403).json("User already exists");
    } else {
      const newUser = new User({username, password});
      await newUser.save();
      const token = jwt.sign({username, role: 'user'}, SECRET, {expiresIn: '1h'});
      res.status(200).json({"message": 'User created successfully', "token": token}); 
    }
  });
  
  router.post('/login', async (req, res) => {
    // logic to log in user
    const {username, password} = req.headers;
    const user = await User.findOne({username, password});
    if (user) {
      const token = jwt.sign({username, role: 'user'}, SECRET, {expiresIn: '1h'});
      res.status(200).json({"message": 'Logged in successfully', "token": token});
    } else {
      res.status(403).json("User auth failed");
    }
  });
  
  router.get('/courses', authVerify, async (req, res) => {
    // logic to list all courses
    const courseList = await Course.find({published: true});
    res.json(courseList);
  });
  
  router.post('/courses/:courseId', authVerify, async (req, res) => {
    // logic to purchase a course
    const course = await Course.findById(req.params.courseId);
    if (course) {
      const user = await User.findOne({username: req.user.username});
      if (user) {
        user.purchasedCourses.push(course);
        await user.save();
        res.json({ message: 'Course purchased successfully' });
      } else {
        res.status(403).json("User not found");
      }
    } else {
      res.status(404).json("Course not found");
    }
  });
  
  router.get('/purchasedCourses', authVerify, async (req, res) => {
    // logic to view purchased courses
    const user = await User.findOne({username: req.user.username}).populate("purchasedCourses");
    if (user) {
      res.json({"purchasedCourses": user.purchasedCourses || []});
    } else {
      res.status(403).json("User not found");
    }
  });

module.exports = router;