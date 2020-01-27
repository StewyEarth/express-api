function getHome(req, res, next) {
	res.json({
		message: "Hello, Norbert"
	});
}

module.exports = {
	getHome
};
