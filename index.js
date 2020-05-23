const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const authRouter = require("./database/auth/auth_router");
const userRouter = require("./database/users/users_router");
const valuesRouter = require("./database/values/values_router");
require("dotenv").config();

const server = express();
const port = process.env.PORT || 5000;

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use(cookieParser());

server.use("/auth", authRouter);
server.use("/users", userRouter);
server.use("/values", valuesRouter);

server.get("/", (req, res, next) => {
    res.json({
        message: "Welcome to the Essentialism API",
    });
});

server.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        message: "Whoops, It looks like there was an error with the server",
    });
});

if (!module.parent) {
    server.listen(port, () => {
        console.log(`Server is up and running on ${port}`);
    });
}

module.exports = server;
