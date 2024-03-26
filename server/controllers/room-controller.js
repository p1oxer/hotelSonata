const RoomService = require("../service/room-service");

class RoomController {
    async getRooms(req, res, next) {
        try {
            const users = await RoomService.getRooms();
            return res.json(users);
        } catch (e){
            next(e)
        }
    }

}

module.exports = new RoomController();
