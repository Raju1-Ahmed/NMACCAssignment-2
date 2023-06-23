const express = require('express');
// const { getProducts, createProduct, updateProduct } = require('../controllers/product.controllers');
const productController = require('../controllers/product.controllers');
const router = express.Router();


router.route("/bulk-update").patch(productController.bulkUpdateProduct)
router.route("/bulk-delete").delete(productController.bulkUpdateProductDelete)

router.route('/')
.get(productController.getProducts)
.post(productController.createProduct)


router.route("/:id")
.patch(productController.updateProduct)
.delete(productController.deleteProductById)


module.exports = router;