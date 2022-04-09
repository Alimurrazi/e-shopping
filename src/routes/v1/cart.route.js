const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { cartValidation } = require('../../validations');
const { cartController } = require('../../controllers');

const router = express.Router();

router.route('/').post(auth('cart'), validate(cartValidation.cartUpdate), cartController.cartUpdate);
router.route('/').get(auth('cart'), validate(cartValidation.getCart), cartController.getCart);

module.exports = router;
