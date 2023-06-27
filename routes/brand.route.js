const express = require('express');
const brandController = require('../controllers/brandController');

const router = express.Router();

router.route("/").post(brandController.createBrand).get(brandController.getBrands)

module.exports = router;