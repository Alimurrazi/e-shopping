const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const productValidation = require('../../validations/product.validation');
const { productController } = require('../../controllers');

const router = express.Router();

// router.route('/').get(':categoryId/products', validate(productValidation.getProducts), productController.getProducts);
router.route('/').post(auth('manageProduct'), validate(productValidation.createProduct), productController.createProduct);
router.route('/').get(validate(productValidation.getProducts), productController.getProducts);

module.exports = router;
