const express = require("express");
const restrict = require("../auth/authenticate_middleware");
const Users = require("../users/users_model");
const Dashboard = require("../account_endpoints/dashboard_model");
const db = require("../config")

const router = express.Router({ mergeParams: true });

router.all("/", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); //
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

router.get("/", restrict(), async (req, res, next) => {
    try {
        res.json(await Users.find());
    } catch (err) {
        next(err);
    }
});

router.get("/:id", restrict(), async (req, res, next) => {
    try {
        res.json(await Users.findById(req.params.id));
    } catch (err) {
        next(err);
    }
});

router.get("/:id/focus", restrict(), (req, res, next) => {
    try {
        Dashboard.findUserValues(req.params.id)
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

router.post("/:id/focus", (req, res, next) => {
    try {
        const focusBody = req.body;
        Dashboard.addUserValue(req.params.id, focusBody)
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

router.get("/:id/focus/:focusId", restrict(), (req, res, next) => {
    try {
        Dashboard.findUserValuesById(req.params.id, req.params.focusId)
            .then((value) => {
                res.status(200).json(value);
            })
            .catch((err) => {
                next(err);
            });
    } catch (err) {
        next(err);
    }
});

router.put("/:id/focus/:focusId", restrict(), (req, res, next) => {
    try{ 
        const payload = {
            importance: req.body.importance
        }

        await db("uservalues as uv").where("uv.id", req.params.focusId).update(payload)

        const updatedUserValues = await db("uservalues as uv").where("uv.id", req.params.id).first()

        res.json(updatedUserValues)
    } catch(err) {
        next(err)
    }
})

router.delete("/:id/focus/:focusId", validateUserID(), (req, res, next) => {
    try {
        Dashboard.removeUserValues(req.params.focusId)
            .then((del) => {
                res.status(200).json({ message: "Deleted successfully" });
            })
            .catch((err) => {
                console.log(err);
            });
    } catch (err) {
        next(err);
    }
});

router.get("/:id/initiatives", validateUserID(), (req, res, next) => {
    try {
        Dashboard.findUserInitiatives(req.params.id)
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

router.get("/:id/initiatives/:InId", validateUserID(), (req, res, next) => {
    try {
        Dashboard.findUserInitiativesById(req.params.id, req.params.InId)
            .then((initiatives) => {
                if (initiatives) {
                    res.json(initiatives);
                } else {
                    res.status(404).json({
                        message: "Initiative not found",
                    });
                }
            })
            .catch((err) => {
                next(err);
            });
    } catch (err) {
        next(err);
    }
});

router.post("/:id/initiatives", validateUserID(), (req, res, next) => {
    try {
        const DashboardData = req.body;
        Dashboard.addInitiative(req.params.id, DashboardData);
        res.status(201).json(`Your Initiative has been recorded`);
    } catch (err) {
        next(err);
    }
});

router.delete("/:id/initiatives/:InId", validateUserID(), (req, res, next) => {
    Dashboard.removeInitiative(req.params.InId)
        .then((del) => {
            res.status(200).json({ message: "Deleted successfully" });
        })
        .catch((err) => {
            res.status(500).json({ message: err });
        });
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
