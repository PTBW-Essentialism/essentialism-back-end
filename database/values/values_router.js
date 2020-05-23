const express = require("express");
const db = require("../config");

const router = express.Router({ mergeParams: true });

router.get("/", async (req, res, next) => {
    try {
        res.json(await db("Values"));
    } catch (err) {
        next(Err);
    }
});

module.exports = router;
