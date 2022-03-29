const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const productValidation = require('../../validations/product.validation');
const { productController } = require('../../controllers');

const router = express.Router();

router.route('/').post(auth('manageProduct'), validate(productValidation.createProduct), productController.createProduct);
router.route('/').get(validate(productValidation.getProducts), productController.getProducts);
router.route('/:productId').get(validate(productValidation.getProduct), productController.getProductById);
router
  .route('/:productId')
  .patch(auth('manageProduct'), validate(productValidation.updateProduct), productController.updateProduct);
router
  .route('/:productId')
  .delete(auth('manageProduct'), validate(productValidation.deleteProduct), productController.deleteProduct);

module.exports = router;
