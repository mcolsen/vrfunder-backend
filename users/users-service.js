module.exports = {
    isValid,
    checkRole,
};

function isValid(user) {
    return Boolean(user.username && user.password && typeof user.password === "string");
}

function checkRole(role) {
    return function (req, res, next) {
        if (req.jwt.role === role) {
            next();
        } else {
            res.status(403).json({ message: "you have no access" });
        }
    };
}