const express = require("express");
const router = express.Router();
const restrict = require("../auth/authenticate_middleware");
const Users = require("../users/users_model");

// router.all("/", function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "https://www.mka-crafts.com"); //
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
// });

router.get("/", restrict("admin"), async (req, res, next) => {
    try {
        res.json(await Users.find());
    } catch (err) {
        next(err);
    }
});

module.exports = router;
