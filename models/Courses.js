const mongoose = require('mongoose');

// Define schema
const courseSchema = new mongoose.Schema({
    course_name: String,
});

// Create model
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
