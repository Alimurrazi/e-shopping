const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const { wishlistValidation } = require('../../validations');
const { wishlistController } = require('../../controllers');

const router = express.Router();

router.route('/').post(auth('wishlist'), validate(wishlistValidation.addToWishlist), wishlistController.addToWishlist);

module.exports = router;
