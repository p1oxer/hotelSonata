const { Schema, model } = require("mongoose");

const RoomSchema = new Schema({
    id: { type: Number },
    name: { type: String },
    price: { type: Number },
    description: { type: String },
    facilities: { type: Array },
    booked: { type: Boolean, default: false },
    room: String
});

module.exports = model("Room", RoomSchema);
