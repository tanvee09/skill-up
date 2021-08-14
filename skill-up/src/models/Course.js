import { Instructor } from 'Instructor.js';
import { Lecture } from './Lecture';
const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
    _id : String,

    title : {
        type : String,
        required : true
    },

    date:{
        type: Date
    },

    content: {
        type : String,
        required : true
    }
});

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
        type: [lectureSchema], 
    },

    numEnrolled: {
        type : Number,
        defaultValue: 0
    } 
    
});

const Course = new mongoose.model("Course", courseSchema);

module.exports = { Course };