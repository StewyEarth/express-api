const jwt = require("jsonwebtoken");
function isAuthorized(req, res, next) {
    // console.log(req.headers);
    if (!req.headers.authorization) {
        res.status(401).end();
        return;
    }
    if (req.headers.authorization.indexOf("Bearer") == -1) {
        res.status(401).end();
        return;
    }
    jwt.verify(isolateToken(req.headers.authorization), process.env.JWT_SECRET, function(error, token) {
        if (error) {
            console.error(error)
            res.status(400).end()
            return;
        }
        console.log(token.exp);
        if (Math.floor(Date.now / 1000) > token.exp) {
            res.status(401).end()
        }
        next();
    })
}

function isolateToken(authorization) {
    return authorization.split(" ")[1]
}

module.exports = {
    isAuthorized,
}