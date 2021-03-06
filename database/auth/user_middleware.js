const jwt = require("jsonwebtoken");

function restrictUser(role = "user") {
    return async (req, res, next) => {
        const authError = {
            message: "You are not authorized to view this content",
        };

        try {
            const token = req.headers.authorization;
            if (!token) {
                res.status(401).json(authError);
            }

            jwt.verify(token, process.env.JWT_SECRET, (err, decodedPayload) => {
                if (err || decodedPayload.userId !== req.params.id) {
                    return res.status(401).json(authError);
                }

                req.token = decodedPayload;
                console.log(decodedPayload);
                next();
            });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = restrictUser;
