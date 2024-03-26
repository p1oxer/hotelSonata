const RoomModel = require("../models/room-model");

class RoomService {
    async getRooms() {
        const rooms = await RoomModel.find();
        return rooms;
    }
}

module.exports = new RoomService();
