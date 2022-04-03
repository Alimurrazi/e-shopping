const httpStatus = require('http-status');
const { Wishlist, Product } = require('../models');
const ApiError = require('../utils/ApiError');

const addToWishlist = async (body) => {
  const isAlreadyExists = await Wishlist.exists({ userId: body.userId, productId: body.productId });
  if (isAlreadyExists) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Product already added to wishlist');
  }
  const wishlist = await Wishlist.create(body);
  return wishlist;
};

const removeFromWishlist = async (req) => {
  const loggedInUser = req.user;
  const { wishlistId } = req.params;
  const wishlist = await Wishlist.findById(wishlistId);
  if (!wishlist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not added in Wishlist');
  }
  if (loggedInUser.role !== 'admin') {
    if (loggedInUser.id !== wishlist.userId) {
      throw new ApiError(httpStatus.FORBIDDEN, null);
    }
  }
  const response = await Wishlist.deleteOne({ _id: wishlistId });
  return response;
};

const queryWishlist = async (filter, options) => {
  const wishlist = await Wishlist.paginate(filter, options);
  const productIds = wishlist.results.map((wish) => wish.productId);
  const products = await Product.find({ _id: { $in: productIds } }, ['name', 'img', 'price']);
  return products;
};

module.exports = {
  addToWishlist,
  removeFromWishlist,
  queryWishlist,
};
