const httpStatus = require('http-status');
const { Product } = require('../models');
const ApiError = require('../utils/ApiError');

const createProduct = async (body) => {
  const product = await Product.create(body);
  return product;
};

const queryProducts = async (filter, options) => {
  const categories = await Product.paginate(filter, options, ['name', 'img', 'price']);
  return categories;
};

const updateProductById = async (productId, updateBody) => {
  const response = await Product.updateOne({ _id: productId }, updateBody);
  if (!response.nModified) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  return response;
};

module.exports = {
  createProduct,
  queryProducts,
  updateProductById,
};
