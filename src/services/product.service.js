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

const getProductById = async (id) => Product.findById(id);

const deleteProductById = async (categoryId) => {
  const response = await Product.deleteOne({ _id: categoryId });
  if (!response.deletedCount) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Product not found');
  }
  return response;
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
  getProductById,
  deleteProductById,
};
