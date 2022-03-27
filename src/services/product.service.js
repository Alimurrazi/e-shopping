const { Product } = require('../models');

const createProduct = async (body) => {
  const product = await Product.create(body);
  return product;
};

const queryProducts = async (filter, options) => {
  const categories = await Product.paginate(filter, options, ['name', 'img', 'price']);
  return categories;
};

module.exports = {
  createProduct,
  queryProducts,
};
