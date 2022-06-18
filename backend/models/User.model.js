const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    fName: {
        type: String,
        required: true,
    },
    lName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    number: {
        type: Number,
        required: true,
        unique: true,
    },
    cart: [Object],
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
