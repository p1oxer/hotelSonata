const { Schema, model } = require("mongoose");

const ReservationSchema = new Schema({
    user: { type: Schema.Types.ObjectId, required: true },
    room: { type: Schema.Types.ObjectId, required: true },
    checkInDate: { type: Date, required: true },
    evictionDate: { type: Date, required: true },
    personsAmount: { type: Number, required: true },
    childrenAmount: { type: Number, required: true },
});

module.exports = model("Reservation", ReservationSchema);
