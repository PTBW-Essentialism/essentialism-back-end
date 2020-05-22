const express = require("express");
const router = express.Router();
const restrict = require("../auth/authenticate_middleware");
const Users = require("../users/users_model");
const Initiatives = require("../account_endpoints/dashboard_model");

const router = express.Router({ mergeParams: true });

router.get("/", restrict(), async (req, res, next) => {
    try {
        res.json(await Users.find());
    } catch (err) {
        next(err);
    }
});

router.get("/:id", restrict(), validateUserID(), (req, res, next) => {
    try {
        res.status(200).json(req.user);
    } catch (err) {
        next(err);
    }
});

router.get("/:id/dashboard", restrict(), validateUserID(), (req, res, next) => {
    try {
        Initiatives.findUserInitiatives(req.params.id);
    } catch (err) {
        next(err);
    }
});

router.post(
    "/:id/dashboard",
    restrict(),
    validateUserID(),
    (req, res, next) => {
        try {
            const initiativeData = req.body.initiative;
            initiatives.addInitiative(req.params.id, initiativeData);
            res.status(201).json(`Your Initiative has been recorded`);
        } catch (err) {
            next(err);
        }
    }
);

function validateUserID() {
    return (req, res, next) => {
        users
            .findById(req.params.id)
            .then((user) => {
                if (user) {
                    req.user = user;

                    next();
                } else {
                    res.status(404).json({
                        message: "User not found",
                    });
                }
            })
            .catch((err) => {
                next(err);
            });
    };
}

module.exports = router;
