const express = require("express");
const bcrypt = require("bcryptjs");
const Users = require("../users/users_model");
const jwt = require("jsonwebtoken");

const router = express.Router({
    mergeParams: true,
});

router.post("/register", async (req, res, next) => {
    try {
        const { username } = req.body;
        const user = await Users.findBy({ username }).first();

        if (user) {
            return res.status(409).json({
                message: "That username has already been taken",
            });
        }
        res.status(201).json(await Users.add(req.body));
    } catch (err) {
        next(err);
    }
});

router.post("/login", async (req, res, next) => {
    const authError = {
        message: "Invalid Credentials",
    };
    try {
        const user = await Users.findBy({
            username: req.body.username,
        }).first();

        if (!user) {
            return res.status(401).json(authError);
        }

        const passwordValid = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!passwordValid) {
            return res.status(401).json(authError);
        }

        const tokenPayload = {
            userId: user.id,
            userRole: "user",
        };

        token = jwt.sign(tokenPayload, process.env.JWT_SECRET, {
            expiresIn: "24h",
        });

        res.cookie(
            "token",
            jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: "24h" })
        );

        res.json({
            token: token,
            userRole: user.role,
            userId: user.id,
            message: `Welcome ${user.username}! ${user.id}`,
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
