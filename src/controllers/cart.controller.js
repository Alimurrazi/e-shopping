const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const CommonResponse = require('../utils/CommonResponse');
const { cartService } = require('../services');
const ApiError = require('../utils/ApiError');

const cartUpdate = catchAsync(async (req, res) => {
  const loggedInUser = req.user;
  if (loggedInUser.role !== 'admin') {
    if (loggedInUser.id !== req.body.userId) {
      throw new ApiError(httpStatus.FORBIDDEN, null);
    }
  }
  const cart = await cartService.cartUpdate(req.body);
  res.status(httpStatus.OK).send(new CommonResponse(httpStatus.OK, true, cart));
});

const getCart = catchAsync(async (req, res) => {
  const loggedInUser = req.user;
  if (loggedInUser.id !== req.query.userId) {
    throw new ApiError(httpStatus.FORBIDDEN, null);
  }

  const cart = await cartService.getCart(req.query.userId);
  res.status(httpStatus.OK).send(new CommonResponse(httpStatus.Ok, true, cart));
});

module.exports = {
  cartUpdate,
  getCart,
};
