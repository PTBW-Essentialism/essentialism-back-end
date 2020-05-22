const express = require("express");
const router = express.Router();
const restrict = require("../auth/authenticate_middleware");
const Users = require("../users/users_model");

router.get("/", restrict(), async (req, res, next) => {
    try {
        res.json(await Users.find());
    } catch (err) {
        next(err);
    }
});

module.exports = router;
