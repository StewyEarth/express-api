const Product = require("../models/product.model")
async function getAllProducts(req, res, next) {
	let products = await Product.findAll()
	res.json(products);
}

function getSingleProduct(req, res, next) {
	res.json();
}

async function createProduct(req,res,next){
	if(!req.fields){
		res.status(400).end();
		return;
	}
	let product = await Product.create(req.fields);
	res.json(product)
}

module.exports = {
	getAllProducts,
	getSingleProduct,
	createProduct
};
