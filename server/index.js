require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./router/index");
const PORT = process.env.PORT || 5000;
const app = express();
const errorMidleware = require("./middlewares/error-middleware");

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        credentials: true,
        origin: process.env.CLIENT_URL,
    })
);
app.use("/api", router);
app.use(errorMidleware);

const { connectToDb, getDb } = require("./db");
let db;

connectToDb((err) => {
    if (!err) {
        async function start() {
            try {
                await mongoose.connect(process.env.DB_URL);
                app.listen(PORT, () => {
                    console.log("server started", PORT);
                });
                db = getDb();
            } catch (error) {
                console.error(error);
            }
        }
        start();
    } else {
        console.log("Connection Error", err);
    }
});
