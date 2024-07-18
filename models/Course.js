const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    minlength: [5, 'Title must be at least 5 characters long.'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
  },
  instructor: {
    type: String,
    required: [true, 'Instructor is required'],
  },
  duration: {
    type: Number,
    required: [true, 'Duration is required'],
    min: [0, 'Duration must be positive number.'],
  },
})

module.exports = mongoose.model('Course', courseSchema)
