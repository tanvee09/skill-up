const { Users } = require('./User');
const { Course } = require('./Course.js');
const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    
    uid: {
        type : String,
        ref : Users
    },
    
    cid:{
        type : mongoose.Schema.Types.ObjectId,
        ref : Course
    }
});

const Student = mongoose.model("Student" , studentSchema)

module.exports = { Student }