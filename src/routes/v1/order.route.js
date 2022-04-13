const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { orderValidation } = require('../../validations');
const { orderController } = require('../../controllers');

const router = express.Router();

router.route('/').post(auth('order'), validate(orderValidation.placeOrder), orderController.placeOrder);
router.route('/userid/:userId').get(auth('order'), validate(orderValidation.getOrders), orderController.getOrders);
router.route('/:orderId').get(auth('order'), validate(orderValidation.getOrderDetails), orderController.getOrderDetails);

module.exports = router;
