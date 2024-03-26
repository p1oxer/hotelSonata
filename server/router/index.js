const Router = require("express").Router;
const UserController = require("../controllers/user-controller");
const RoomController = require("../controllers/room-controller");
const ReservationController = require("../controllers/reservation-controller");

const router = new Router();
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth-middleware");
router.post(
    "/register",
    body("email").isEmail(),
    body("password").isLength({ min: 3, max: 32 }),
    UserController.registration
);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.get("/activate/:link", UserController.activate);
router.get("/refresh", UserController.refresh);
router.get("/users",UserController.getUsers);

router.get("/rooms", RoomController.getRooms);

router.post("/reserve", ReservationController.reserve)
router.get("/getReservations", ReservationController.getReservations)
module.exports = router;
