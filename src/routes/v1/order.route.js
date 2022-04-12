const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { wishlistValidation } = require('../../validations');
const { wishlistController } = require('../../controllers');

const router = express.Router();

router.route('/').post(auth('order'), validate(wishlistValidation.addToWishlist), wishlistController.addToWishlist);
// router
//   .route('/:wishlistId')
//   .delete(auth('wishlist'), validate(wishlistValidation.removeFromWishlist), wishlistController.removeFromWishlist);
// router.route('/').get(auth('wishlist'), validate(wishlistValidation.getWishlist), wishlistController.getWishlist);

module.exports = router;
