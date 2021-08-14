const mongoose = require('mongoose');
const { User } = require('./User');
const { DiscussPost} = require('./DiscussPost');

const postSchema = new mongoose.Schema({
    _id : String,
    author : {
        type : mongoose.Schema.Types.String,
        ref = User,
        required : true
    },
    date :{
        type : Date
    },
    content :{
        type : String,
        required :true 
    },
    post : {
        type : mongoose.Schema.Types.String,
        ref : DiscussPost
    }
});

const DiscussPost = mongoose.model("DiscussPost" , postSchema)

module.exports = {DiscussPost}