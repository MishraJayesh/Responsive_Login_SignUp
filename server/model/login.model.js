const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({

    Email: {
        type: String,
        required: true,
        unique: true,
        max: 255,
        min: 6,
    },
    Password: {
        type: String,
        required: true,
        unique: true,
        max: 255,
        min: 6,
    }
})

const LoginModel = mongoose.model("LoginModel", LoginSchema);

module.exports = LoginModel;