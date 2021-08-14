const { Users } = require('./User');
const { Course } = require('./Course.js');
const mongoose = require('mongoose');
const { Users } = require('./User');

const instructorSchema = new mongoose.Schema({
    _id : String,
    user: {
        type : String,
        ref : Users,
        unique: true
    }
});

const Instructor = mongoose.model("Instructor" , instructorSchema)

module.exports = {Instructor}