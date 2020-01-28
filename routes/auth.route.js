const {getToken,refreshToken} = require("../controllers/auth.controller")

module.exports = function (router) {
    router.post("/auth/get-token", getToken);
    router.post("/auth/refresh-token", refreshToken);
};