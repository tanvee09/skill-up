const { Users } = require('./User');
const { Course } = require('./Course.js');
const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
    
    uid: {
        type : mongoose.Schema.Types.ObjectId,
        ref : Users
    },
    
    cid:{
        type : mongoose.Schema.Types.ObjectId,
        ref : Course
    }
});

const Instructor = mongoose.model("Instructor" , instructorSchema)

module.exports = {Instructor}