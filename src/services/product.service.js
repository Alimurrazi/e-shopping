const { Product } = require('../models');

const createProduct = async (body) => {
  const product = await Product.create(body);
  return product;
};

module.exports = {
  createProduct,
};
