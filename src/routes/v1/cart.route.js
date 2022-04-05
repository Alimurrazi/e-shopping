const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { cartValidation } = require('../../validations');
const { cartController } = require('../../controllers');

const router = express.Router();

router.route('/').post(auth('cart'), validate(cartValidation.cartUpsert), cartController.cartUpsert);
// router
//   .route('/:wishlistId')
//   .delete(auth('wishlist'), validate(wishlistValidation.removeFromWishlist), wishlistController.removeFromWishlist);
// router.route('/').get(auth('wishlist'), validate(wishlistValidation.getWishlist), wishlistController.getWishlist);

module.exports = router;
