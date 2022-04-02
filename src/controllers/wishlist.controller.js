const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const CommonResponse = require('../utils/CommonResponse');
const { wishlistService } = require('../services');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');

const addToWishlist = catchAsync(async (req, res) => {
  const loggedInUser = req.user;
  if (loggedInUser.role === 'admin' || loggedInUser.id === req.body.userId) {
    const wishlist = await wishlistService.addToWishlist(req.body);
    res.status(httpStatus.CREATED).send(new CommonResponse(httpStatus.CREATED, true, wishlist));
  } else {
    res.status(httpStatus.FORBIDDEN).send(new CommonResponse(httpStatus.FORBIDDEN, false, null));
  }
});

const removeFromWishlist = catchAsync(async (req, res) => {
  await wishlistService.removeFromWishlist(req);
  res.status(httpStatus.OK).send(new CommonResponse(httpStatus.OK, true, null));
});

module.exports = {
  addToWishlist,
  removeFromWishlist,
};
