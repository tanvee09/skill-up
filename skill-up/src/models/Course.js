const { Instructor } = require('./Instructor.js');
const { Lecture } = require('./Lecture');
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    _id : String,
    
    title: {
        type: String,
        required: true
    },
    
    instructor: {
        type :mongoose.Schema.Types.ObjectId,
        ref: Instructor,
        required: true
    },
    
    introduction: {
        type: String,
        required: true
    },

    Lectures: {
        type: [{ type: mongoose.Schema.Types.String, ref: Lecture }], 
    },

    numEnrolled: {
        type : Number,
        defaultValue: 0
    } 
    
});

const Course = new mongoose.model("Course", courseSchema);

module.exports = { Course };