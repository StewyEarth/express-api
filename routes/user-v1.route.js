const { createUser } = require("../controllers/user.controller");

module.exports = function (router) {
    router.post("/api/v1/users", createUser)
}