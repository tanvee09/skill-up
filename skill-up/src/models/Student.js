const mongoose = require('mongoose');
import { User } from 'User.js'
import { Course } from 'Course.js'


const studentSchema = new mongoose.Schema({
    _id : String,
    
    userid: {
        type : mongoose.Schema.Types.String,
        ref = User,
        unique : true
    },
    
    enrolled :{ 
        type : [{type : mongoose.Schema.Types.String , ref: Course}]
    }
});

const Student = mongoose.model("Student" , studentSchema)

module.exports = { Student }