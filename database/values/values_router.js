const express = require("express");
const db = require("../config");

const router = express.Router({ mergeParams: true });

// router.all("/", function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*"); //
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");
//     next();
// });

router.get("/", async (req, res, next) => {
    try {
        res.json(await db("values"));
    } catch (err) {
        next(Err);
    }
});

module.exports = router;
