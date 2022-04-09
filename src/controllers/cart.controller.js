const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const CommonResponse = require('../utils/CommonResponse');
const { cartService } = require('../services');

const cartUpdate = catchAsync(async (req, res) => {
  const cart = await cartService.cartUpdate(req.body);
  res.status(httpStatus.OK).send(new CommonResponse(httpStatus.OK, true, cart));
});

const getCart = catchAsync(async (req, res) => {
  const cart = await cartService.getCart(req.query.userId);
  res.status(httpStatus.OK).send(new CommonResponse(httpStatus.Ok, true, cart));
});

module.exports = {
  cartUpdate,
  getCart,
};
