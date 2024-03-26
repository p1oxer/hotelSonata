const ReservationModel = require("../models/reservation-model");
const TokenService = require('../service/token-service')
class ReservationService {
    async getReservations() {
        const reservations = await ReservationModel.find();
        // const userData = await 
        return reservations;
    }
}

module.exports = new ReservationService();
