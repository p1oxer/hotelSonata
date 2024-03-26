const ReservationService = require("../service/reservation-service");
const UserDto = require("../dtos/user-dto");
const ReservationModel = require("../models/reservation-model");
const RoomModel = require("../models/room-model");
const UserModel = require("../models/user-model");

class ReservationController {
    async reserve(req, res, next) {
        try {
            const {
                user,
                room,
                checkInDate,
                evictionDate,
                personsAmount,
                childrenAmount,
            } = req.body;
            const reservationData = await ReservationModel.create({
                user,
                room,
                checkInDate,
                evictionDate,
                personsAmount,
                childrenAmount,
            });
            const bookedRoom = await RoomModel.findOne({ _id: room });
            // const userData = await UserModel.findOne({ _id: user });
            // if (bookedRoom) {
            //     bookedRoom.booked = true;
            // } else {
            //     bookedRoom.booked = false;
            // }
            await bookedRoom.save();
            // const reservationData = await ReservationService.reserve({
            //     user,
            //     room,
            //     checkInDate,
            //     evictionDate,
            //     personsAmount,
            //     childrenAmount,
            // });

            return res.json(reservationData);
        } catch (e) {
            next(e);
        }
    }

    async getReservations(req, res, next) {
        try {
            const reservations = await ReservationService.getReservations();
            return res.json(reservations);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new ReservationController();
