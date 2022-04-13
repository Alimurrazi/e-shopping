const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');
const CommonResponse = require('../utils/CommonResponse');
const { orderService } = require('../services');
const ApiError = require('../utils/ApiError');
const pick = require('../utils/pick');

const placeOrder = catchAsync(async (req, res) => {
  const loggedInUser = req.user;
  if (loggedInUser.role !== 'admin') {
    if (loggedInUser.id !== req.body.userId) {
      throw new ApiError(httpStatus.FORBIDDEN, null);
    }
  }
  const order = await orderService.placeOrder(req.body);
  res.status(httpStatus.OK).send(new CommonResponse(httpStatus.OK, true, order));
});

const getOrders = catchAsync(async (req, res) => {
  const loggedInUser = req.user;
  if (loggedInUser.id !== req.query.userId) {
    throw new ApiError(httpStatus.FORBIDDEN, null);
  }
  const filter = pick(req.query, ['userId']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const orders = await orderService.getOrders(filter, options);
  res.status(httpStatus.OK).send(new CommonResponse(httpStatus.Ok, true, orders));
});

const getOrderDetails = catchAsync(async (req, res) => {
  const order = await orderService.getOrderDetails(req);
  res.status(httpStatus.OK).send(new CommonResponse(httpStatus.OK, true, order));
});

module.exports = {
  placeOrder,
  getOrders,
  getOrderDetails,
};
