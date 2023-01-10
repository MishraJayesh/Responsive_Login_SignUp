const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({

    Name: {
        type: String,
        unique: true,
        required: true,
        min: 6,
        max: 255,
    },
    Mobile_No: {
        type: Number,
        required: true,
        unique: true,
        default: 0
    },
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

const UsersModel = mongoose.model("UsersModel", UsersSchema);

module.exports = UsersModel;