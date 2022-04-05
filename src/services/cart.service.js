const httpStatus = require('http-status');
const { Cart } = require('../models');
const ApiError = require('../utils/ApiError');

const cartUpsert = async (body) => {
  const cart = await Cart.create(body);
  return cart;
};

module.exports = {
  cartUpsert,
};
