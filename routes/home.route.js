var { getHome } = require("../controllers/home.controller");

module.exports = function(router) {
	router.get("/", getHome);
};
