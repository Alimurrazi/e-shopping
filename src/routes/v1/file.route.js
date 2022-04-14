const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
// const { orderValidation } = require('../../validations');
const { fileController } = require('../../controllers');

const router = express.Router();

// router.route('/').post(auth('order'), validate(orderValidation.placeOrder), orderController.placeOrder);
router.route('/').post(fileController.saveFile);

module.exports = router;
