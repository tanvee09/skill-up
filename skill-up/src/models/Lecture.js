const mongoose = require('mongoose');

const lectureSchema = new mongoose.Schema({
    _id : String,
    content: {
        type : String,
        required : true
    }
});

const Lecture = mongoose.model("Lecture", lectureSchema)

module.exports = {Lecture}