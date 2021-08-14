const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id : String,
    name: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address :{
        type: String,
    },
    student : {
        type : Boolean,
        defaultValue : false
    },
    instructor : {
        type : Boolean,
        defaultValue : false
    }
});

const User = mongoose.model("user" , userSchema)

module.exports = {User}