const mongoose = require('mongoose');
const { User } = require('./User');
const { DiscussPost} = require('./DiscussPost');

const commentSchema = new mongoose.Schema({
    uid : {
        type : String,
        required : true
    },
    author : {
        type: String
    },
    date :{
        type : Date
    },
    content :{
        type : String,
        required :true 
    },
    post : {
        type : String,
        ref : DiscussPost
    }
});

const Comment = mongoose.model("Comment" , commentSchema)

module.exports = {Comment}