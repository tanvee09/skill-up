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
});

const Users = mongoose.model("Users" , userSchema)

module.exports = {Users}