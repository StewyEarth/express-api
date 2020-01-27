var {
	getAllProducts,
	getSingleProduct
} = require("../controllers/product.controller");

module.exports = function(router) {
	router.get("/products", getAllProducts);
	router.get("/products/:id", getSingleProduct);
};
