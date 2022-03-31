const httpStatus = require('http-status');
const { Wishlist } = require('../models');
const ApiError = require('../utils/ApiError');

const addToWishlist = async (body) => {
  const isAlreadyExists = await Wishlist.exists({ userId: body.userId, productId: body.productId });
  if (isAlreadyExists) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Product already added to wishlist');
  }
  const wishlist = await Wishlist.create(body);
  return wishlist;
};

module.exports = {
  addToWishlist,
};
