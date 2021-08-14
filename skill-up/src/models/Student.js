const mongoose = require('mongoose');
const { Users } =  require('./User.js')
const { Course } = require('./Course.js')


const studentSchema = new mongoose.Schema({
    _id : String,
    
    userid: {
        type : mongoose.Schema.Types.String,
        ref : Users,
        unique : true
    },
    
    enrolled :{ 
        type : [{type : mongoose.Schema.Types.String , ref: Course}]
    }
});

const Student = mongoose.model("Student" , studentSchema)

module.exports = { Student }