const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// User Schema for database reference
const User = Schema({
    username: {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true
    },
    password: {
        type : String,
        required : true
    }
});

module.exports = mongoose.model("User",User)