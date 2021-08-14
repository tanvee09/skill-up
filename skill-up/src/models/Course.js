const mongoose = require('mongoose');
import { Instructor } from 'Instructor.js';

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