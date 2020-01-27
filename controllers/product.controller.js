function getAllProducts(req, res, next) {
	res.json([
		{
			name: "Feta",
			price: 17.95
		},
		{
			name: "Brie",
			price: 45.24
		}
	]);
}

function getSingleProduct(req, res, next) {
	res.json({
		name: "Feta",
		price: 17.95
	});
}

module.exports = {
	getAllProducts,
	getSingleProduct
};
