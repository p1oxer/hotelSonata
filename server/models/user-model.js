const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    email: { type: String, unique: true, required: true },
    phone: { type: String, required: true },
    fullName: { type: String, required: true },
    password: { type: String, required: true },
    isActivated: { type: Boolean, default: false },
    activationLink: { type: String },
    room: {type: Number}
});

module.exports = model("User", UserSchema);
