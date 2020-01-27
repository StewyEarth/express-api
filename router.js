var express = require("express");
var router = express.Router();
var { join } = require("path");
var { readdir } = require("fs");

readdir(join(__dirname, "routes"), fileHandler);

function fileHandler(error, files) {
	if(error) {
		console.error(error);
		return;
	}

	for (file of files) {
		require(join(__dirname, "routes", file))(router);
	}
}

module.exports = router;
