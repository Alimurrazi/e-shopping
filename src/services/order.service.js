const httpStatus = require('http-status');
const { Order } = require('../models');
const ApiError = require('../utils/ApiError');

const getOrderDetails = async (req) => {
  const loggedInUser = req.user;
  const { orderId } = req.params;
  const order = await Order.findById(orderId);
  if (!order) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Order not Placed');
  }
  if (loggedInUser.role !== 'admin') {
    if (loggedInUser.id !== order.userId) {
      throw new ApiError(httpStatus.FORBIDDEN, null);
    }
  }
  return order;
};

const placeOrder = async (body) => {
  const order = await Order.create(body);
  return order;
};

const getOrders = async (filter, options) => {
  const orders = await Order.paginate(filter, options);
  return orders;
};

module.exports = {
  placeOrder,
  getOrders,
  getOrderDetails,
};
