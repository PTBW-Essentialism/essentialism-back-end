const express = require("express");
const bcrypt = require("bcryptjs");
const Users = require("../users/users_model");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/register", async (req, res, next) => {
    try {
        const { username } = req.body;
        const user = await Users.findBy({ username }).first();
        if (user) {
            return res.status(409).json({
                message: "That username has already been taken",
            });
        }
        res.status(201).json(await User.add(req.body));
    } catch (err) {
        next(err);
    }
});
