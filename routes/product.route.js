const express = require('express');
const productController = require('../controllers/product.controllers');
const uploader = require('../middleware/uploader');
const router = express.Router();
// const  uploader = require("../middleware/uploader")

router.post("/file-upload", uploader.single("image"), productController.fileUpload);

router.route("/bulk-update").patch(productController.bulkUpdateProduct)
router.route("/bulk-delete").delete(productController.bulkUpdateProductDelete)

router.route('/')
.get(productController.getProducts)
.post(productController.createProduct)


router.route("/:id")
.patch(productController.updateProduct)
.delete(productController.deleteProductById)


module.exports = router;