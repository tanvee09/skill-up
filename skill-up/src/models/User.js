const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // _id : String,

    uid:{
        type: String,
        required: true
    },
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

const Users = mongoose.model("Users" , userSchema)

module.exports = {Users}