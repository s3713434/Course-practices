const express = require('express')
const router = express.Router()

const Course = require('../models/Course')

// create a new course
router.post('/courses', async (req, res) => {
  try {
    const course = new Course(req.body)
    await course.save()
    res.status(201).json(course)
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = {}
      for (const field in error.errors) {
        errors[field] = error.errors[field].message
      }
      return res.status(400).json({ errors })
    }
    res.status(400).json({ error: error.message })
  }
})

// get all course
router.get('/courses', async (req, res) => {
  try {
    const courses = await Course.find()
    res.status(200).json(courses)
  } catch (error) {
    console.error('Error fetching courses:', error)
    res.status(500).json({ error: 'Internal server error.' })
  }
})

// get one

// delete course by id
router.delete('/courses/:id', async (req, res) => {
  const courseId = req.params.id
  try {
    const course = await Course.findByIdAndDelete(courseId)
    if (!course) {
      return res.status(404).json({ error: 'Course not found' })
    }
    res.json({ message: 'Course deleted' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
