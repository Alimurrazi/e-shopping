const express = require('express');
const validate = require('../../middlewares/validate');
const router = express.Router();

// router
//   .route('/')
//   .post(auth('manageUsers'), validate(userValidation.createUser), userController.createUser)
//   .get(auth('getUsers'), validate(userValidation.getUsers), userController.getUsers);

router.route('/').get(':categoryId/products', validate(productValidation.getProducts), productController.getProducts);

module.exports = router;