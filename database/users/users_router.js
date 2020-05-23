const express = require("express");
const restrict = require("../auth/authenticate_middleware");
const restrictUser = require("../auth/user_middleware");
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

router.get("/:id", restrict(), (req, res, next) => {
    try {
        res.status(200).json(req.user);
    } catch (err) {
        next(err);
    }
});

router.post("/:id/values", restrict(), (req, res, next) => {
    try {
        Initiatives.addUserValue(req.params.id)
            .then((values) => {
                res.status(200).json(values);
            })
            .catch((err) => {
                next(err);
            });
    } catch (err) {
        next(err);
    }
});

router.get("/:id/dashboard", validateUserID(), (req, res, next) => {
    try {
        Initiatives.findUserInitiatives(req.params.id)
            .then((initiatives) => {
                res.status(200).json(initiatives);
            })
            .catch((err) => {
                next(err);
            });
    } catch (err) {
        next(err);
    }
});

router.post("/:id/dashboard", validateUserID(), (req, res, next) => {
    try {
        const initiativeData = req.body;
        Initiatives.addInitiative(req.params.id, initiativeData);
        res.status(201).json(`Your Initiative has been recorded`);
    } catch (err) {
        next(err);
    }
});

function validateUserID() {
    return (req, res, next) => {
        Users.findById(req.params.id)
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
