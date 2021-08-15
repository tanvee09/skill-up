const { Users } = require('./User.js');
const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
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

    title: {
        type: String,
        required: true
    },
    
    uid: {
        type :mongoose.Schema.Types.String,
        ref: Users,
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
        type : Number
    } 
    
});

const Course = new mongoose.model("Course", courseSchema);

module.exports = { Course };