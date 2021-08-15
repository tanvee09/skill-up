const { Users } = require('./User');
const { Course } = require('./Course');
const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    uid: {
        type : mongoose.Schema.Types.String,
        unique:false,
        ref : Users
    },
    
    cid:{
        type : mongoose.Schema.Types.ObjectId,
        unique:false,
        ref : Course
    }
});

const Student = mongoose.model("Student" , studentSchema)

module.exports = { Student }