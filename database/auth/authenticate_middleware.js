const jwt = require("jsonwebtoken");

function restrict() {
    return async (req, res, next) => {
        const authError = {
            message: "You are not authorized to view this content",
        };

        try {
            const token = req.header.authorization;
            if (!token) {
                req.status(401).json(authError);
            }

            jwt.verify(token, process.env.JWT_SECRET, (err, decodedPayload) => {
                if (err) {
                    return res.status(401).json(authError);
                }

                req.token = decodedPayload;
                next();
            });
        } catch (err) {
            next(err);
        }
    };
}

module.exports = restrict;
