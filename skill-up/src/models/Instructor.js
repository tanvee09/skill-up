const { Users } = require('./User');
const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
    _id : String,
    uid: {
        type : String,
        ref : Users,
        unique: true
    }
});

const Instructor = mongoose.model("Instructor" , instructorSchema)

module.exports = {Instructor}