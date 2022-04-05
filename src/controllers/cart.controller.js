const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const CommonResponse = require('../utils/CommonResponse');
const { cartService } = require('../services');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');

const cartUpsert = catchAsync(async (req, res) => {
  const cart = await cartService.cartUpsert(req.body);
  res.status(httpStatus.CREATED).send(new CommonResponse(httpStatus.CREATED, true, cart));
});

module.exports = {
  cartUpsert,
};
