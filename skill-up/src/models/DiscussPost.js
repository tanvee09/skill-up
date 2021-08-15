const mongoose = require('mongoose');
const { Users } = require('./User');
const { Course } = require('./Course');

const postSchema = new mongoose.Schema({
    // _id : mongoose.Schema.Types.String,
    uid : {
        type : String,
        required : true
    },
    author: {
        type: String
    },
    date :{
        type : Date
    },
    content :{
        type : String,
        required :true 
    },
    title: {
        type: String,
        required: true
    },
    cid: {
        type :String,
        ref: Course
    }
});

const DiscussPost = mongoose.model("DiscussPost" , postSchema)

module.exports = {DiscussPost}