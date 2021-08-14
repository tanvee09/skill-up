const mongoose = require('mongoose');
const { User } = require('./User');

const instructorSchema = new mongoose.Schema({
    _id : String,
    user: {
        type : mongoose.Schema.Types.String,
        ref = User,
        unique: true
    }
});

const Instructor = mongoose.model("Instructor" , instructorSchema)

module.exports = {Instructor}