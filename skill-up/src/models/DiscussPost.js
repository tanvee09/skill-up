const mongoose = require('mongoose');
const { User } = require('./User');

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
    }
});

const DiscussPost = mongoose.model("DiscussPost" , postSchema)

module.exports = {DiscussPost}