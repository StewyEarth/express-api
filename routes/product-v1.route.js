var {
	getAllProducts,
	getSingleProduct,
	createProduct,
	deleteProduct,
	updateProduct
} = require("../controllers/product.controller");

const { isAuthorized } = require("../middleware/authorize")
module.exports = function (router) {
	router.get("/api/v1/products", getAllProducts);
	router.get("/api/v1/products/:id", getSingleProduct);
	router.post("/api/v1/products", isAuthorized, createProduct);
	router.delete("/api/v1/products/:id", isAuthorized, deleteProduct)
	router.put("/api/v1/products/:id", isAuthorized, updateProduct)
};
